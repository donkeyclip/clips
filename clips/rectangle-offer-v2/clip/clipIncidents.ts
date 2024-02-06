import { CSSEffect, Combo } from "@donkeyclip/motorcortex";

const initialPath =
  "path('M250.5 122.5C214 187 265.345 152.602 257.927 192C244.448 263.588 274.572 204.65 230.5 295C201.072 360.65 276.518 275.917 307.418 257.551C339.062 238.743 352.507 200.606 358.324 164.227C363.822 129.847 356.288 95.4827 338.076 65.8382C319.345 35.3473 293.562 3.7468 257.927 0.798905C224.016 -2.00634 256.049 -25 245 9.49999C220.5 86 289.5 75 250.5 122.5Z')";
const endingPath =
  "path('M125.428 131.35C98.081 160.665 9.1766 165.174 1.75831 204.572C-11.721 276.16 80.4289 259.85 119.428 273.85C147.429 286.85 262.018 275.917 292.918 257.551C324.562 238.743 338.007 200.606 343.824 164.227C349.322 129.847 341.788 95.4827 323.576 65.8382C304.845 35.3473 279.062 3.74679 243.427 0.798893C209.516 -2.00635 188.078 9.25892 158.759 26.5726C126.712 45.4967 158.043 96.3874 125.428 131.35Z')";

export const clipPathImagesCombo = ({
  selector,
  duration,
  startingPosition,
  endingPosition,
  delay = 0,
  easing = "linear",
}: {
  selector: string;
  duration: string | number;
  startingPosition: number;
  endingPosition: number;
  delay?: string | number;
  easing?: string;
}) => {
  return new Combo(
    {
      incidents: [
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              clipPath: endingPath,
            },
            initalValues: {
              clipPath: initialPath,
            },
          },
          props: {
            duration,
            easing,
          },
          position: startingPosition,
        },
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              clipPath: initialPath,
            },
            initalValues: {
              clipPath: endingPath,
            },
          },
          props: {
            duration,
            easing,
          },
          position: endingPosition,
        },
      ],
    },
    {
      selector,
      delay,
      easing,
    },
  );
};

export const showAndHideTextCombo = ({
  selector,
  displayTextDuration,
  enterScenePosition = 0,
  exitScenePosition = 0,
  enterAnimationDuration = 1300,
  exitAnimationDuration = 1300,
  easing = "easeInOutQuad",
}: {
  selector: string;
  displayTextDuration: number;
  enterScenePosition?: number;
  exitScenePosition?: number;
  enterAnimationDuration?: number;
  exitAnimationDuration?: number;
  from?: string;
  to?: string;
  duration?: string | number;
  delay?: string | number;
  easing?: string;
}) => {
  return new Combo(
    {
      incidents: [
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              transform: {
                translateX: "0",
              },
            },
            initialValues: {
              transform: {
                translateX: "-100%",
              },
            },
          },
          props: {
            duration: enterAnimationDuration,
            delay: "@stagger(0, 300)",
            easing,
          },
          position: enterScenePosition ? enterScenePosition : 0,
        },
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              transform: {
                translateX: "-100%",
              },
            },
          },
          props: {
            duration: exitAnimationDuration,
            easing,
          },
          position: exitScenePosition
            ? exitScenePosition
            : displayTextDuration + enterAnimationDuration,
        },
      ],
    },
    {
      selector,
    },
  );
};

export const clipPath = ({
  selector,
  from,
  to,
  duration,
  delay = 0,
  easing = "linear",
}: {
  selector: string;
  from: string;
  to: string;
  duration: string | number;
  delay?: string | number;
  easing?: string;
}) => {
  return new CSSEffect(
    {
      animatedAttrs: {
        clipPath: to,
      },
      initialValues: {
        clipPath: from,
      },
    },
    {
      selector,
      duration,
      delay,
      easing,
    },
  );
};

export const opacity = ({
  selector,
  from,
  to,
  duration,
  delay = 0,
  easing = "linear",
}: {
  selector: string;
  from: number;
  to: number;
  duration: string | number;
  delay?: string | number;
  easing?: string;
}) => {
  return new CSSEffect(
    {
      animatedAttrs: {
        opacity: to,
      },
      initialValues: {
        opacity: from,
      },
    },
    {
      selector,
      duration,
      delay,
      easing,
    },
  );
};
