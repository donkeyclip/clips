import { CSSEffect, Combo } from "@donkeyclip/motorcortex";

export const scaleBigSmallCombo = ({
  selector,
  duration,
  startingPosition,
  delay = 0,
  easing = "linear",
}: {
  selector: string;
  duration: number;
  startingPosition: number;
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
                scale: 1.1,
              },
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
              transform: {
                scale: 1,
              },
            },
          },
          props: {
            duration,
            easing,
          },
          position: startingPosition + duration,
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

export const strokeDashOffset = ({
  selector,
  from,
  to,
  dashArrayFrom,
  dashArrayTo,
  duration,
  delay = 0,
  easing = "linear",
}: {
  selector: string;
  from?: number;
  to: number;
  dashArrayFrom?: number;
  dashArrayTo?: number;
  duration: string | number;
  delay?: string | number;
  easing?: string;
}) => {
  return new CSSEffect(
    {
      animatedAttrs: {
        strokeDasharray: dashArrayTo,
        strokeDashoffset: to,
      },
      initialValues: {
        strokeDasharray: dashArrayFrom,
        strokeDashoffset: from,
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

export const scale = ({
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
        scale: to,
      },
      initialValues: {
        scale: from,
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

export const transformTop = ({
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
        transform: {
          translateY: to,
        },
      },
      initialValues: {
        transform: {
          translateY: from,
        },
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
