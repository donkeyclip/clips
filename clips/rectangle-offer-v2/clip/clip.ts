/* eslint-disable sonarjs/no-duplicate-string */
// import { left, opacity, scale, width } from "@donkeyclip/effects";
import { HTMLClip } from "@donkeyclip/motorcortex";
import { renderDonkeyclip } from "@donkeyclip/server";
import pkg from "../package.json";
import css from "./clip.css";
import html from "./clip.html";
import initParams from "./initParams";
import initParamsValidationRules from "./initParamsValidationRules";
import { clipPath } from "./clipIncidents";

const element = document.getElementById("clip");

if (!element)
  throw new Error(
    "No element with id 'clip' found, so can't show the clip! Please check your html",
  );

const clip = new HTMLClip({
  html,
  css,
  host: element,
  initParamsValidationRules,
  initParams: initParams[0].value,
  containerParams: {
    width: "300px",
    height: "300px",
  },
  fonts: [
    {
      type: `google-font`,
      src: `https://fonts.googleapis.com/css2?family=Inter:wght@300;900&display=swap`,
    },
  ],
});

clip.addIncident(
  clipPath({
    selector: "img",
    to: "path('M125.428 131.35C98.081 160.665 9.1766 165.174 1.75831 204.572C-11.721 276.16 80.4289 259.85 119.428 273.85C147.429 286.85 262.018 275.917 292.918 257.551C324.562 238.743 338.007 200.606 343.824 164.227C349.322 129.847 341.788 95.4827 323.576 65.8382C304.845 35.3473 279.062 3.74679 243.427 0.798893C209.516 -2.00635 188.078 9.25892 158.759 26.5726C126.712 45.4967 158.043 96.3874 125.428 131.35Z')",
    from: "path('M9.50007 120.838C5.50008 149.338 7.91829 131.94 0.5 171.338C20.5 204.5 23 212.338 0.500006 260.838C21 281.838 56.0183 272.255 86.9183 253.889C118.562 235.081 132.007 196.944 137.824 160.565C143.322 126.185 135.788 91.821 117.576 62.1765C98.8452 31.6856 73.0622 0.0850083 37.4272 -2.86289C3.51616 -5.66813 49.9271 34.8382 9.50006 65.8382C19.5001 104.838 34 79.8382 9.50007 120.838Z')",
    duration: 1300,
    easing: "easeInOutCubic",
  }),
  0,
);

// clip.addIncident(
//   clipPath({
//     selector: "img",
//     from: "url(#test-path)",
//     to: "circle(10%)",
//     duration: 2000,
//     // easing: "easeInOutCubic",
//   }),
//   0
// );
// clip.addIncident(
//   scale({
//     value: 1,
//     selector: ".clip-wrapper .item .image-wrapper",
//     duration: 200,
//     easing: "easeInOutCubic",
//     delay: "@stagger(0,600)",
//   }),
//   600
// );

// clip.addIncident(
//   width({
//     value: "460px",
//     selector: ".content-wrapper",
//     duration: 500,
//     easing: "easeInOutCubic",
//   }),
//   1300
// );
// clip.addIncident(
//   left({
//     value: "-160px",
//     selector: ".clip-wrapper .item",
//     duration: 500,
//     easing: "easeInOutCubic",
//   }),
//   1300
// );
// clip.addIncident(
//   width({
//     value: "250px",
//     selector: ".line1",
//     duration: 300,
//     easing: "easeInOutCubic",
//   }),
//   1800
// );
// clip.addIncident(
//   width({
//     value: "205px",
//     selector: ".line2",
//     duration: 300,
//     easing: "easeInOutCubic",
//   }),
//   1900
// );
// clip.addIncident(
//   width({
//     value: "90px",
//     selector: ".line3",
//     duration: 300,
//     easing: "easeInOutCubic",
//   }),
//   2000
// );

