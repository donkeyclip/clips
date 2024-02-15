/* eslint-disable sonarjs/no-duplicate-string */
import { HTMLClip } from "@donkeyclip/motorcortex";
import { renderDonkeyclip } from "@donkeyclip/server";
import pkg from "../package.json";
import css from "./clip.css";
import html from "./clip.html";
import initParams from "./initParams";
import initParamsValidationRules from "./initParamsValidationRules";
import { clipPath, strokeDashOffset } from "./clipIncidents";

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
    width: "705px",
    height: "290px",
  },
  fonts: [
    {
      src: `https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@700&family=Poppins:wght@100;700&display=swap`,
      type: `google-font`,
    },
  ],
});

const productsLength = initParams[0].value.products.length;

const animationDurationOfCircles = 1300;
// const displayImageDuration = 6000;
// const delayBetweenImageChange = 200;
// const animationDurationOfCombos = 700;
// const animationDurationOfStartingTextOverlaysAndHorizontalLine = 600;

const animateText = (delayBeforeStart = 0) => {
  clip.addIncident(
    clipPath({
      selector: `.title, .subtitle, .cta`,
      from: "inset(100% 0% 0% 0%)",
      to: "inset(0% 0% 0% 0%)",
      duration: animationDurationOfCircles,
      easing: "easeInOutCubic",
    }),
    delayBeforeStart,
  );
};

const animateCircles = (delayBeforeStart = 0) => {
  const radiusOfCircle = 128.5;
  const pi = 3.14;
  const circumferenceOfCircle = Math.round(2 * pi * radiusOfCircle) + 1;
  // SUMMER OFFERS CIRCLE
  clip.addIncident(
    strokeDashOffset({
      selector: `.svg-1 svg`,
      from: circumferenceOfCircle,
      to: 0,
      dashArrayFrom: circumferenceOfCircle,
      dashArrayTo: circumferenceOfCircle,
      duration: 1500,
      easing: "easeInOutCubic",
    }),
    delayBeforeStart,
  );
  // PRODUCT IMAGE CIRCLE
  clip.addIncident(
    strokeDashOffset({
      selector: `.svg-3 svg`,
      from: -circumferenceOfCircle,
      to: 0,
      dashArrayFrom: circumferenceOfCircle,
      dashArrayTo: circumferenceOfCircle,
      duration: 1500,
      easing: "easeInOutCubic",
    }),
    delayBeforeStart,
  );
  // CORNER CIRCLE
  clip.addIncident(
    strokeDashOffset({
      selector: `.svg-2 svg`,
      from: -circumferenceOfCircle,
      to: -400,
      dashArrayFrom: circumferenceOfCircle,
      dashArrayTo: circumferenceOfCircle,
      duration: 1000,
      easing: "easeInOutCubic",
    }),
    delayBeforeStart,
  );
};

const animateProductImages = (delayBeforeStart = 0) => {
  Array.from({ length: productsLength }).forEach((_, index) => {
    const initialDelay = index === 0 ? delayBeforeStart : 0;
    const animationDuration = 1300;
    const displayImageDuration = 4000;
    const delayBetweenImageChange = -1450;
    const startingPosition =
      index *
      (animationDuration + displayImageDuration + delayBetweenImageChange);
    const endingPosition = startingPosition + displayImageDuration;

    clip.addIncident(
      clipPath({
        selector: `#product-${index} img`,
        from: "inset(0% 0% 100% 0%)",
        to: "inset(0% 0% 0% 0%)",
        duration: animationDuration + 500,
        delay: index === 0 ? initialDelay + 200 : 200,
        easing: "easeInOutCubic",
      }),
      startingPosition,
    );

    clip.addIncident(
      clipPath({
        selector: `#product-${index} img`,
        from: "inset(0% 0% 0% 0%)",
        to: "inset(100% 0% 0% 0%)",
        duration: animationDuration + 600,
        easing: "easeOutCubic",
      }),
      endingPosition,
    );
  });
};

animateCircles();
animateText(animationDurationOfCircles);
animateProductImages(animationDurationOfCircles);

export default renderDonkeyclip({ clipId: pkg.id, initParams, clip });
