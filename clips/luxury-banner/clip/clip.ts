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
    delay: 1000,
    easing: "easeInOutCubic",
  }),
  0,
);

clip.addIncident(
  color({
    selector: `.title, .subtitle`,
    from: "transparent",
    to: "var(--fontColor)",
    duration: 50,
  }),
  1650,
);

clip.addIncident(
  clipPath({
    selector: `.title-overlay, .subtitle-overlay`,
    from: "inset(0% 0% 0% 0%)",
    to: "inset(0% 100% 0% 0%)",
    duration: 800,
    easing: "easeInOutCubic",
  }),
  1650,
);

const productsLength = initParams[0].value.products.length;

Array.from({ length: productsLength }).forEach((_, index) => {
  const animationDuration = 1300;
  const displayImageDuration = 6000;
  const delayBetweenImageChange = 200;
  const startingPosition =
    index *
    (animationDuration + displayImageDuration + delayBetweenImageChange);
  const endingPosition = startingPosition + displayImageDuration;
  const startingPositionOfSecondTextOverlay = endingPosition + 500;
  const endingPositionOfSecondTextOverlay = startingPosition - 400;
  const animationDurationOfSecondTextOverlay = 600;
  // const startingPositionOfTextColorAnimation = startingPosition + 2000;
  // const animationDurationOfTextColorAnimation = 1300;

  clip.addIncident(
    clipPath({
      selector: `.title-overlay-2, .subtitle-overlay-2`,
      from: "inset(0% 100% 0% 0%)",
      to: "inset(0% 0% 0% 0%)",
      duration: animationDurationOfSecondTextOverlay,
      easing: "easeInOutCubic",
    }),
    startingPositionOfSecondTextOverlay,
  );

  if (index > 0) {
    clip.addIncident(
      clipPath({
        selector: `.title-overlay-2, .subtitle-overlay-2`,
        from: "inset(0% 0% 0% 0%)",
        to: "inset(0% 0% 0% 100%)",
        duration: animationDurationOfSecondTextOverlay,
        easing: "easeInOutCubic",
      }),
      endingPositionOfSecondTextOverlay,
    );
  }

  clip.addIncident(
    clipPath({
      selector: `.horizontal-line`,
      from: "inset(0% 0% 0% 0%)",
      to: "inset(0% 0% 0% 100%)",
      duration: 800,
      easing: "easeInOutCubic",
    }),
    startingPositionOfSecondTextOverlay,
  );

  clip.addIncident(
    clipPath({
      selector: `.horizontal-line`,
      from: "inset(0% 100% 0% 0%)",
      to: "inset(0% 0% 0% 0%)",
      duration: 600,
      easing: "easeInOutCubic",
    }),
    startingPositionOfSecondTextOverlay + 900,
  );

  clip.addIncident(
    clipPathExpandFromLineCombo({
      selector: `#product-${index} img`,
      duration: 700,
      startingPosition,
      endingPosition,
      easing: "easeInOutCubic",
    }),
    0,
  );

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
    // clip.addIncident(
    //   showAndHideTextCombo({
    //     selector: `.title, .title-2`,
    //     displayTextDuration: clip.calculatedDuration,
    //     // duration: animationDuration,
    //     enterScenePosition: 800,
    //     exitScenePosition: endingPosition,
    //     easing: "easeInOutCubic",
    //   }),
    //   0
    // );
    // clip.addIncident(
    //   showAndHideTextCombo({
    //     selector: `.subtitle, .subtitle-2`,
    //     displayTextDuration: clip.calculatedDuration,
    //     // duration: animationDuration,
    //     enterScenePosition: 1000,
    //     exitScenePosition: endingPosition,
    //     easing: "easeInOutCubic",
    //   }),
    //   0
    // );
    // clip.addIncident(
    //   clipPath({
    //     selector: `.discount-wrapper`,
    //     from: "inset(0% 0% 0% 0%)",
    //     to: "inset(0% 100% 0% 0%)",
    //     duration: 800,
    //     delay: 1000,
    //     easing: "easeInOutCubic",
    //   }),
    //   endingPosition
    // );
  }
});

clip.addIncident(
  clipPath({
    selector: `.title-overlay, .subtitle-overlay`,
    from: "inset(100% 0% 0% 0%)",
    to: "inset(0% 0% 0% 0%)",
    duration: 600,
    easing: "easeInOutCubic",
  }),
  clip.calculatedDuration - 1000,
);

clip.addIncident(
  color({
    selector: `.title, .subtitle`,
    from: "var(--fontColor)",
    to: "transparent",
    duration: 50,
  }),
  clip.calculatedDuration - 400,
);

clip.addIncident(
  clipPath({
    selector: `.title-overlay, .subtitle-overlay`,
    from: "inset(0% 0% 0% 0%)",
    to: "inset(0% 100% 0% 0%)",
    duration: 800,
    easing: "easeInOutCubic",
  }),
  clip.calculatedDuration,
);

clip.addIncident(
  clipPath({
    selector: `.horizontal-line`,
    from: "inset(0% 0% 0% 0%)",
    to: "inset(0% 100% 0% 0%)",
    duration: 600,
    easing: "easeInOutCubic",
  }),
  clip.calculatedDuration,
);

clip.addIncident(
  opacity({
    selector: `svg`,
    from: 1,
    to: 0,
    duration: 700,
    easing: "easeInOutCubic",
  }),
  clip.calculatedDuration,
);

export default renderDonkeyclip({ clipId: pkg.id, initParams, clip });
