/* eslint-disable sonarjs/no-duplicate-string */
import { HTMLClip } from "@donkeyclip/motorcortex";
import { renderDonkeyclip } from "@donkeyclip/server";
import pkg from "../package.json";
import css from "./clip.css";
import html from "./clip.html";
import initParams from "./initParams";
import initParamsValidationRules from "./initParamsValidationRules";
import {
  clipPath,
  clipPathExpandFromLineCombo,
  color,
  opacity,
} from "./clipIncidents";

const element = document.getElementById("clip");

if (!element)
  throw new Error(
    "No element with id 'clip' found, so can't show the clip! Please check your html",
  );

const clip = new HTMLClip({
  html,
  css,
  host: element,
  initParamsValidationRules,
  initParams: initParams[0].value,
  containerParams: {
    width: "300px",
    height: "300px",
  },
  fonts: [
    {
      src: `https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@700&family=Poppins:wght@100;700&display=swap`,
      type: `google-font`,
    },
  ],
});

const productsLength = initParams[0].value.products.length;

const animationDuration = 1300;
const displayImageDuration = 6000;
const delayBetweenImageChange = 200;
const animationDurationOfCombos = 700;

const animateClipStart = () => {
  const startingPositionOfImageRightToLeftAnimation =
    0 * (animationDuration + displayImageDuration + delayBetweenImageChange);
  clip.addIncident(
    opacity({
      selector: `svg`,
      from: 0,
      to: 1,
      duration: 1500,
      easing: "easeInOutCubic",
    }),
    0,
  );

  clip.addIncident(
    clipPath({
      selector: `.title-overlay, .subtitle-overlay`,
      from: "inset(100% 0% 0% 0%)",
      to: "inset(0% 0% 0% 0%)",
      duration: 600,
      easing: "easeInOutCubic",
    }),
    startingPositionOfImageRightToLeftAnimation + animationDurationOfCombos,
  );

  clip.addIncident(
    color({
      selector: `.title, .subtitle`,
      from: "transparent",
      to: "var(--fontColor)",
      duration: 50,
    }),
    startingPositionOfImageRightToLeftAnimation + animationDuration + 50,
  );

  clip.addIncident(
    clipPath({
      selector: `.title-overlay, .subtitle-overlay`,
      from: "inset(0% 0% 0% 0%)",
      to: "inset(0% 100% 0% 0%)",
      duration: 800,
      easing: "easeInOutCubic",
    }),
    startingPositionOfImageRightToLeftAnimation + animationDuration,
  );

  clip.addIncident(
    clipPath({
      selector: `.horizontal-line`,
      from: "inset(0% 100% 0% 0%)",
      to: "inset(0% 0% 0% 0%)",
      duration: 600,
      easing: "easeInOutCubic",
    }),
    startingPositionOfImageRightToLeftAnimation,
  );
};

const animateTextOverlays = (
  endingPosition: number,
  duration: number,
  index: number,
) => {
  if (index === productsLength - 1) return;
  // SLIDE OVERLAY FROM BOTTOM TO TOP
  clip.addIncident(
    clipPath({
      selector: `.title-overlay-2, .subtitle-overlay-2`,
      from: "inset(100% 0% 0% 0%)",
      to: "inset(0% 0% 0% 0%)",
      duration,
      easing: "easeInOutCubic",
    }),
    endingPosition,
  );
  // SLIDE OVERLAY FROM RIGHT TO LEFT
  clip.addIncident(
    clipPath({
      selector: `.title-overlay-2, .subtitle-overlay-2`,
      from: "inset(0% 0% 0% 0%)",
      to: "inset(0% 100% 0% 0%)",
      duration,
      easing: "easeInOutCubic",
    }),
    endingPosition + duration,
  );
};

const animateImages = (
  index: number,
  animationDurationOfCombos: number,
  startingPosition: number,
  endingPosition: number,
) => {
  const initialImagePath = "inset(0% 0% 95% 100%)";
  const endingImagePath = "inset(0% 0% 95% 0%)";

  const initialImagePath2 = "inset(0% 0% 95% 0%)";
  const endingImagePath2 = "inset(0% 0% -1% 0%)";

  clip.addIncident(
    clipPathExpandFromLineCombo({
      selector: `#product-${index} img`,
      duration: animationDurationOfCombos,
      startingPosition,
      endingPosition,
      initialPath: initialImagePath,
      endingPath: endingImagePath,
      initialPath2: initialImagePath2,
      endingPath2: endingImagePath2,
      easing: "easeInOutCubic",
    }),
    0,
  );
};

animateClipStart();

Array.from({ length: productsLength }).forEach((_, index) => {
  const startingPosition =
    index *
    (animationDuration + displayImageDuration + delayBetweenImageChange);
  const endingPosition = startingPosition + displayImageDuration;

  animateImages(
    index,
    animationDurationOfCombos,
    startingPosition,
    endingPosition,
  );
  animateTextOverlays(endingPosition, animationDurationOfCombos, index);

  clip.addIncident(
    opacity({
      selector: `.img-overlay`,
      from: 0,
      to: 1,
      duration: 1000,
      easing: "easeInOutCubic",
    }),
    startingPosition + 1200,
  );

  clip.addIncident(
    opacity({
      selector: `.img-overlay`,
      from: 1,
      to: 0,
      duration: 1000,
      easing: "easeInOutCubic",
    }),
    endingPosition - 1000,
  );

  if (index === productsLength - 1) {
    // RESET ANIMATIONS TO INITIAL STATE

    clip.addIncident(
      opacity({
        selector: `svg`,
        from: 1,
        to: 0,
        duration: 700,
        easing: "easeInOutCubic",
      }),
      endingPosition + animationDurationOfCombos,
    );

    clip.addIncident(
      clipPath({
        selector: `.horizontal-line`,
        from: "inset(0% 0% 0% 0%)",
        to: "inset(0% 100% 0% 0%)",
        duration: 600,
        easing: "easeInOutCubic",
      }),
      endingPosition + animationDurationOfCombos,
    );

    clip.addIncident(
      clipPath({
        selector: `.title-overlay, .subtitle-overlay`,
        from: "inset(100% 0% 0% 0%)",
        to: "inset(0% 0% 0% 0%)",
        duration: 600,
        easing: "easeInOutCubic",
      }),
      endingPosition,
    );

    clip.addIncident(
      color({
        selector: `.title, .subtitle`,
        from: "var(--fontColor)",
        to: "transparent",
        duration: 50,
      }),
      endingPosition + animationDurationOfCombos,
    );

    clip.addIncident(
      clipPath({
        selector: `.title-overlay, .subtitle-overlay`,
        from: "inset(0% 0% 0% 0%)",
        to: "inset(0% 100% 0% 0%)",
        duration: 800,
        easing: "easeInOutCubic",
      }),
      endingPosition + 600,
    );
  }
});

export default renderDonkeyclip({ clipId: pkg.id, initParams, clip });
