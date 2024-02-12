import { CSSEffect, Combo } from "@donkeyclip/motorcortex";

export const clipPathExpandFromLineCombo = ({
  selector,
  duration,
  startingPosition,
  endingPosition,
  initialPath,
  endingPath,
  initialPath2,
  endingPath2,
  delay = 0,
  easing = "linear",
}: {
  selector: string;
  duration: number;
  startingPosition: number;
  endingPosition: number;
  initialPath: string;
  endingPath: string;
  initialPath2: string;
  endingPath2: string;
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
              clipPath: endingPath2,
            },
            initalValues: {
              clipPath: initialPath2,
            },
          },
          props: {
            duration,
            easing,
          },
          position: startingPosition + duration,
        },
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              clipPath: initialPath2,
            },
            initalValues: {
              clipPath: endingPath2,
            },
          },
          props: {
            duration,
            easing,
          },
          position: endingPosition,
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
          position: endingPosition + duration,
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

export const color = ({
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
        color: to,
      },
      initialValues: {
        color: from,
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

// export const scale = ({
//   selector,
//   from,
//   to,
//   duration,
//   delay = 0,
//   easing = "linear",
// }: {
//   selector: string;
//   from: number;
//   to: number;
//   duration: string | number;
//   delay?: string | number;
//   easing?: string;
// }) => {
//   return new CSSEffect(
//     {
//       animatedAttrs: {
//         scale: to,
//       },
//       initialValues: {
//         scale: from,
//       },
//     },
//     {
//       selector,
//       duration,
//       delay,
//       easing,
//     },
//   );
// };

export const mask = ({
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
        maskImage: to,
      },
      initialValues: {
        maskImage: from,
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
