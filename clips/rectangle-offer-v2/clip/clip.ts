/* eslint-disable sonarjs/no-duplicate-string */
// import { left, opacity, scale, width } from "@donkeyclip/effects";
import { HTMLClip } from "@donkeyclip/motorcortex";
import { renderDonkeyclip } from "@donkeyclip/server";
import pkg from "../package.json";
import css from "./clip.css";
import html from "./clip.html";
import initParams from "./initParams";
import initParamsValidationRules from "./initParamsValidationRules";
import { clipPathImagesCombo } from "./clipIncidents";

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
  const delayBetweenImageChange = 2000;
  const startingPosition =
    index *
    (animationDuration + displayImageDuration + delayBetweenImageChange);
  const endingPosition = startingPosition + displayImageDuration;

  clip.addIncident(
    clipPathImagesCombo({
      selector: `#product-${index} img`,
      duration: animationDuration,
      startingPosition,
      endingPosition,
      easing: "easeInOutCubic",
    }),
    0,
  );
});

export default renderDonkeyclip({ clipId: pkg.id, initParams, clip });
