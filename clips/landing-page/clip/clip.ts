/* eslint-disable sonarjs/no-duplicate-string */
import { left, opacity, scale, width } from "@donkeyclip/effects";
import { HTMLClip } from "@donkeyclip/motorcortex";
import css from "./clip.css";
import html from "./clip.html";
import initParams from "./initParams";
import initParamsValidationRules from "./initParamsValidationRules";

const element = document.getElementById("clip");

if (!element)
  throw new Error(
    "No element with id 'clip' found, so can't show the clip! Please check your html"
  );

const clip = new HTMLClip({
  html,
  css,
  host: element,
  initParamsValidationRules,
  initParams: initParams[0].value,
  containerParams: {
    width: "1920px",
    height: "1080px",
  },
  fonts: [
    {
      type: `google-font`,
      src: `https://fonts.googleapis.com/css2?family=DM+Sans:wght@700&display=swap`,
    },
  ],
});

clip.addIncident(
  scale({
    value: 1,
    selector: ".clip-wrapper",
    duration: 500,
    easing: "easeInOutCubic",
  }),
  0
);
clip.addIncident(
  scale({
    value: 1,
    selector: ".clip-wrapper .item .image-wrapper",
    duration: 200,
    easing: "easeInOutCubic",
    delay: "@stagger(0,600)",
  }),
  600
);

clip.addIncident(
  width({
    value: "460px",
    selector: ".content-wrapper",
    duration: 500,
    easing: "easeInOutCubic",
  }),
  1300
);
clip.addIncident(
  left({
    value: "-160px",
    selector: ".clip-wrapper .item",
    duration: 500,
    easing: "easeInOutCubic",
  }),
  1300
);
clip.addIncident(
  width({
    value: "250px",
    selector: ".line1",
    duration: 300,
    easing: "easeInOutCubic",
  }),
  1800
);
clip.addIncident(
  width({
    value: "205px",
    selector: ".line2",
    duration: 300,
    easing: "easeInOutCubic",
  }),
  1900
);
clip.addIncident(
  width({
    value: "90px",
    selector: ".line3",
    duration: 300,
    easing: "easeInOutCubic",
  }),
  2000
);

clip.addIncident(
  left({
    value: "170px",
    selector: ".clip-wrapper",
    duration: 700,
    easing: "easeInOutCubic",
  }),
  2300
);
clip.addIncident(
  opacity({
    value: 1,
    selector: ".d-title",
    duration: 300,
    easing: "easeInOutCubic",
  }),
  3000
);
clip.addIncident(
  scale({
    value: 1,
    selector: ".d-wrapper .box",
    duration: 300,
    easing: "easeInOutCubic",
  }),
  3300
);
clip.addIncident(
  opacity({
    value: 1,
    selector: ".d-item.item1",
    duration: 1,
    easing: "easeInOutCubic",
  }),
  3800
);
clip.addIncident(
  opacity({
    value: 1,
    selector: ".d-item.item2",
    duration: 1,
    easing: "easeInOutCubic",
  }),
  4200
);
clip.addIncident(
  opacity({
    value: 1,
    selector: ".d-item.item3",
    duration: 1,
    easing: "easeInOutCubic",
  }),
  4600
);

clip.addIncident(
  opacity({
    value: 1,
    selector: ".image",
    duration: 500,
    easing: "easeInOutCubic",
  }),
  5000
);

clip.addIncident(
  opacity({
    value: 1,
    selector: ".p-title",
    duration: 300,
    easing: "easeInOutCubic",
  }),
  6200
);
clip.addIncident(
  scale({
    value: 1,
    selector: ".p-wrapper .box",
    duration: 300,
    easing: "easeInOutCubic",
  }),
  6500
);

clip.addIncident(
  left({
    value: "36%",
    selector: ".p-item",
    duration: 500,
    easing: "easeInOutCubic",
  }),
  6900
);
clip.addIncident(
  opacity({
    value: 0.2,
    selector: ".p-item",
    duration: 1,
    easing: "easeInOutCubic",
  }),
  6900
);
clip.addIncident(
  opacity({
    value: 1,
    selector: ".p-item.item1",
    duration: 300,
    easing: "easeInOutCubic",
  }),
  7400
);
clip.addIncident(
  scale({
    value: 1.3,
    selector: ".p-item.item1",
    duration: 300,
    easing: "easeInOutCubic",
  }),
  7400
);
clip.addIncident(
  opacity({
    value: 1,
    selector: ".blue.cw",
    duration: 400,
    easing: "easeInOutCubic",
  }),
  7400
);

