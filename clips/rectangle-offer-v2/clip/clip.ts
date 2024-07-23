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
  clipPathImagesCombo,
  opacity,
  showAndHideTextCombo,
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
      src: `https://fonts.googleapis.com/css2?family=Inter:wght@300;900&display=swap`,
    },
  ],
});

const productsLength = initParams[0].value.products.length;

Array.from({ length: productsLength }).forEach((_, index) => {
  const animationDuration = 1300;
  const displayImageDuration = 4000;
  const delayBetweenImageChange = -200;
  const startingPosition =
    index *
    (animationDuration + displayImageDuration + delayBetweenImageChange);
  const endingPosition = startingPosition + displayImageDuration;
  clip.addIncident(
    clipPath({
      selector: `.title`,
      from: "inset(0% 0% 100% 0%)",
      to: "inset(0% 0% 0% 0%)",
      duration: 1000,
      delay: 400,
      easing: "easeInOutCubic",
    }),
    startingPosition,
  );

  clip.addIncident(
    clipPath({
      selector: `.title`,
      from: "inset(0% 0% 0% 0%)",
      to: "inset(100% 0% 0% 0%)",
      duration: 800,
      easing: "easeInOutCubic",
    }),
    endingPosition,
  );
  // clip path animation
  clip.addIncident(
    clipPathImagesCombo({
      selector: `#product-${index} .img-1`,
      duration: animationDuration,
      startingPosition: startingPosition + 400,
      endingPosition,
      easing: "easeInOutCubic",
    }),
    0,
  );
  // opacity of the background image
  clip.addIncident(
    opacity({
      selector: `#image-bg-${index}`,
      from: 0,
      to: 1,
      duration: animationDuration,
      easing: "easeInOutCubic",
    }),
    startingPosition,
  );
  clip.addIncident(
    opacity({
      selector: `#image-bg-${index}`,
      from: 1,
      to: 0,
      duration: animationDuration,
      easing: "easeInOutCubic",
    }),
    endingPosition,
  );
  // text animation
  clip.addIncident(
    showAndHideTextCombo({
      selector: `#product-${index} .description`,
      displayTextDuration: displayImageDuration,
      duration: animationDuration,
      enterScenePosition: startingPosition,
      exitScenePosition: endingPosition,
      easing: "easeInOutCubic",
    }),
    0,
  );
  // horizontal line animation
  clip.addIncident(
    clipPath({
      selector: `#product-${index} .horizontal-line`,
      from: "inset(5% 100% 0% 0%)",
      to: "inset(0% 20% 0% 0%)",
      duration: 800,
      delay: 400,
      easing: "easeInOutCubic",
    }),
    startingPosition,
  );

  clip.addIncident(
    clipPath({
      selector: `#product-${index} .horizontal-line`,
      from: "inset(0% 20% 0% 0%)",
      to: "inset(5% 100% 0% 0%)",
      duration: 800,
      // delay: endingPosition - 500,
      easing: "easeOutCubic",
    }),
    endingPosition,
  );
  // button animation
  clip.addIncident(
    clipPath({
      selector: `#product-${index} .cta-wrapper`,
      from: "inset(100% 0% 0% 0%)",
      to: "inset(0% 0% 0% 0%)",
      duration: 800,
      delay: 600,
      easing: "easeInOutCubic",
    }),
    startingPosition,
  );

  clip.addIncident(
    clipPath({
      selector: `#product-${index} .cta-wrapper`,
      from: "inset(0% 0% 0% 0%)",
      to: "inset(100% 0% 0% 0%)",
      duration: 800,
      easing: "easeInOutCubic",
    }),
    endingPosition,
  );
});

export default renderDonkeyclip({ clipId: pkg.id, initParams, clip });
