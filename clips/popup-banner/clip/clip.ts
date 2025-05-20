/* eslint-disable sonarjs/no-duplicate-string */
import { HTMLClip } from "@donkeyclip/motorcortex";
import { renderDonkeyclip } from "@donkeyclip/server";
import pkg from "../package.json";
import css from "./clip.css";
import html from "./clip.html";
import initParams from "./initParams";
import { gap, translateY } from "./ClipIncidents";
import { opacity, width } from "@donkeyclip/effects";

const host = document.getElementById("clip");

if (!host)
  throw new Error(
    "No element with id 'clip' found, so can't show the clip! Please check your html",
  );
// const clipContainerTargetWidth = "900px";
// const clipContainerTargetHeight = "600px";
const clipContainerTargetWidth = "350px";
const clipContainerTargetHeight = "650px";

const clip = new HTMLClip({
  html,
  css,
  host,
  initParams: initParams[0].value,
  containerParams: {
    width: clipContainerTargetWidth,
    height: clipContainerTargetHeight,
  },
  fonts: [
    {
      type: "google-font",
      src: initParams[0].value.font.src,
    },
  ],
  audio: "off",
});

const duration750 = 750;

clip.addIncident(
  width({
    value: "0%",
    selector: ".products-bg",
    easing: "easeInOutSine",
    duration: duration750,
  }),
  0,
);
clip.addIncident(
  width({
    value: "100%",
    selector: ".product-wrapper",
    delay: "@expression(3000*index)",
    duration: duration750,
  }),
  duration750,
);

clip.addIncident(
  width({
    value: "119px",
    selector: ".abstract-lines2-wrapper",
    duration: duration750,
  }),
  duration750,
);
clip.addIncident(
  width({
    value: "133px",
    selector: ".abstract-lines1-wrapper",
    duration: duration750,
  }),
  duration750,
);
clip.addIncident(
  opacity({
    value: 1,
    selector: ".text",
    duration: duration750,
  }),
  duration750,
);
clip.addIncident(
  gap("10px", ".details-wrapper", duration750, "easeInOutSine"),
  duration750,
);
clip.addIncident(
  translateY("0px", ".info", duration750, "easeInOutSine"),
  duration750,
);

clip.addIncident(
  opacity({
    value: 1,
    selector: ".cta",
    duration: duration750,
  }),
  duration750 * 2 + 100,
);

export default renderDonkeyclip({ clipId: pkg.id, initParams, clip });
