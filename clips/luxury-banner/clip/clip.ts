/* eslint-disable sonarjs/no-duplicate-string */
import { HTMLClip } from "@donkeyclip/motorcortex";
import { renderDonkeyclip } from "@donkeyclip/server";
import pkg from "../package.json";
import css from "./clip.css";
import html from "./clip.html";
import initParams from "./initParams";
import initParamsValidationRules from "./initParamsValidationRules";
import {
  clipPath,
  scale,
  strokeDashOffset,
  transformTop,
} from "./clipIncidents";

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

const animateDiscount = (startingPositionOfDiscountAnimation: number) => {
  const animationDuration = 1300;
  // discount animation
  // ENTER SCENE STEPS
  // STEP 1 make the top text larger
  clip.addIncident(
    scale({
      selector: `.text`,
      from: 1,
      to: 1.3,
      duration: animationDuration,
      easing: "easeInOutCubic",
    }),
    startingPositionOfDiscountAnimation,
  );
  // STEP 2 make the bottom text smaller
  clip.addIncident(
    scale({
      selector: `.secondary-text`,
      from: 1,
      to: 0.6,
      duration: animationDuration,
      easing: "easeInOutCubic",
    }),
    startingPositionOfDiscountAnimation,
  );
  // STEP 3 make the top text drop down
  clip.addIncident(
    transformTop({
      selector: `.text`,
      from: "0px",
      to: "5px",
      duration: animationDuration,
      easing: "easeInOutCubic",
    }),
    startingPositionOfDiscountAnimation,
  );
  // STEP 4 make the bottom text drop down
  clip.addIncident(
    transformTop({
      selector: `.secondary-text`,
      from: "0px",
      to: "5px",
      duration: animationDuration,
      easing: "easeInOutCubic",
    }),
    startingPositionOfDiscountAnimation,
  );
  // EXIT SCENE STEPS
  // STEP 1 reset top text to its initial scale
  clip.addIncident(
    scale({
      selector: `.text`,
      from: 1.3,
      to: 1,
      duration: animationDuration,
      easing: "easeInOutCubic",
    }),
    startingPositionOfDiscountAnimation + 1500,
  );
  // STEP 2 reset bottom text to its initial scale
  clip.addIncident(
    scale({
      selector: `.secondary-text`,
      from: 0.6,
      to: 1,
      duration: animationDuration,
      easing: "easeInOutCubic",
    }),
    startingPositionOfDiscountAnimation + 1500,
  );
  // STEP 3 reset top text to its initial position
  clip.addIncident(
    transformTop({
      selector: `.text`,
      from: "5px",
      to: "0px",
      duration: animationDuration,
      easing: "easeInOutCubic",
    }),
    startingPositionOfDiscountAnimation + 1500,
  );
  // STEP 4 reset bottom text to its initial position
  clip.addIncident(
    transformTop({
      selector: `.secondary-text`,
      from: "5px",
      to: "0px",
      duration: animationDuration,
      easing: "easeInOutCubic",
    }),
    startingPositionOfDiscountAnimation + 1500,
  );
};

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

  clip.addIncident(
    clipPath({
      selector: `.discount`,
      from: "circle(0.0% at 50% 50%)",
      to: "circle(50% at 50% 50%)",
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
    animateDiscount(startingPosition);
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
