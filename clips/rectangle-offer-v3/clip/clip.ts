/* eslint-disable sonarjs/no-duplicate-string */
import { HTMLClip } from "@donkeyclip/motorcortex";
import { renderDonkeyclip } from "@donkeyclip/server";
import pkg from "../package.json";
import css from "./clip.css";
import html from "./clip.html";
import initParams from "./initParams";
import initParamsValidationRules from "./initParamsValidationRules";
import { clipPath, showAndHideTextCombo } from "./clipIncidents";

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

// clip.addIncident(
//   clipPath({
//     selector: `.title`,
//     from: "inset(0% 0% 100% 0%)",
//     to: "inset(0% 0% 0% 0%)",
//     duration: 1000,
//     delay: 400,
//     easing: "easeInOutCubic",
//   }),
//   0,
// );

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
  const delayBetweenImageChange = 500;
  const startingPosition =
    index *
    (animationDuration + displayImageDuration + delayBetweenImageChange);
  const endingPosition = startingPosition + displayImageDuration;
  // clip path animation
  // clip.addIncident(
  //   clipPathImagesCombo({
  //     selector: `#product-${index} img`,
  //     duration: animationDuration,
  //     startingPosition,
  //     endingPosition,
  //     easing: "easeInOutCubic",
  //   }),
  //   0,
  // );
  // // text animation
  // clip.addIncident(
  //   showAndHideTextCombo({
  //     selector: `#product-${index} .description`,
  //     displayTextDuration: displayImageDuration,
  //     duration: animationDuration,
  //     enterScenePosition: startingPosition,
  //     exitScenePosition: endingPosition,
  //     easing: "easeInOutCubic",
  //   }),
  //   0,
  // );

  clip.addIncident(
    clipPath({
      selector: `#product-${index} img`,
      from: "inset(0% 0% 100% 0%)",
      to: "inset(0% 0% 0% 0%)",
      duration: 800,
      delay: 400,
      easing: "easeInOutCubic",
    }),
    startingPosition,
  );

  clip.addIncident(
    clipPath({
      selector: `#product-${index} img`,
      from: "inset(0% 0% 0% 0%)",
      to: "inset(0% 0% 100% 0%)",
      duration: 800,
      delay: 400,
      easing: "easeInOutCubic",
    }),
    endingPosition,
  );

  // clip.addIncident(
  //   clipPath({
  //     selector: `#product-${index} .horizontal-line`,
  //     from: "inset(0% 20% 0% 0%)",
  //     to: "inset(5% 100% 0% 0%)",
  //     duration: 800,
  //     // delay: endingPosition - 500,
  //     easing: "easeOutCubic",
  //   }),
  //   endingPosition,
  // );
  // button animation
  // clip.addIncident(
  //   clipPath({
  //     selector: `#product-${index} .cta-wrapper`,
  //     from: "inset(100% 0% 0% 0%)",
  //     to: "inset(0% 0% 0% 0%)",
  //     duration: 800,
  //     delay: 600,
  //     easing: "easeInOutCubic",
  //   }),
  //   startingPosition,
  // );

  // clip.addIncident(
  //   clipPath({
  //     selector: `#product-${index} .cta-wrapper`,
  //     from: "inset(0% 0% 0% 0%)",
  //     to: "inset(100% 0% 0% 0%)",
  //     duration: 800,
  //     easing: "easeInOutCubic",
  //   }),
  //   endingPosition,
  // );
});

clip.addIncident(
  showAndHideTextCombo({
    selector: `.title`,
    displayTextDuration: clip.calculatedDuration,
    // duration: animationDuration,
    enterScenePosition: 800,
    exitScenePosition: clip.calculatedDuration,
    easing: "easeInOutCubic",
  }),
  0,
);

clip.addIncident(
  showAndHideTextCombo({
    selector: `.subtitle`,
    displayTextDuration: clip.calculatedDuration,
    // duration: animationDuration,
    enterScenePosition: 1000,
    exitScenePosition: clip.calculatedDuration - 1000,
    easing: "easeInOutCubic",
  }),
  0,
);

export default renderDonkeyclip({ clipId: pkg.id, initParams, clip });