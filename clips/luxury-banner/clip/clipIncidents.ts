import { CSSEffect } from "@donkeyclip/motorcortex";

// export const drawLineCombo = ({
//   selector,
//   duration,
//   from,
//   to,
//   dashArrayFrom,
//   dashArrayTo,
//   startingPosition,
//   endingPosition,
//   delay = 0,
//   easing = "linear",
// }: {
//   selector: string;
//   duration: number;
//   from?: number;
//   to: number;
//   dashArrayFrom?: number;
//   dashArrayTo: number;
//   startingPosition: number;
//   endingPosition: number;
//   delay?: string | number;
//   easing?: string;
// }) => {
//   return new Combo(
//     {
//       incidents: [
//         {
//           incidentClass: CSSEffect,
//           attrs: {
//             animatedAttrs: {
//               strokeDasharray: dashArrayTo,
//               strokeDashoffset: to,
//             },
//             initialValues: {
//               strokeDasharray: dashArrayFrom,
//               strokeDashoffset: from,
//             },
//           },
//           props: {
//             duration,
//             easing,
//           },
//           position: startingPosition,
//         },
//         {
//           incidentClass: CSSEffect,
//           attrs: {
//             animatedAttrs: {
//               strokeDasharray: 808 / 2,
//               strokeDashoffset: -370,
//             },
//             // initialValues: {
//             //   strokeDasharray: dashArrayFrom,
//             //   strokeDashoffset: from,
//             // },
//           },
//           props: {
//             duration,
//             easing,
//           },
//           position: startingPosition + duration,
//         },
//       ],
//     },
//     {
//       selector,
//       delay,
//       easing,
//     }
//   );
// };

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
