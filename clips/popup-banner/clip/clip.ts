/* eslint-disable sonarjs/no-duplicate-string */
import Countdown from "@donkeyclip/dc-countdown-plugin";
import { opacity, top, width } from "@donkeyclip/effects";
import { HTMLClip, loadPlugin } from "@donkeyclip/motorcortex";
import { renderDonkeyclip } from "@donkeyclip/server";
import pkg from "../package.json";
import css from "./clip.css";
import html from "./clip.html";
import { gap } from "./ClipIncidents";
import initParams from "./initParams";
import initParamsValidationRules from "./initParamsValidationRules";
const CountdownPlugin = loadPlugin(Countdown);
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
  initParamsValidationRules: initParamsValidationRules,
  supportedDimensions: [
    { width: "900px", height: "600px" },
    { width: "350px", height: "650px" },
    { width: "900px", height: "150px" },
    { width: "393px", height: "100px" },
  ],
  containerParams: {
    width: "900px",
    height: "600px",
  },
  fonts: [
    {
      type: "google-font",
      src: "https://fonts.googleapis.com/css2?family={{ initParams.fontFamily }}:wght@400..800&display=swap",
    },
  ],
  audio: "off",
});

const duration350 = 350;
const duration500 = 500;
const duration750 = 750;

clip.addIncident(
  width({
    value: "0%",
    selector: ".products-bg",
    easing: "easeInOutSine",
    duration: duration750,
  }),
  0,
);
clip.addIncident(
  width({
    value: "100%",
    selector: ".product-wrapper",
    delay: "@expression(3000*index)",
    duration: duration750,
  }),
  duration350,
);
clip.addIncident(
  width({
    value: "100%",
    selector: ".info-product",
    delay: "@expression(3000*index)",
    duration: duration750,
  }),
  duration350,
);

clip.addIncident(
  width({
    value: "119px",
    selector: ".abstract-lines2-wrapper",
    duration: duration350,
  }),
  duration350,
);
clip.addIncident(
  width({
    value: "133px",
    selector: ".abstract-lines1-wrapper",
    duration: duration350,
  }),
  duration350,
);
clip.addIncident(
  opacity({
    value: 1,
    selector: ".text,.logo",
    duration: duration350,
  }),
  duration350,
);
clip.addIncident(
  gap("10px", ".details-wrapper", duration350, 0, "easeInOutSine"),
  duration350,
);
clip.addIncident(
  top({
    value: "0px",
    selector: ".info-cta",
    duration: duration350,
  }),
  duration350,
);

clip.addIncident(
  opacity({
    value: 1,
    selector: ".cta-countdown",
    duration: duration350,
  }),
  duration750,
);
//outro
clip.addIncident(
  width({
    value: "100%",
    selector: ".products-bg",
    easing: "easeInOutSine",
    delay: "@expression(initParams.products.length*3000)",
    duration: duration500,
  }),
  duration750 + duration350,
);
clip.addIncident(
  width({
    value: "0px",
    selector: ".abstract-lines1-wrapper,.abstract-lines2-wrapper",
    delay: "@expression(initParams.products.length*3000)",
    duration: duration350,
  }),
  duration750 + duration350,
);
clip.addIncident(
  opacity({
    value: 0,
    selector: ".text,.cta-countdown",
    delay: "@expression(initParams.products.length*3000)",
    duration: duration350,
  }),
  duration750 + duration350,
);
clip.addIncident(
  gap(
    "30px",
    ".details-wrapper",
    duration350,
    "@expression(initParams.products.length*3000)",
    "easeInOutSine",
  ),
  duration750 + duration350,
);
clip.addIncident(
  top({
    value: "30px",
    selector: ".info-cta",
    duration: duration350,
    delay: "@expression(initParams.products.length*3000)",
  }),
  duration750 + duration350,
);
const newEffectHours = new CountdownPlugin.Countdown(
  {
    type: "hours",
    forceDoubleDigit: true,
    operation: "free",
    animatedAttrs: {
      time: "@initParams.countdownMilliseconds",
    },
  },
  {
    selector: `#free-hours`,
    duration: 1,
  },
);
const newEffectMinutes = new CountdownPlugin.Countdown(
  {
    type: "minutes",
    forceDoubleDigit: true,
    operation: "free",
    animatedAttrs: {
      time: "@initParams.countdownMilliseconds",
    },
  },
  {
    selector: `#free-minutes`,
    duration: 1,
  },
);
const newEffectSeconds = new CountdownPlugin.Countdown(
  {
    type: "seconds",
    forceDoubleDigit: true,
    operation: "free",
    animatedAttrs: {
      time: "@initParams.countdownMilliseconds",
    },
  },
  {
    selector: `#free-seconds`,
    duration: 1,
  },
);
const newEffectDays = new CountdownPlugin.Countdown(
  {
    type: "days",
    forceDoubleDigit: false,
    operation: "free",
    animatedAttrs: {
      time: "@initParams.countdownMilliseconds",
    },
  },
  {
    selector: `#free-days`,
    duration: 1,
  },
);

clip.addIncident(newEffectDays, 0);
clip.addIncident(newEffectHours, 0);
clip.addIncident(newEffectMinutes, 0);
clip.addIncident(newEffectSeconds, 0);

export default renderDonkeyclip({ clipId: pkg.id, initParams, clip });
