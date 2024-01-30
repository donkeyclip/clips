export default {
  title: {
    label: "Title",
    type: "string",
  },
  subtitle: { type: "string" },

  text: "Summer",
  secondaryText: "Offers",

  ctaLink: { type: "string" },
  ctaText: { type: "string" },

  primaryColor: { label: "Your best color", type: "color" },
  secondaryColor: { type: "color" },
  backgroundColor: { type: "color" },
  fontColor: { type: "color" },
  backgroundImage: { type: "string" },

  products: {
    label: "Products",
    type: "array",
    items: {
      type: "object",
      props: {
        featured_image: { type: "string" },
        name: { type: "string" },
      },
    },
  },
};
