/* eslint-disable sonarjs/no-duplicate-string */
import { left, top, calculateDiagonalEndPosition } from "@donkeyclip/effects";
import { HTMLClip } from "@donkeyclip/motorcortex";
import { renderDonkeyclip } from "@donkeyclip/server";
import pkg from "../package.json";
import css from "./clip.css";
import html from "./clip.html";
import initParams from "./initParams";

const host = document.getElementById("clip");

if (!host)
  throw new Error(
    "No element with id 'clip' found, so can't show the clip! Please check your html"
  );

const clip = new HTMLClip({
  html,
  css,
  host,
  initParams: initParams[0].value,
  containerParams: {
    width: "700px",
    height: "290px",
  },
  fonts: [
    {
      type: "google-font",
      src: "https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap",
    },
    {
      type: "google-font",
      src: "https://fonts.googleapis.com/css2?family=Kanit:wght@400;900&display=swap",
    },
  ],
  audio: "off",
});
const revercePosition = 1200;
const reverseDelay =
  "@expression(initParams.products.length*1000 + (initParams.products.length-1)*2000 )";

clip.addIncident(
  top({
    value: "0%",
    initValue: "100%",
    selector: ".tex-letter",
    duration: 500,
    delay: "@stagger(0,600)",
    easing: "easeOutQuad",
  }),
  0
);
clip.addIncident(
  top({
    value: "100%",
    initValue: "0%",
    selector: ".tex-letter",
    duration: 500,
    delay: reverseDelay,
    easing: "easeOutQuad",
  }),
  revercePosition
);

clip.addIncident(
  top({
    value: "0%",
    initValue: "100%",
    selector: ".secondaryText-letter",
    duration: 500,
    delay: "@stagger(0,600,0,linear,linear,true)",
    easing: "easeOutQuad",
  }),
  0
);
clip.addIncident(
  top({
    value: "100%",
    initValue: "0%",
    selector: ".secondaryText-letter",
    duration: 500,
    delay: reverseDelay,
    easing: "easeOutQuad",
  }),
  revercePosition
);

clip.addIncident(
  top({
    value: "0%",
    initValue: "100%",
    selector: ".offer-letter",
    duration: 500,
    delay: "@stagger(0,600,0,linear,linear,true)",
    easing: "easeOutQuad",
  }),
  0
);
clip.addIncident(
  top({
    value: "100%",
    initValue: "0%",
    selector: ".offer-letter",
    duration: 500,
    delay: reverseDelay,
    easing: "easeOutQuad",
  }),
  revercePosition
);

clip.addIncident(
  top({
    value: "0px",
    initValue: "60px",
    selector: ".cta",
    duration: 800,
    easing: "easeOutQuad",
  }),
  0
);

clip.addIncident(
  top({
    value: "61px",
    initValue: "0px",
    selector: ".cta",
    duration: 500,
    delay: reverseDelay,
    easing: "easeOutQuad",
  }),
  revercePosition
);
const endPositionTop = calculateDiagonalEndPosition(-280, 656, -35, -1350);
const endPositionBottom = calculateDiagonalEndPosition(470, -95, -35, 960);

clip.addIncident(
  top({
    value: `${endPositionTop.top}px`,
    initValue: "-280px",
    selector: ".product-wrapper-top",
    duration: 8200,
  }),
  0
);

clip.addIncident(
  left({
    value: `${endPositionTop.left}px`,
    initValue: "656px",
    selector: ".product-wrapper-top",
    duration: 8200,
  }),
  0
);
clip.addIncident(
  top({
    value: `${endPositionBottom.top}px`,
    initValue: "470px",
    selector: ".product-wrapper-bottom",
    duration: 8200,
  }),
  0
);

clip.addIncident(
  left({
    value: `${endPositionBottom.left}px`,
    initValue: "-95px",
    selector: ".product-wrapper-bottom",
    duration: 8000,
  }),
  0
);

export default renderDonkeyclip({ clipId: pkg.id, initParams, clip });
