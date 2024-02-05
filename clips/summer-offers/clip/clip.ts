/* eslint-disable sonarjs/no-duplicate-string */
import { HTMLClip } from "@donkeyclip/motorcortex";
import { renderDonkeyclip } from "@donkeyclip/server";
import pkg from "../package.json";
import css from "./clip.css";
import html from "./clip.html";
import initParams from "./initParams";
import initParamsValidationRules from "./initParamsValidationRules";
import {
  pulsingGridDotsCombo,
  scaleSmallBigCombo,
  topTranslate,
  topToBottomCombo,
  width,
} from "./ClipIncidents";

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
    width: "705px",
    height: "290px",
  },
  fonts: [
    {
      type: "google-font",
      src: "https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap",
    },
  ],
  audio: "off",
});

clip.addIncident(width(".horizontal-line", "0px", "183px"), 200);

clip.addIncident(topTranslate(".title-inner-wrapper .letter", "100%", "0%"), 0);
clip.addIncident(
  topTranslate(".subtitle-inner-wrapper .letter", "100%", "0%"),
  300,
);

[1, 2, 3].forEach((_, index) => {
  const delayBetweenProduct = 1000;
  const productDisplayDuration = 4000;

  const enterScenePosition =
    index * (delayBetweenProduct + productDisplayDuration);

  const exitScenePosition = enterScenePosition + productDisplayDuration;

  clip.addIncident(
    topToBottomCombo(
      `#product-${index}`,
      enterScenePosition,
      exitScenePosition,
    ),
    1500,
  );
  clip.addIncident(
    scaleSmallBigCombo(
      ".discount-wrapper",
      enterScenePosition,
      exitScenePosition,
    ),
    1500,
  );
  clip.addIncident(
    scaleSmallBigCombo(
      ".box-2, .box-3, .box-4",
      enterScenePosition - 1000,
      exitScenePosition - 1000,
    ),
    2000,
  );
});

// the clips that depend on the 'clip' should be placed at the bottom since they need the calculated duration of the whole clip
clip.addIncident(pulsingGridDotsCombo(".dot", clip), 0);

export default renderDonkeyclip({ clipId: pkg.id, initParams, clip });
