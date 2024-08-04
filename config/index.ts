export const PRODUCT_CATEGORIES = [
  {
    label: "Trending",
    value: "ui_kits" as const,
    featured: [
      {
        name: "Editor's picks",
        href: "#",
        imageSrc: "/nav/ui-kits/mixed.jpg"
      },
      {
        name: "New Arrivals",
        href: "#",
        imageSrc: "/nav/ui-kits/blue.jpg"
      },
      {
        name: "Best sellers",
        href: "#",
        imageSrc: "/nav/ui-kits/purple.jpg"
      },
    ]
  },
  {
    label: "Latest",
    value: "icons" as const,
    featured: [
      {
        name: "Favourite Icon picks",
        href: "#",
        imageSrc: "/nav/icons/mixed.jpg"
      },
      {
        name: "New Arrivals",
        href: "#",
        imageSrc: "/nav/icons/new.jpg"
      },
      {
        name: "Bestselling Software",
        href: "#",
        imageSrc: "/nav/icons/bestsellers.jpg"
      },
    ]
  }
]