// clip.addIncident(
//   left({
//     value: "170px",
//     selector: ".clip-wrapper",
//     duration: 700,
//     easing: "easeInOutCubic",
//   }),
//   2300
// );
// clip.addIncident(
//   opacity({
//     value: 1,
//     selector: ".d-title",
//     duration: 300,
//     easing: "easeInOutCubic",
//   }),
//   3000
// );
// clip.addIncident(
//   scale({
//     value: 1,
//     selector: ".d-wrapper .box",
//     duration: 300,
//     easing: "easeInOutCubic",
//   }),
//   3300
// );
// clip.addIncident(
//   opacity({
//     value: 1,
//     selector: ".d-item.item1",
//     duration: 1,
//     easing: "easeInOutCubic",
//   }),
//   3800
// );
// clip.addIncident(
//   opacity({
//     value: 1,
//     selector: ".d-item.item2",
//     duration: 1,
//     easing: "easeInOutCubic",
//   }),
//   4200
// );
// clip.addIncident(
//   opacity({
//     value: 1,
//     selector: ".d-item.item3",
//     duration: 1,
//     easing: "easeInOutCubic",
//   }),
//   4600
// );

// clip.addIncident(
//   opacity({
//     value: 1,
//     selector: ".image",
//     duration: 500,
//     easing: "easeInOutCubic",
//   }),
//   5000
// );

// clip.addIncident(
//   opacity({
//     value: 1,
//     selector: ".p-title",
//     duration: 300,
//     easing: "easeInOutCubic",
//   }),
//   6200
// );
// clip.addIncident(
//   scale({
//     value: 1,
//     selector: ".p-wrapper .box",
//     duration: 300,
//     easing: "easeInOutCubic",
//   }),
//   6500
// );

// clip.addIncident(
//   left({
//     value: "36%",
//     selector: ".p-item",
//     duration: 500,
//     easing: "easeInOutCubic",
//   }),
//   6900
// );
// clip.addIncident(
//   opacity({
//     value: 0.2,
//     selector: ".p-item",
//     duration: 1,
//     easing: "easeInOutCubic",
//   }),
//   6900
// );
// clip.addIncident(
//   opacity({
//     value: 1,
//     selector: ".p-item.item1",
//     duration: 300,
//     easing: "easeInOutCubic",
//   }),
//   7400
// );
// clip.addIncident(
//   scale({
//     value: 1.3,
//     selector: ".p-item.item1",
//     duration: 300,
//     easing: "easeInOutCubic",
//   }),
//   7400
// );
// clip.addIncident(
//   opacity({
//     value: 1,
//     selector: ".blue.cw",
//     duration: 400,
//     easing: "easeInOutCubic",
//   }),
//   7400
// );

// clip.addIncident(
//   left({
//     value: "0%",
//     selector: ".p-item",
//     duration: 300,
//     easing: "easeInOutCubic",
//   }),
//   8400
// );
// clip.addIncident(
//   opacity({
//     value: 0.2,
//     selector: ".p-item.item1",
//     duration: 300,
//     easing: "easeInOutCubic",
//   }),
//   8400
// );
// clip.addIncident(
//   scale({
//     value: 1,
//     selector: ".p-item.item1",
//     duration: 300,
//     easing: "easeInOutCubic",
//   }),
//   8400
// );
// clip.addIncident(
//   opacity({
//     value: 1,
//     selector: ".p-item.item2",
//     duration: 300,
//     easing: "easeInOutCubic",
//   }),
//   8700
// );
// clip.addIncident(
//   scale({
//     value: 1.3,
//     selector: ".p-item.item2",
//     duration: 300,
//     easing: "easeInOutCubic",
//   }),
//   8700
// );
// clip.addIncident(
//   opacity({
//     value: 1,
//     selector: ".purple.cw",
//     duration: 400,
//     easing: "easeInOutCubic",
//   }),
//   8700
// );

