export default {
  title: { label: "Title", type: "string" },
  secondaryText: { label: "Secondary Text", type: "string" },

  primaryColor: { label: "Primary Color", type: "color" },
  secondaryColor: { label: "Secondary Color", type: "color" },
  backgroundColor: { label: "Background Color", type: "color" },
  fontColor: { label: "Font Color", type: "color" },

  ctaText: { type: "string" },

  products: {
    label: "Products",
    type: "array",
    items: {
      type: "object",
      props: {
        name: { type: "string" },
        featured_image: { type: "string" },
      },
    },
  },
};
