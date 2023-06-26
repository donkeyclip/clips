export const calculateDiagonalEndPosition = (
  initialTop: number,
  initialLeft: number,
  angle: number,
  distance: number
) => {
  const endTop = initialTop + Math.sin((angle * Math.PI) / 180) * distance;
  const endLeft = initialLeft + Math.cos((angle * Math.PI) / 180) * distance;
  return {
    top: endTop,
    left: endLeft,
  };
};