// clip.addIncident(
//   left({
//     value: "-36%",
//     selector: ".p-item",
//     duration: 300,
//     easing: "easeInOutCubic",
//   }),
//   9700
// );
// clip.addIncident(
//   opacity({
//     value: 0.2,
//     selector: ".p-item.item2",
//     duration: 300,
//     easing: "easeInOutCubic",
//   }),
//   9700
// );
// clip.addIncident(
//   scale({
//     value: 1,
//     selector: ".p-item.item2",
//     duration: 300,
//     easing: "easeInOutCubic",
//   }),
//   9700
// );
// clip.addIncident(
//   opacity({
//     value: 1,
//     selector: ".p-item.item3",
//     duration: 300,
//     easing: "easeInOutCubic",
//   }),
//   10000
// );
// clip.addIncident(
//   scale({
//     value: 1.3,
//     selector: ".p-item.item3",
//     duration: 300,
//     easing: "easeInOutCubic",
//   }),
//   10000
// );
// clip.addIncident(
//   opacity({
//     value: 1,
//     selector: ".pink.cw",
//     duration: 400,
//     easing: "easeInOutCubic",
//   }),
//   10000
// );

// clip.addIncident(
//   left({
//     value: "-100%",
//     selector: ".p-item",
//     duration: 500,
//     easing: "easeInOutCubic",
//   }),
//   11000
// );
// clip.addIncident(
//   opacity({
//     value: 0,
//     selector: ".p-item",
//     duration: 300,
//     easing: "easeInOutCubic",
//   }),
//   11000
// );
// clip.addIncident(
//   scale({
//     value: 1,
//     selector: ".p-item.item3",
//     duration: 300,
//     easing: "easeInOutCubic",
//   }),
//   11000
// );
// clip.addIncident(
//   opacity({
//     value: 0,
//     selector: ".blue.cw,.purple.cw,.pink.cw",
//     duration: 300,
//     easing: "easeInOutCubic",
//   }),
//   11000
// );
// clip.addIncident(
//   scale({
//     value: 0,
//     selector: ".p-wrapper .box",
//     duration: 300,
//     easing: "easeInOutCubic",
//   }),
//   11300
// );
// clip.addIncident(
//   opacity({
//     value: 0,
//     selector: ".p-title",
//     duration: 300,
//     easing: "easeInOutCubic",
//   }),
//   11300
// );

// clip.addIncident(
//   opacity({
//     value: 0,
//     selector: ".image,.d-item",
//     duration: 300,
//     easing: "easeInOutCubic",
//   }),
//   11700
// );
// clip.addIncident(
//   scale({
//     value: 0,
//     selector: ".d-wrapper .box",
//     duration: 300,
//     easing: "easeInOutCubic",
//   }),
//   12000
// );
// clip.addIncident(
//   opacity({
//     value: 0,
//     selector: ".d-title",
//     duration: 300,
//     easing: "easeInOutCubic",
//   }),
//   12000
// );

// clip.addIncident(
//   left({
//     value: "570px",
//     selector: ".clip-wrapper",
//     duration: 500,
//     easing: "easeInOutCubic",
//   }),
//   12500
// );

// clip.addIncident(
//   opacity({
//     value: 0,
//     selector: ".line",
//     duration: 1,
//     easing: "easeInOutCubic",
//   }),
//   13100
// );
// clip.addIncident(
//   width({
//     value: "0px",
//     selector: ".content-wrapper",
//     duration: 500,
//     easing: "easeInOutCubic",
//   }),
//   13100
// );
// clip.addIncident(
//   left({
//     value: "0px",
//     selector: ".clip-wrapper .item",
//     duration: 500,
//     easing: "easeInOutCubic",
//   }),
//   13100
// );

// clip.addIncident(
//   scale({
//     value: 0,
//     selector: ".clip-wrapper .item .image-wrapper",
//     duration: 300,
//     easing: "easeInOutCubic",
//   }),
//   13800
// );
// clip.addIncident(
//   scale({
//     value: 0,
//     selector: ".clip-wrapper",
//     duration: 500,
//     easing: "easeInOutCubic",
//   }),
//   14300
// );

export default renderDonkeyclip({ clipId: pkg.id, initParams, clip });