clip.addIncident(
  left({
    value: "0%",
    selector: ".p-item",
    duration: 300,
    easing: "easeInOutCubic",
  }),
  8400
);
clip.addIncident(
  opacity({
    value: 0.2,
    selector: ".p-item.item1",
    duration: 300,
    easing: "easeInOutCubic",
  }),
  8400
);
clip.addIncident(
  scale({
    value: 1,
    selector: ".p-item.item1",
    duration: 300,
    easing: "easeInOutCubic",
  }),
  8400
);
clip.addIncident(
  opacity({
    value: 1,
    selector: ".p-item.item2",
    duration: 300,
    easing: "easeInOutCubic",
  }),
  8700
);
clip.addIncident(
  scale({
    value: 1.3,
    selector: ".p-item.item2",
    duration: 300,
    easing: "easeInOutCubic",
  }),
  8700
);
clip.addIncident(
  opacity({
    value: 1,
    selector: ".purple.cw",
    duration: 400,
    easing: "easeInOutCubic",
  }),
  8700
);

clip.addIncident(
  left({
    value: "-36%",
    selector: ".p-item",
    duration: 300,
    easing: "easeInOutCubic",
  }),
  9700
);
clip.addIncident(
  opacity({
    value: 0.2,
    selector: ".p-item.item2",
    duration: 300,
    easing: "easeInOutCubic",
  }),
  9700
);
clip.addIncident(
  scale({
    value: 1,
    selector: ".p-item.item2",
    duration: 300,
    easing: "easeInOutCubic",
  }),
  9700
);
clip.addIncident(
  opacity({
    value: 1,
    selector: ".p-item.item3",
    duration: 300,
    easing: "easeInOutCubic",
  }),
  10000
);
clip.addIncident(
  scale({
    value: 1.3,
    selector: ".p-item.item3",
    duration: 300,
    easing: "easeInOutCubic",
  }),
  10000
);
clip.addIncident(
  opacity({
    value: 1,
    selector: ".pink.cw",
    duration: 400,
    easing: "easeInOutCubic",
  }),
  10000
);

clip.addIncident(
  left({
    value: "-100%",
    selector: ".p-item",
    duration: 500,
    easing: "easeInOutCubic",
  }),
  11000
);
clip.addIncident(
  opacity({
    value: 0,
    selector: ".p-item",
    duration: 300,
    easing: "easeInOutCubic",
  }),
  11000
);
clip.addIncident(
  scale({
    value: 1,
    selector: ".p-item.item3",
    duration: 300,
    easing: "easeInOutCubic",
  }),
  11000
);
clip.addIncident(
  opacity({
    value: 0,
    selector: ".blue.cw,.purple.cw,.pink.cw",
    duration: 300,
    easing: "easeInOutCubic",
  }),
  11000
);
clip.addIncident(
  scale({
    value: 0,
    selector: ".p-wrapper .box",
    duration: 300,
    easing: "easeInOutCubic",
  }),
  11300
);
clip.addIncident(
  opacity({
    value: 0,
    selector: ".p-title",
    duration: 300,
    easing: "easeInOutCubic",
  }),
  11300
);

clip.addIncident(
  opacity({
    value: 0,
    selector: ".image,.d-item",
    duration: 300,
    easing: "easeInOutCubic",
  }),
  11700
);
clip.addIncident(
  scale({
    value: 0,
    selector: ".d-wrapper .box",
    duration: 300,
    easing: "easeInOutCubic",
  }),
  12000
);
clip.addIncident(
  opacity({
    value: 0,
    selector: ".d-title",
    duration: 300,
    easing: "easeInOutCubic",
  }),
  12000
);

clip.addIncident(
  left({
    value: "570px",
    selector: ".clip-wrapper",
    duration: 500,
    easing: "easeInOutCubic",
  }),
  12500
);

clip.addIncident(
  opacity({
    value: 0,
    selector: ".line",
    duration: 1,
    easing: "easeInOutCubic",
  }),
  13100
);
clip.addIncident(
  width({
    value: "0px",
    selector: ".content-wrapper",
    duration: 500,
    easing: "easeInOutCubic",
  }),
  13100
);
clip.addIncident(
  left({
    value: "0px",
    selector: ".clip-wrapper .item",
    duration: 500,
    easing: "easeInOutCubic",
  }),
  13100
);

clip.addIncident(
  scale({
    value: 0,
    selector: ".clip-wrapper .item .image-wrapper",
    duration: 300,
    easing: "easeInOutCubic",
  }),
  13800
);
clip.addIncident(
  scale({
    value: 0,
    selector: ".clip-wrapper",
    duration: 500,
    easing: "easeInOutCubic",
  }),
  14300
);

export { clip };
