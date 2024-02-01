export default {
  title: { label: "Title", type: "string" },
  ctaText: { label: "CTA Text", type: "string" },

  fontColor: { label: "Font Color", type: "color" },
  primaryColor: { label: "Primary Color", type: "color" },
  backgroundColor: { label: "Background Color", type: "color" },

  products: {
    label: "Products",
    type: "array",
    items: {
      type: "object",
      props: {
        description: { type: "string" },
        featured_image: { type: "string" },
      },
    },
  },
};
