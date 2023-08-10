/* eslint-disable sonarjs/no-duplicate-string */
import { HTMLClip } from "@donkeyclip/motorcortex";
import { renderDonkeyclip } from "@donkeyclip/server";
import pkg from "../package.json";
import css from "./clip.css";
import html from "./clip.html";
import initParams from "./initParams";
import { topLetterMove } from "@donkeyclip/effects";

import { imageCombo } from "./effects/imageCombo";
import { polCombo } from "./effects/polCombo";

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
    width: "940px",
    height: "140px",
  },
  fonts: [
    {
      type: "google-font",
      src: "https://fonts.googleapis.com/css2?family=Inter:wght@500;900&display=swap",
    },
  ],
  audio: "off",
});

clip.addIncident(imageCombo(".pr-image"), 0);
clip.addIncident(
  topLetterMove(".pr-name", ".letter", "0%", "-100%", "100%", 3000, 2000, 200),
  0,
);
clip.addIncident(
  polCombo(".container", "@expression(initParams.products.length*3000)"),
  0,
);

export default renderDonkeyclip({ clipId: pkg.id, initParams, clip });
