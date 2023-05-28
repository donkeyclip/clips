import { HTMLClip } from "@donkeyclip/motorcortex";
import { renderDonkeyclip } from "@donkeyclip/server";
import pkg from "../package.json";
import css from "./clip.css";
import html from "./clip.html";
import { itemsCombo } from "./effects/itemsCombo";
import initParams from "./initParams";
import initParamsValidationRules from "./initParamsValidationRules";

const host = document.getElementById("clip");

if (!host)
  throw new Error(
    "No element with id 'clip' found, so can't show the clip! Please check your html"
  );

const clip = new HTMLClip({
  html,
  css,
  host,
  initParamsValidationRules,
  initParams: initParams[0].value,
  containerParams: {
    width: "470px",
    height: "200px",
  },
  fonts: [
    {
      type: "google-font",
      src: "https://fonts.googleapis.com/css2?family=Inter:wght@500;900&display=swap",
    },
  ],
});

clip.addIncident(itemsCombo(".image"), 0);

export default renderDonkeyclip({ clipId: pkg.id, initParams, clip });
