/* eslint-disable sonarjs/no-duplicate-string */
import { HTMLClip } from "@donkeyclip/motorcortex";
import { renderDonkeyclip } from "@donkeyclip/server";
import pkg from "../package.json";
import { clipIncidents } from "./ClipIncidents";
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
    width: "470px",
    height: "200px",
  },
  fonts: [
    {
      type: "google-font",
      src: "https://fonts.googleapis.com/css2?family=Kanit:wght@800;900&display=swap",
    },
  ],
  audio: "off",
});

clip.addIncident(clipIncidents(".product"), 0);

export default renderDonkeyclip({ clipId: pkg.id, initParams, clip });
