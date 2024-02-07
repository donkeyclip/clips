/* eslint-disable sonarjs/no-duplicate-string */
import { HTMLClip } from "@donkeyclip/motorcortex";
import { renderDonkeyclip } from "@donkeyclip/server";
import pkg from "../package.json";
import css from "./clip.css";
import html from "./clip.html";
import initParams from "./initParams";
import initParamsValidationRules from "./initParamsValidationRules";
import {
  backgroundPosition,
  clipPath,
  scale,
  showAndHideTextCombo,
  transformTop,
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
      type: `google-font`,
      src: `https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@700&family=Poppins:wght@700&display=swap`,
    },
  ],
});

const productsLength = initParams[0].value.products.length;

clip.addIncident(
  clipPath({
    selector: `.title-subtitle-wrapper`,
    from: "inset(100% 0% 0% 0%)",
    to: "inset(0% 0% 0% 0%)",
    duration: 800,
    delay: 400,
    easing: "easeInOutCubic",
  }),
  0,
);

clip.addIncident(
  clipPath({
    selector: `.discount-wrapper`,
    from: "inset(0% 100% 0% 0%)",
    to: "inset(0% 0% 0% 0%)",
    duration: 800,
    delay: 1000,
    easing: "easeInOutCubic",
  }),
  0,
);

Array.from({ length: productsLength }).forEach((_, index) => {
  const animationDuration = 1300;
  const displayImageDuration = 4000;
  const delayBetweenImageChange = -1450;
  const startingPosition =
    index *
    (animationDuration + displayImageDuration + delayBetweenImageChange);
  const endingPosition = startingPosition + displayImageDuration;

  const startingPositionOfDiscountAnimation = endingPosition - 2500;
  const startingPositionOfTextColorAnimation = startingPosition + 2000;
  const animationDurationOfTextColorAnimation = 1300;

  clip.addIncident(
    clipPath({
      selector: `#product-${index} img`,
      from: "inset(0% 0% 100% 0%)",
      to: "inset(0% 0% 0% 0%)",
      duration: animationDuration + 500,
      easing: "easeInOutCubic",
    }),
    startingPosition,
  );

  clip.addIncident(
    clipPath({
      selector: `#product-${index} img`,
      from: "inset(0% 0% 0% 0%)",
      to: "inset(100% 0% 0% 0%)",
      duration: animationDuration,
      easing: "easeInOutCubic",
    }),
    endingPosition,
  );

  clip.addIncident(
    backgroundPosition({
      selector: `.title`,
      from: "100% 0%",
      to: "0% 100%",
      duration: animationDurationOfTextColorAnimation,
      easing: "easeInOutCubic",
    }),
    startingPositionOfTextColorAnimation,
  );
  clip.addIncident(
    backgroundPosition({
      selector: `.title`,
      from: "0% 100%",
      to: "-100% 0%",
      duration: animationDurationOfTextColorAnimation,
      easing: "easeInOutCubic",
    }),
    startingPositionOfTextColorAnimation +
      animationDurationOfTextColorAnimation +
      100,
  );

  clip.addIncident(
    backgroundPosition({
      selector: `.subtitle`,
      from: "100% 0%",
      to: "0% 100%",
      duration: animationDurationOfTextColorAnimation,
      easing: "easeInOutCubic",
    }),
    startingPositionOfTextColorAnimation,
  );
  clip.addIncident(
    backgroundPosition({
      selector: `.subtitle`,
      from: "0% 100%",
      to: "-100% 0%",
      duration: animationDurationOfTextColorAnimation,
      easing: "easeInOutCubic",
    }),
    startingPositionOfTextColorAnimation +
      animationDurationOfTextColorAnimation +
      100,
  );
  // discount animation
  // ENTER SCENE STEPS
  // STEP 1 make the top text larger
  clip.addIncident(
    scale({
      selector: `.text`,
      from: 1,
      to: 1.3,
      duration: animationDuration,
      easing: "easeInOutCubic",
    }),
    startingPositionOfDiscountAnimation,
  );
  // STEP 2 make the bottom text smaller
  clip.addIncident(
    scale({
      selector: `.secondary-text`,
      from: 1,
      to: 0.6,
      duration: animationDuration,
      easing: "easeInOutCubic",
    }),
    startingPositionOfDiscountAnimation,
  );
  // STEP 3 make the top text drop down
  clip.addIncident(
    transformTop({
      selector: `.text`,
      from: "0px",
      to: "5px",
      duration: animationDuration,
      easing: "easeInOutCubic",
    }),
    startingPositionOfDiscountAnimation,
  );
  // STEP 4 make the bottom text drop down
  clip.addIncident(
    transformTop({
      selector: `.secondary-text`,
      from: "0px",
      to: "30px",
      duration: animationDuration,
      easing: "easeInOutCubic",
    }),
    startingPositionOfDiscountAnimation,
  );
  // EXIT SCENE STEPS
  // STEP 1 reset top text to its initial scale
  clip.addIncident(
    scale({
      selector: `.text`,
      from: 1.3,
      to: 1,
      duration: animationDuration,
      easing: "easeInOutCubic",
    }),
    startingPositionOfDiscountAnimation + 1500,
  );
  // STEP 2 reset bottom text to its initial scale
  clip.addIncident(
    scale({
      selector: `.secondary-text`,
      from: 0.6,
      to: 1,
      duration: animationDuration,
      easing: "easeInOutCubic",
    }),
    startingPositionOfDiscountAnimation + 1500,
  );
  // STEP 3 reset top text to its initial position
  clip.addIncident(
    transformTop({
      selector: `.text`,
      from: "5px",
      to: "0px",
      duration: animationDuration,
      easing: "easeInOutCubic",
    }),
    startingPositionOfDiscountAnimation + 1500,
  );
  // STEP 4 reset bottom text to its initial position
  clip.addIncident(
    transformTop({
      selector: `.secondary-text`,
      from: "30px",
      to: "0px",
      duration: animationDuration,
      easing: "easeInOutCubic",
    }),
    startingPositionOfDiscountAnimation + 1500,
  );
  if (index === productsLength - 1) {
    clip.addIncident(
      showAndHideTextCombo({
        selector: `.title, .title-2`,
        displayTextDuration: clip.calculatedDuration,
        // duration: animationDuration,
        enterScenePosition: 800,
        exitScenePosition: endingPosition,
        easing: "easeInOutCubic",
      }),
      0,
    );
    clip.addIncident(
      showAndHideTextCombo({
        selector: `.subtitle, .subtitle-2`,
        displayTextDuration: clip.calculatedDuration,
        // duration: animationDuration,
        enterScenePosition: 1000,
        exitScenePosition: endingPosition,
        easing: "easeInOutCubic",
      }),
      0,
    );
    clip.addIncident(
      clipPath({
        selector: `.title-subtitle-wrapper`,
        from: "inset(0% 0% 0% 0%)",
        to: "inset(100% 0% 0% 0%)",
        duration: 800,
        delay: 400,
        easing: "easeInOutCubic",
      }),
      endingPosition,
    );

    clip.addIncident(
      clipPath({
        selector: `.discount-wrapper`,
        from: "inset(0% 0% 0% 0%)",
        to: "inset(0% 100% 0% 0%)",
        duration: 800,
        delay: 1000,
        easing: "easeInOutCubic",
      }),
      endingPosition,
    );
  }
});

export default renderDonkeyclip({ clipId: pkg.id, initParams, clip });
