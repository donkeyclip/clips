/* eslint-disable sonarjs/no-duplicate-string */
import { HTMLClip } from "@donkeyclip/motorcortex";
import { renderDonkeyclip } from "@donkeyclip/server";
import pkg from "../package.json";
import css from "./clip.css";
import html from "./clip.html";
import initParams from "./initParams";
import initParamsValidationRules from "./initParamsValidationRules";
import { rotate, scale, zIndex } from "./ClipIncidents";

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
  initParamsValidationRules,
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

// clip.addIncident(
//   opacity({
//     selector: `.product-wrapper`,
//     from: 0,
//     to: 1,
//     duration: 1500,
//     delay: "@stagger(0, 500)",
//   }),
//   0
// );

Array.from({ length: numberOfProducts }).forEach((_, index) => {
  const delayBetweenImages = 1500;
  const displayProductDuration = 4000;
  const enterScenePosition =
    index * (displayProductDuration + delayBetweenImages);
  // const exitScenePosition = enterScenePosition + displayProductDuration;
  // clip.addIncident(
  //   expandRetractImageCombo({
  //     selector: `#product-wrapper-${index} .product-image`,
  //     enterScenePosition,
  //     exitScenePosition,
  //     displayProductDuration: displayProductDuration,
  //   }),
  //   0
  // );
  clip.addIncident(
    zIndex({
      selector: `#product-wrapper-${index}`,
      from: 0,
      to: 1,
      duration: 700,
    }),
    enterScenePosition,
  );
  clip.addIncident(
    scale({
      selector: `#product-wrapper-${index} .product-image-wrapper, #product-wrapper-${index} .product-content`,
      from: 0.9,
      to: 1,
      duration: 700,
      delay: "@stagger(0, 200)",
    }),
    enterScenePosition,
  );

  clip.addIncident(
    rotate({
      selector: `#product-wrapper-${index} .product-image-wrapper, #product-wrapper-${index} .product-content`,
      to: "0deg",
      duration: 700,
      delay: "@stagger(0, 200)",
    }),
    enterScenePosition,
  );
});

export default renderDonkeyclip({ clipId: pkg.id, initParams, clip });
