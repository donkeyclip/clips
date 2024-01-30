/* eslint-disable sonarjs/no-duplicate-string */
import { HTMLClip } from "@donkeyclip/motorcortex";
import { renderDonkeyclip } from "@donkeyclip/server";
import pkg from "../package.json";
import css from "./clip.css";
import html from "./clip.html";
import initParams from "./initParams";
import {
  pulsingGridDotsCombo,
  scaleSmallBigCombo,
  top,
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

clip.addIncident(top(".title-inner-wrapper .letter", "70px", "0px"), 0);
clip.addIncident(top(".subtitle-inner-wrapper .letter", "50px", "0px"), 300);

[1, 2, 3].forEach((_, index) => {
  const delayBetweenProduct = 1000;
  const productDisplayDuration = 4000;

  const enterScenePosition =
    index * (delayBetweenProduct + productDisplayDuration);

  const exitScenePosition = enterScenePosition + productDisplayDuration;

  clip.addIncident(
    topToBottomCombo(
      `.product-${index}`,
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
});

// the clips that depend on the 'clip' should be placed at the bottom since they need the calculated duration of the whole clip
clip.addIncident(pulsingGridDotsCombo(".dot", clip), 0);
// clip.addIncident(scaleSmallBigCombo(".discount-wrapper"), 0);

// clip.addIncident(
//   top({
//     value: "563px",
//     initValue: "480px",
//     selector: ".cursor",
//     duration: 1000,
//   }),
//   0,
// );
// clip.addIncident(
//   left({
//     value: "190px",
//     initValue: "1280px",
//     selector: ".cursor",
//     duration: 1000,
//   }),
//   0,
// );
// clip.addIncident(clipIncidents(".second-slide"), 1000);
// clip.addIncident(
//   opacity({ value: 1, initValue: 0, selector: "#slide-0", duration: 10 }),
//   6889,
// );
// clip.addIncident(clipIncidents("#slide-0"), 6899);
// clip.addIncident(
//   opacity({ value: 1, initValue: 0, selector: "#slide-1", duration: 10 }),
//   12000,
// );
// clip.addIncident(clipIncidents("#slide-1"), 12000);
// clip.addIncident(
//   opacity({ value: 1, initValue: 0, selector: "#slide-2", duration: 10 }),
//   16790,
// );
// clip.addIncident(clipIncidents("#slide-2"), 16790);
// clip.addIncident(
//   top({
//     value: "100%",
//     initValue: "0%",
//     selector: ".first-title-wrapper .latter",
//     duration: 300,
//     delay: "@stagger(0,300)",
//   }),
//   5600,
// );
// clip.addIncident(
//   top({
//     value: "0%",
//     initValue: "100%",
//     selector: ".second-title-wrapper .latter",
//     duration: 300,
//     delay: "@stagger(0,300)",
//   }),
//   6299,
// );
// clip.addIncident(
//   left({
//     value: "65%",
//     initValue: "100%",
//     selector: ".client-list-wrapper",
//     duration: 500,
//   }),
//   6270,
// );
// clip.addIncident(
//   backgroundColor({
//     value: "#565454",
//     initValue: "#1B1B1B",
//     selector: "#card-0",
//     duration: 200,
//   }),
//   6270,
// );
// clip.addIncident(
//   backgroundColor({
//     value: "#1B1B1B",
//     initValue: "#565454",
//     selector: "#card-0",
//     duration: 200,
//   }),
//   12000,
// );
// clip.addIncident(
//   backgroundColor({
//     value: "#565454",
//     initValue: "#1B1B1B",
//     selector: "#card-1",
//     duration: 200,
//   }),
//   12000,
// );
// clip.addIncident(
//   backgroundColor({
//     value: "#1B1B1B",
//     initValue: "#565454",
//     selector: "#card-1",
//     duration: 200,
//   }),
//   16790,
// );
// clip.addIncident(
//   backgroundColor({
//     value: "#565454",
//     initValue: "#1B1B1B",
//     selector: "#card-2",
//     duration: 200,
//   }),
//   16790,
// );

export default renderDonkeyclip({ clipId: pkg.id, initParams, clip });
