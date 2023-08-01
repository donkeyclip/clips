/* eslint-disable sonarjs/no-duplicate-string */
import { left, opacity, top } from "@donkeyclip/effects";
import { HTMLClip } from "@donkeyclip/motorcortex";
import { renderDonkeyclip } from "@donkeyclip/server";
import pkg from "../package.json";
import css from "./clip.css";
import html from "./clip.html";
import initParams from "./initParams";
import { comboOffer } from "./effects/comboOffer";
import { comboImage } from "./effects/comboImage";

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
      src: "https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap",
    },
  ],
  audio: "off",
});

clip.addIncident(comboImage(".image"), 0);
clip.addIncident(
  top({
    value: "25%",
    initValue: "150%",
    selector: ".text",
    duration: 800,
    delay: 0,
    easing: "easeOutQuart",
  }),
  0,
);
clip.addIncident(
  left({
    value: "3%",
    initValue: "-100%",
    selector: ".cta",
    duration: 500,
    delay: 0,
    easing: "easeOutQuart",
  }),
  400,
);

clip.addIncident(
  opacity({
    value: "@expression((index+1)*0.1)",
    initValue: 0,
    selector: ".offer-wrapper .offer",
    duration: 200,
    delay: "@expression(index *450)",
    easing: "easeOutCubic",
  }),
  300,
);

clip.addIncident(comboOffer(".offer-wrapper-2 .offer"), 300);
export default renderDonkeyclip({ clipId: pkg.id, initParams, clip });
