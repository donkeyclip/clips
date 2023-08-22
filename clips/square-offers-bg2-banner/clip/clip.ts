/* eslint-disable sonarjs/no-duplicate-string */
import { letterOpacity, top } from "@donkeyclip/effects";
import { HTMLClip } from "@donkeyclip/motorcortex";
import { renderDonkeyclip } from "@donkeyclip/server";
import pkg from "../package.json";
import css from "./clip.css";
import html from "./clip.html";
import initParams from "./initParams";
import { comboImage } from "./effects/comboImage";
import { comboDescription } from "./effects/comboDescription";

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

clip.addIncident(
  top({
    value: "0%",
    initValue: "-100%",
    selector: ".offer-bg1",
    duration: 800,
    delay: 0,
    easing: "easeOutQuart",
  }),
  0,
);
clip.addIncident(
  top({
    value: "0%",
    initValue: "100%",
    selector: ".offer-bg2",
    duration: 800,
    delay: 0,
    easing: "easeOutQuart",
  }),
  0,
);

clip.addIncident(
  letterOpacity(".pr-name", ".letter", 1, 0, 3000, 1700, 400),
  500,
);
clip.addIncident(comboImage(".pr-image"), 500);
clip.addIncident(comboDescription(".pr-description"), 500);
export default renderDonkeyclip({ clipId: pkg.id, initParams, clip });
