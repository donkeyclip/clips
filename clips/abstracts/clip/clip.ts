/* eslint-disable sonarjs/no-duplicate-string */
import { left, opacity, top, topMoveCombo } from "@donkeyclip/effects";
import { HTMLClip } from "@donkeyclip/motorcortex";
import { renderDonkeyclip } from "@donkeyclip/server";
import pkg from "../package.json";
import css from "./clip.css";
import html from "./clip.html";
import initParams from "./initParams";
import initParamsValidationRules from "./initParamsValidationRules";

const host = document.getElementById("clip");

if (!host)
  throw new Error(
    "No element with id 'clip' found, so can't show the clip! Please check your html",
  );

const clip = new HTMLClip({
  html,
  css,
  host,
  initParamsValidationRules,
  initParams: initParams[0].value,
  containerParams: {
    width: "700px",
    height: "290px",
  },
  fonts: [
    {
      type: "google-font",
      src: "https://fonts.googleapis.com/css2?family=Inter:wght@800&display=swap",
    },
  ],
  audio: "off",
});
const revercePosition = 1200;
const reverseDelay =
  "@expression(initParams.products.length*1000 + (initParams.products.length-1)*2000 )";

clip.addIncident(
  top({
    value: "0%",
    initValue: "100%",
    selector: ".tex-letter",
    duration: 500,
    delay: "@stagger(0,600)",
    easing: "easeOutQuad",
  }),
  0,
);
clip.addIncident(
  top({
    value: "100%",
    initValue: "0%",
    selector: ".tex-letter",
    duration: 500,
    delay: reverseDelay,
    easing: "easeOutQuad",
  }),
  revercePosition,
);

clip.addIncident(
  top({
    value: "0%",
    initValue: "100%",
    selector: ".secondaryText-letter",
    duration: 500,
    delay: "@stagger(0,600,0,linear,linear,true)",
    easing: "easeOutQuad",
  }),
  0,
);
clip.addIncident(
  top({
    value: "100%",
    initValue: "0%",
    selector: ".secondaryText-letter",
    duration: 500,
    delay: reverseDelay,
    easing: "easeOutQuad",
  }),
  revercePosition,
);
clip.addIncident(
  top({
    value: "169px",
    initValue: "270px",
    selector: ".left-ball",
    duration: 1200,
    easing: "easeOutQuad",
  }),
  0,
);

clip.addIncident(
  top({
    value: "270px",
    initValue: "169px",
    selector: ".left-ball",
    duration: 500,
    delay: reverseDelay,
    easing: "easeOutQuad",
  }),
  revercePosition,
);

clip.addIncident(
  top({
    value: "-39px",
    initValue: "-230px",
    selector: ".right-ball",
    duration: 1200,
    easing: "easeOutQuad",
  }),
  0,
);

clip.addIncident(
  top({
    value: "-230px",
    initValue: "-39px",
    selector: ".right-ball",
    duration: 500,
    delay: reverseDelay,
    easing: "easeOutQuad",
  }),
  revercePosition,
);

clip.addIncident(
  left({
    value: "-59px",
    initValue: "-140px",
    selector: ".left-ball",
    duration: 1200,
    easing: "easeOutQuad",
  }),
  0,
);

clip.addIncident(
  left({
    value: "-130px",
    initValue: "-59px",
    selector: ".left-ball",
    duration: 500,
    delay: reverseDelay,
    easing: "easeOutQuad",
  }),
  revercePosition,
);

clip.addIncident(
  left({
    value: "545px",
    initValue: "720px",
    selector: ".offer-wrapper",
    duration: 1200,
    easing: "easeOutQuad",
  }),
  0,
);

clip.addIncident(
  left({
    value: "720px",
    initValue: "545px",
    selector: ".offer-wrapper",
    duration: 500,
    delay: reverseDelay,
    easing: "easeOutQuad",
  }),
  revercePosition,
);
clip.addIncident(
  top({
    value: "120px",
    initValue: "330px",
    selector: ".offer-wrapper",
    duration: 1200,
    easing: "easeOutQuad",
  }),
  0,
);
clip.addIncident(
  top({
    value: "330px",
    initValue: "120px",
    selector: ".offer-wrapper",
    duration: 500,
    delay: reverseDelay,
    easing: "easeOutQuad",
  }),
  revercePosition,
);
clip.addIncident(
  top({
    value: "0px",
    initValue: "60px",
    selector: ".cta",
    duration: 800,
    easing: "easeOutQuad",
  }),
  0,
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
  revercePosition,
);

clip.addIncident(
  topMoveCombo(".product-image", "10px", "260px", "-260px", 1000, 800, 3000),
  0,
);

clip.addIncident(
  opacity({
    value: 1,
    initValue: 0,
    selector: "svg",
    duration: 200,
    easing: "easeOutQuad",
    delay: "@stagger(0,600)",
  }),
  0,
);
clip.addIncident(
  opacity({
    value: 0,
    initValue: 1,
    selector: "svg",
    duration: 200,
    easing: "easeOutQuad",
    delay: "@expression(initParams.products.length*1000)",
  }),
  revercePosition,
);

export default renderDonkeyclip({ clipId: pkg.id, initParams, clip });
