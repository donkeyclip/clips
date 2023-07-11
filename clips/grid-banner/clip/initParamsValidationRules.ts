export default {
  primaryColor: { type: "color" },
  secondaryColor: { type: "color" },
  backgroundColor: { type: "color" },
  fontColor: { type: "color" },
  text: {
    type: "array",
    items: {
      type: "string",
    },
  },
  offer: {
    type: "array",
    items: {
      type: "string",
    },
  },
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
