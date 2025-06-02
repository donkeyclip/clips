import { Definition, utils } from "@donkeyclip/motorcortex";
import Player from "@donkeyclip/motorcortex-player";
import initParamsApply from "./scripts/initParamsApply";

// eslint-disable-next-line
function addWindowListeners(clip: any, liveDef: any) {
  window.addEventListener("message", (event) => {
    if (event.data.what === "initParamsChange") {
      const newLiveDef = initParamsApply(
        liveDef,
        event.data.initParams as NonNullable<Definition["props"]>["initParams"],
        // eslint-disable-next-line
      ) as any;
      const projector = document.getElementById("projector");
      if (!projector) {
        console.error("Failed to get projector element!");
        return;
      }
      projector.innerHTML = "<div id='clip'></div>";
      const newClipContainer = document.getElementById("clip");
      // set clip container's dimensions
      if (newClipContainer != null) {
        newClipContainer.style.width = clip.props.containerProps?.width;
        newClipContainer.style.height = clip.props.containerProps?.height;
      }
      newLiveDef.props.host = newClipContainer;
      const newClip = utils.clipFromDefinition(newLiveDef);
      if (
        ("result" in newClip && newClip.result === false) ||
        ("nonBlockingErrorClip" in newClip && newClip.nonBlockingErrorClip)
      ) {
        // if the initParams validation has failed
        return alert("Error with init params");
      }
    }
  });
}

export function renderDonkeyclip({
  clipId,
  initParams,
  clip,
}: {
  clipId: string;
  // eslint-disable-next-line
  initParams: Record<string, any>;
  // eslint-disable-next-line
  clip: any;
}) {
  const liveDef = clip.exportLiveDefinition();
  if (liveDef.props != null) liveDef.props.id = clip.id;

  const clipDef = clip.exportDefinition();
  addWindowListeners(clip, liveDef);

  const clipContainer = document.getElementById("clip");
  // set clip container's dimensions
  if (clipContainer != null) {
    clipContainer.style.width = clip.props.containerProps?.width;
    clipContainer.style.height = clip.props.containerProps?.height;
  } else {
    console.error("Failed to get clip container");
  }

  const searchQuery = window.location.search.split("?")[1] || "";
  const params = searchQuery.split("&").map((pair) => pair.split("="));

  type SearchOptions = {
    initParams?: string;
    settings?: string;
  };

  const searchOptions = {} as SearchOptions;
  for (const i in params) {
    // eslint-disable-next-line
    searchOptions[params[i][0] as keyof SearchOptions] = params[i][1] as any;
  }

  let playerOptions = {};
  if (searchOptions.settings) {
    try {
      playerOptions = JSON.parse(atob(searchOptions.settings));
    } catch (e) {
      console.error("Invalid options:", searchOptions.settings, e);
    }
  }

  window.top?.postMessage(
    {
      what: "clipLoaded",
      clipDims: clip.props.containerProps,
      clipDef: JSON.parse(JSON.stringify(clipDef)),
      clipId,
      initParams,
      selectedParamsIndex: searchOptions.initParams,
    },
    "*",
  );

  let timeout: ReturnType<typeof setTimeout> | null = null;
  const player = new Player({
    clip,
    ...playerOptions,
    onMillisecondChange: (ms: number) => {
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => {
        window.top?.postMessage(
          {
            what: "msChanged",
            millisecond: ms,
          },
          "*",
        );
      }, 100);
    },
    pointerEvents: false,
  });
  const checkBlockWaitings = () => Object.keys(clip.blockingWaitings).length;

  if (searchOptions.initParams) {
    const interval = setInterval(() => {
      if (!checkBlockWaitings()) {
        clearInterval(interval);
        player.changeInitParams(
          // eslint-disable-next-line
          initParams[searchOptions.initParams as any].value,
        );
      }
    }, 100);
  }
}
