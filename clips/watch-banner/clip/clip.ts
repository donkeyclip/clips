/* eslint-disable sonarjs/no-duplicate-string */
import { top, topLetterMove, topMoveCombo } from "@donkeyclip/effects";
import { HTMLClip } from "@donkeyclip/motorcortex";
import { renderDonkeyclip } from "@donkeyclip/server";
import pkg from "../package.json";
import css from "./clip.css";
import html from "./clip.html";
import initParams from "./initParams";

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
      src: "https://fonts.googleapis.com/css2?family=Poppins:wght@700&family=Inter:wght@100;900&display=swap",
    },
  ],
});

clip.addIncident(
  top({
    value: "0%",
    initValue: "-100%",
    selector: ".text-wrapper .text",
    duration: 400,
    easing: "easeOutQuad",
  }),
  0,
);
clip.addIncident(
  top({
    value: "80%",
    initValue: "100%",
    selector: ".cta",
    duration: 600,
    easing: "easeOutQuad",
  }),
  0,
);

clip.addIncident(
  topMoveCombo(".image", "0%", "100%", "-100%", 1000, 800, 3000),
  0,
);

clip.addIncident(
  topLetterMove(
    ".pr-name",
    ".tex-letter",
    "0%",
    "-100%",
    "100%",
    3000,
    2000,
    200,
  ),
  0,
);

export default renderDonkeyclip({ clipId: pkg.id, initParams, clip });
