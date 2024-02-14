/* eslint-disable sonarjs/no-duplicate-string */
import { HTMLClip } from "@donkeyclip/motorcortex";
import { renderDonkeyclip } from "@donkeyclip/server";
import pkg from "../package.json";
import css from "./clip.css";
import html from "./clip.html";
import initParams from "./initParams";
import initParamsValidationRules from "./initParamsValidationRules";
import { opacity, rotate, scale, zIndex } from "./ClipIncidents";

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

Array.from({ length: numberOfProducts }).forEach((_, index) => {
  const delayBetweenImages = 1500;
  const displayProductDuration = 4000;
  const enterScenePosition =
    index * (displayProductDuration + delayBetweenImages);
  const exitScenePosition = enterScenePosition + displayProductDuration;
  // clip.addIncident(
  //   expandRetractImageCombo({
  //     selector: `#product-wrapper-${index} .product-image`,
  //     enterScenePosition,
  //     exitScenePosition,
  //     displayProductDuration: displayProductDuration,
  //   }),
  //   0
  // );
  // ENTER ANIMATIONS
  clip.addIncident(
    zIndex({
      selector: `#product-wrapper-${index}`,
      from: 1,
      to: 2,
      duration: 700,
    }),
    enterScenePosition + 400,
  );

  clip.addIncident(
    opacity({
      selector: `#product-wrapper-${index} .product-image, #product-wrapper-${index} .product-content h2, .product-content svg`,
      from: 0,
      to: 1,
      duration: 1000,
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
    enterScenePosition + 400,
  );

  clip.addIncident(
    rotate({
      selector: `#product-wrapper-${index} .product-image-wrapper, #product-wrapper-${index} .product-content`,
      to: "0deg",
      duration: 700,
      delay: "@stagger(0, 200)",
    }),
    enterScenePosition + 400,
  );
  // EXIT ANIMATIONS

  clip.addIncident(
    scale({
      selector: `#product-wrapper-${index} .product-image-wrapper, #product-wrapper-${index} .product-content`,
      from: 1,
      to: 0.9,
      duration: 700,
      delay: "@stagger(0, 200)",
    }),
    exitScenePosition,
  );
  const isEven = index % 2 === 0 ? true : false;
  clip.addIncident(
    rotate({
      selector: `#product-wrapper-${index} .product-image-wrapper`,
      to: isEven ? "-5deg" : "9deg",
      duration: 700,
      delay: "@stagger(0, 200)",
    }),
    exitScenePosition,
  );

  clip.addIncident(
    rotate({
      selector: `#product-wrapper-${index} .product-content`,
      to: !isEven ? "-5deg" : "9deg",
      duration: 700,
      delay: "@stagger(0, 200)",
    }),
    exitScenePosition,
  );

  clip.addIncident(
    opacity({
      selector: `#product-wrapper-${index} .product-image, #product-wrapper-${index} .product-content h2, .product-content svg`,
      from: 1,
      to: 0,
      duration: 1000,
    }),
    exitScenePosition + 2000,
  );
});

export default renderDonkeyclip({ clipId: pkg.id, initParams, clip });
