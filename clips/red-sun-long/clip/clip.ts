/* eslint-disable sonarjs/no-duplicate-string */
import {
  bottom,
  left,
  opacity,
  right,
  top,
  topMoveCombo,
} from "@donkeyclip/effects";
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
    width: "940px",
    height: "140px",
  },
  fonts: [
    {
      type: "google-font",
      src: "https://fonts.googleapis.com/css2?family=Poppins:wght@700;900&display=swap",
    },
    {
      type: "google-font",
      src: "https://fonts.googleapis.com/css2?family=Manrope:wght@200;800&display=swap",
    },
  ],
  audio: "off",
});
const reversePosition = 1200;
const reverseDelay =
  "@expression(initParams.products.length*1000 + (initParams.products.length-1)*2000 )";

clip.addIncident(
  opacity({
    value: 0.3,
    initValue: 0,
    selector: ".tex-loop",
    duration: 500,
    delay: "@stagger(0,600)",
    easing: "easeOutQuad",
  }),
  0
);
clip.addIncident(
  opacity({
    value: 0,
    initValue: 0.3,
    selector: ".tex-loop",
    duration: 500,
    delay: reverseDelay,
    easing: "easeOutQuad",
  }),
  reversePosition
);

clip.addIncident(
  opacity({
    value: 1,
    initValue: 0,
    selector: ".secondaryText-letter",
    duration: 500,
    delay: "@stagger(0,600,0,linear,linear)",
    easing: "easeOutQuad",
  }),
  0
);
clip.addIncident(
  opacity({
    value: 0,
    initValue: 1,
    selector: ".secondaryText-letter",
    duration: 500,
    delay: reverseDelay,
    easing: "easeOutQuad",
  }),
  reversePosition
);

clip.addIncident(
  top({
    value: "0px",
    initValue: "230px",
    selector: ".center-ball",
    duration: 1200,
    easing: "easeOutQuad",
  }),
  0
);

clip.addIncident(
  top({
    value: "230px",
    initValue: "0px",
    selector: ".center-ball",
    duration: 500,
    delay: reverseDelay,
    easing: "easeOutQuad",
  }),
  reversePosition
);

clip.addIncident(
  top({
    value: "-37px",
    initValue: "-75px",
    selector: ".left-ball",
    duration: 1200,
    easing: "easeOutQuad",
  }),
  0
);

clip.addIncident(
  top({
    value: "-75px",
    initValue: "-37px",
    selector: ".left-ball",
    duration: 500,
    delay: reverseDelay,
    easing: "easeOutQuad",
  }),
  reversePosition
);

clip.addIncident(
  left({
    value: "-37px",
    initValue: "-76px",
    selector: ".left-ball",
    duration: 1200,
    easing: "easeOutQuad",
  }),
  0
);

clip.addIncident(
  left({
    value: "-76px",
    initValue: "-37px",
    selector: ".left-ball",
    duration: 500,
    delay: reverseDelay,
    easing: "easeOutQuad",
  }),
  reversePosition
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
    value: "60px",
    initValue: "0px",
    selector: ".cta",
    duration: 800,
    easing: "easeOutQuad",
    delay: reverseDelay,
  }),
  reversePosition
);

clip.addIncident(
  opacity({
    value: 1,
    initValue: 0,
    selector: ".offer-percentage",
    duration: 500,
    delay: "@stagger(0,600,0,linear,linear)",
    easing: "easeOutQuad",
  }),
  0
);
clip.addIncident(
  opacity({
    value: 0,
    initValue: 1,
    selector: ".offer-percentage",
    duration: 500,
    delay: reverseDelay,
    easing: "easeOutQuad",
  }),
  reversePosition
);

clip.addIncident(
  bottom({
    value: "-69px",
    initValue: "-128px",
    selector: ".right-ball",
    duration: 1200,
    easing: "easeOutQuad",
  }),
  0
);

clip.addIncident(
  bottom({
    value: "-128px",
    initValue: "-69px",
    selector: ".right-ball",
    duration: 500,
    delay: reverseDelay,
    easing: "easeOutQuad",
  }),
  reversePosition
);

clip.addIncident(
  right({
    value: "-69px",
    initValue: "-128px",
    selector: ".right-ball",
    duration: 1200,
    easing: "easeOutQuad",
  }),
  0
);

clip.addIncident(
  right({
    value: "-128px",
    initValue: "-69px",
    selector: ".right-ball",
    duration: 500,
    delay: reverseDelay,
    easing: "easeOutQuad",
  }),
  reversePosition
);

clip.addIncident(
  topMoveCombo(".product-image", "0px", "260px", "-260px", 1000, 800, 3000),
  0
);

export default renderDonkeyclip({ clipId: pkg.id, initParams, clip });
