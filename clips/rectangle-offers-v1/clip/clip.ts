/* eslint-disable sonarjs/no-duplicate-string */
import { HTMLClip } from "@donkeyclip/motorcortex";
import { renderDonkeyclip } from "@donkeyclip/server";
import pkg from "../package.json";
import css from "./clip.css";
import html from "./clip.html";
import initParams from "./initParams";
import { expandRetractImageCombo, showAndHideTextCombo } from "./ClipIncidents";

const host = document.getElementById("clip");

if (!host)
  throw new Error(
    "No element with id 'clip' found, so can't show the clip! Please check your html",
  );

const clip = new HTMLClip({
  html,
  css,
  host,
  initParams: initParams[0].value,
  containerParams: {
    width: "300px",
    height: "300px",
  },
  fonts: [
    {
      type: "google-font",
      src: "https://fonts.googleapis.com/css2?family=Krona+One&display=swap",
    },
  ],
  audio: "off",
});

const numberOfProducts = initParams[0].value.products.length;

Array.from({ length: numberOfProducts }).forEach((_, index) => {
  const delayBetweenImages = 1500;
  const displayProductDuration = 4000;

  const enterScenePosition =
    index * (displayProductDuration + delayBetweenImages);

  const exitScenePosition = enterScenePosition + displayProductDuration;

  clip.addIncident(
    expandRetractImageCombo({
      selector: `#product-wrapper-${index} .product-image-wrapper`,
      enterScenePosition,
      exitScenePosition,
      displayProductDuration: displayProductDuration,
    }),
    0,
  );

  clip.addIncident(
    showAndHideTextCombo({
      selector: `#product-wrapper-${index} .product-name .text-outer-wrapper .text`,
      enterScenePosition: enterScenePosition + 500,
      exitScenePosition,
      enterAnimationDuration: 600,
      exitAnimationDuration: 600,
      displayTextDuration: displayProductDuration,
    }),
    0,
  );
});

clip.addIncident(
  showAndHideTextCombo({
    selector: `#product-wrapper-0 .product-cta .text-outer-wrapper .text`,
    enterScenePosition: 0,
    enterAnimationDuration: 600,
    exitAnimationDuration: 600,
    displayTextDuration: clip.calculatedDuration - 1000,
  }),
  0,
);

export default renderDonkeyclip({ clipId: pkg.id, initParams, clip });
