export default {
  primaryColor: { type: "color" },
  backgroundColor: { type: "color" },
  fontColor: { type: "color" },
  wave1: { type: "string" },
  wave2: { type: "string" },
  wave3: { type: "string" },
  text: { type: "string" },
  offer: { type: "string" },
  products: {
    label: "Products",
    type: "array",
    items: {
      type: "object",
      props: {
        image: { type: "string" },
      },
    },
  },
};
