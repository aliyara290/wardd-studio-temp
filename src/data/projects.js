const projectsData = [
  {
    id: "wardd-music",
    poster: "/images/projects/wardd/post.png",
    hero: {
      title: "Wardd Music",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, labore?",
      image: "/images/bg/hero_test.jpg",
    },
    details: {
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt vitae temporibus assumenda...",
      highlights: [
        "Creative Design",
        "Responsive Layout",
        "Fast Performance",
        "Secure Platform",
      ],
      services: [
        "Website",
        "Branding & Design",
        "Social Media",
        "Website Design",
        "Advertising",
      ],
      websiteLink: null,
    },
    video: {
      videoSrc: null,
    },
    richtext: {
      title: "Lorem ipsum dolor sit amet consectetur.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet asperiores quae reiciendis...",
    },
    banner: {
      image: "/images/bg/banner_test.jpeg",
    },
    mockups: [
      { src: "/images/bg/mockup_test.jpg", alt: "Mockup Image 1" },
      { src: "/images/bg/mockup_test_2.jpg", alt: "Mockup Image 2" },
    ],
  },
  {
    id: "chance-coffee",
    poster: "/images/projects/chance/hero-banner.jpg",
    hero: {
      title: "Chance Coffee",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, labore?",
      image: "/images/projects/chance/hero-banner.jpg",
    },
    details: {
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt vitae temporibus assumenda...",
      highlights: ["Creative Design", "Responsive Layout"],
      services: ["Branding & Design", "Social Media"],
      websiteLink: null,
    },
    video: {
      videoSrc: null,
    },
    richtext: {
      title: "Lorem ipsum dolor sit amet consectetur.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet asperiores quae reiciendis...",
    },
    banner: {
      image: "/images/projects/chance/banner.jpg",
    },
    mockups: [
      { src: "/images/projects/chance/mockup.jpg", alt: "Mockup Image 1" },
      { src: "/images/projects/chance/mockup-2.jpg", alt: "Mockup Image 2" },
    ],
  },
  {
    id: "al-amyal-chasaa",
    poster: "/images/projects/amyal/post.jpg",
    hero: {
      title: "Al Amyal Al chasaa",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, labore?",
      image: "/images/projects/amyal/hero-banner.jpg",
    },
    details: {
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt vitae temporibus assumenda...",
      highlights: [
        "Creative Design",
        "Responsive Layout",
        "Fast Performance",
        "Secure Platform",
      ],
      services: [
        "Website",
        "Branding & Design",
        "Social Media",
        "Website Design",
        "Advertising",
      ],
      websiteLink: null,
    },
    video: {
      videoSrc: null,
    },
    richtext: {
      title: "Lorem ipsum dolor sit amet consectetur.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet asperiores quae reiciendis...",
    },
    banner: {
      image: "/images/projects/amyal/banner.jpg",
    },
    mockups: [
      { src: "/images/projects/amyal/mockup.jpg", alt: "Mockup Image 1" },
      { src: "/images/projects/amyal/mockup-2.jpg", alt: "Mockup Image 2" },
    ],
  },
  // {
  //   id: "sulaimane-lawyer",
  //   poster: "/images/posts/lawyer.jpg",
  //   hero: {
  //     title: "sulaimane lawyer",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, labore?",
  //     image: "/images/bg/hero_test.jpg",
  //   },
  //   details: {
  //     description:
  //       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt vitae temporibus assumenda...",
  //     highlights: [
  //       "Creative Design",
  //       "Responsive Layout",
  //       "Fast Performance",
  //       "Secure Platform",
  //     ],
  //     services: [
  //       "Website",
  //       "Branding & Design",
  //       "Social Media",
  //       "Website Design",
  //       "Advertising",
  //     ],
  //     websiteLink: null,
  //   },
  //   video: {
  //     videoSrc: null,
  //   },
  //   richtext: {
  //     title: "Lorem ipsum dolor sit amet consectetur.",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet asperiores quae reiciendis...",
  //   },
  //   banner: {
  //     image: "/images/bg/banner_test.jpeg",
  //   },
  //   mockups: [
  //     { src: "/images/bg/mockup_test.jpg", alt: "Mockup Image 1" },
  //     { src: "/images/bg/mockup_test_2.jpg", alt: "Mockup Image 2" },
  //   ],
  // },
  // {
  //   id: "smiley",
  //   poster: "/images/projects/smiley/post.jpg",
  //   hero: {
  //     title: "Smiley",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, labore?",
  //     image: "/images/bg/hero_test.jpg",
  //   },
  //   details: {
  //     description:
  //       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt vitae temporibus assumenda...",
  //     highlights: [
  //       "Creative Design",
  //       "Responsive Layout",
  //       "Fast Performance",
  //       "Secure Platform",
  //     ],
  //     services: [
  //       "Website",
  //       "Branding & Design",
  //       "Social Media",
  //       "Website Design",
  //       "Advertising",
  //     ],
  //     websiteLink: null,
  //   },
  //   video: {
  //     videoSrc: null,
  //   },
  //   richtext: {
  //     title: "Lorem ipsum dolor sit amet consectetur.",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet asperiores quae reiciendis...",
  //   },
  //   banner: {
  //     image: "/images/bg/banner_test.jpeg",
  //   },
  //   mockups: [
  //     { src: "/images/bg/mockup_test.jpg", alt: "Mockup Image 1" },
  //     { src: "/images/bg/mockup_test_2.jpg", alt: "Mockup Image 2" },
  //   ],
  // },
  // {
  //   id: "gourmet-grove",
  //   poster: "/images/social-media/real-estat-05.jpg",
  //   hero: {
  //     title: "Gourmet Grove",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, labore?",
  //     image: "/images/bg/hero_test.jpg",
  //   },
  //   details: {
  //     description:
  //       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt vitae temporibus assumenda...",
  //     highlights: [
  //       "Creative Design",
  //       "Responsive Layout",
  //       "Fast Performance",
  //       "Secure Platform",
  //     ],
  //     services: [
  //       "Website",
  //       "Branding & Design",
  //       "Social Media",
  //       "Website Design",
  //       "Advertising",
  //     ],
  //     websiteLink: null,
  //   },
  //   video: {
  //     videoSrc: null,
  //   },
  //   richtext: {
  //     title: "Lorem ipsum dolor sit amet consectetur.",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet asperiores quae reiciendis...",
  //   },
  //   banner: {
  //     image: "/images/bg/banner_test.jpeg",
  //   },
  //   mockups: [
  //     { src: "/images/bg/mockup_test.jpg", alt: "Mockup Image 1" },
  //     { src: "/images/bg/mockup_test_2.jpg", alt: "Mockup Image 2" },
  //   ],
  // },
  // {
  //   id: "modavista",
  //   poster: "/images/branding/art-4-min.jpg",
  //   hero: {
  //     title: "Modavista",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, labore?",
  //     image: "/images/bg/hero_test.jpg",
  //   },
  //   details: {
  //     description:
  //       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt vitae temporibus assumenda...",
  //     highlights: [
  //       "Creative Design",
  //       "Responsive Layout",
  //       "Fast Performance",
  //       "Secure Platform",
  //     ],
  //     services: [
  //       "Website",
  //       "Branding & Design",
  //       "Social Media",
  //       "Website Design",
  //       "Advertising",
  //     ],
  //     websiteLink: null,
  //   },
  //   video: {
  //     videoSrc: null,
  //   },
  //   richtext: {
  //     title: "Lorem ipsum dolor sit amet consectetur.",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet asperiores quae reiciendis...",
  //   },
  //   banner: {
  //     image: "/images/bg/banner_test.jpeg",
  //   },
  //   mockups: [
  //     { src: "/images/bg/mockup_test.jpg", alt: "Mockup Image 1" },
  //     { src: "/images/bg/mockup_test_2.jpg", alt: "Mockup Image 2" },
  //   ],
  // },
  {
    id: "fedaki",
    poster: "/images/projects/fedaki/post.jpg",
    hero: {
      title: "Fedaki",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, labore?",
      image: "/images/projects/fedaki/mockup-2.jpg",
    },
    details: {
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt vitae temporibus assumenda...",
      highlights: ["Creative Design", "Responsive Layout"],
      services: ["Branding & Design", "Social Media", "Advertising"],
      websiteLink: null,
    },
    video: {
      videoSrc: null,
    },
    richtext: {
      title: "Lorem ipsum dolor sit amet consectetur.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet asperiores quae reiciendis...",
    },
    banner: {
      image: "/images/projects/fedaki/logo.jpg",
    },
    mockups: [
      { src: "/images/projects/fedaki/mockup.jpg", alt: "Mockup Image 1" },
      { src: "/images/projects/fedaki/mockup-2.jpg", alt: "Mockup Image 2" },
    ],
  },
  // {
  //   id: "thaqafa",
  //   poster: "/images/posts/thaqafa.jpg",
  //   hero: {
  //     title: "Thaqafa",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, labore?",
  //     image: "/images/bg/hero_test.jpg",
  //   },
  //   details: {
  //     description:
  //       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt vitae temporibus assumenda...",
  //     highlights: [
  //       "Creative Design",
  //       "Responsive Layout",
  //       "Fast Performance",
  //       "Secure Platform",
  //     ],
  //     services: [
  //       "Branding & Design",
  //       "Social Media",
  //       "Advertising",
  //     ],
  //     websiteLink: null,
  //   },
  //   video: {
  //     videoSrc: null,
  //   },
  //   richtext: {
  //     title: "Lorem ipsum dolor sit amet consectetur.",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet asperiores quae reiciendis...",
  //   },
  //   banner: {
  //     image: "/images/bg/banner_test.jpeg",
  //   },
  //   mockups: [
  //     { src: "/images/bg/mockup_test.jpg", alt: "Mockup Image 1" },
  //     { src: "/images/bg/mockup_test_2.jpg", alt: "Mockup Image 2" },
  //   ],
  // },
  {
    id: "waed-school",
    poster: "/images/projects/waed/post.jpg",
    hero: {
      title: "waed School",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, labore?",
      image: "/images/projects/waed/hero-banner.jpg",
    },
    details: {
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt vitae temporibus assumenda...",
      highlights: ["Creative Design", "Responsive Layout"],
      services: ["Branding & Design", "Social Media"],
      websiteLink: null,
    },
    video: {
      videoSrc: null,
    },
    richtext: {
      title: "Lorem ipsum dolor sit amet consectetur.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet asperiores quae reiciendis...",
    },
    banner: {
      image: "/images/projects/waed/post.jpg",
    },
    mockups: [
      { src: "/images/projects/waed/mockup.jpg", alt: "Mockup Image 1" },
      { src: "/images/projects/waed/mockup-2.jpg", alt: "Mockup Image 2" },
    ],
  },
  {
    id: "tajer",
    poster: "/images/projects/tajer/post.jpg",
    hero: {
      title: "Tajer",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, labore?",
      image: "/images/bg/hero_test.jpg",
    },
    details: {
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt vitae temporibus assumenda...",
      highlights: ["Creative Design", "Responsive Layout"],
      services: ["Branding & Design", "Social Media", "Advertising"],
      websiteLink: null,
    },
    video: {
      videoSrc: null,
    },
    richtext: {
      title: "Lorem ipsum dolor sit amet consectetur.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet asperiores quae reiciendis...",
    },
    banner: {
      image: "/images/projects/tajer/banner.jpg",
    },
    mockups: [
      { src: "/images/projects/tajer/mockup-2.jpg", alt: "Mockup Image 1" },
      { src: "/images/projects/tajer/mockup.jpg", alt: "Mockup Image 2" },
    ],
  },
  {
    id: "okez",
    poster: "/images/projects/okez/post.jpg",
    hero: {
      title: "Okez",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, labore?",
      image: "/images/projects/okez/hero-banner.jpg",
    },
    details: {
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt vitae temporibus assumenda...",
      highlights: [
        "Creative Design",
        "Responsive Layout",
      ],
      services: [
        "Branding & Design",
        "Social Media",
        "Advertising",
      ],
      websiteLink: null,
    },
    video: {
      videoSrc: null,
    },
    richtext: {
      title: "Lorem ipsum dolor sit amet consectetur.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet asperiores quae reiciendis...",
    },
    banner: {
      image: "/images/projects/okez/banner.jpg",
    },
    mockups: [
      { src: "/images/projects/okez/mockup.jpg", alt: "Mockup Image 1" },
      { src: "/images/projects/okez/mockup-2.jpg", alt: "Mockup Image 2" },
    ],
  },
  {
    id: "bonapp",
    poster: "/images/projects/bonapp/post.jpg",
    hero: {
      title: "BonApp",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, labore?",
      image: "/images/bg/hero_test.jpg",
    },
    details: {
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt vitae temporibus assumenda...",
      highlights: ["Creative Design", "Responsive Layout", "Fast Performance"],
      services: ["Branding & Design", "Social Media", "Advertising"],
      websiteLink: null,
    },
    video: {
      videoSrc: null,
    },
    richtext: {
      title: "Lorem ipsum dolor sit amet consectetur.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet asperiores quae reiciendis...",
    },
    banner: {
      image: "/images/projects/bonapp/banner.jpg",
    },
    mockups: [
      { src: "/images/projects/bonapp/mockup.jpg", alt: "Mockup Image 1" },
      { src: "/images/projects/bonapp/mockup-2.jpg", alt: "Mockup Image 2" },
    ],
  },
  {
    id: "molhim",
    poster: "/images/projects/molhim/post.jpg",
    hero: {
      title: "Molhim Podcast",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, labore?",
      image: "/images/projects/molhim/hero-banner.jpg",
    },
    details: {
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt vitae temporibus assumenda...",
      highlights: ["Creative Design", "Responsive Layout"],
      services: ["Branding & Design", "Social Media", "Advertising"],
      websiteLink: null,
    },
    video: {
      videoSrc: "/images/projects/molhim/molhim-video.mp4",
    },
    richtext: {
      title: "Lorem ipsum dolor sit amet consectetur.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet asperiores quae reiciendis...",
    },
    banner: {
      image: null,
    },
    mockups: [
      { src: "/images/projects/molhim/mockup.jpg", alt: "Mockup Image 1" },
      { src: "/images/projects/molhim/mockup-3.jpg", alt: "Mockup Image 2" },
    ],
  },
  {
    id: "my-scarf",
    poster: "/images/projects/my-iscrfi/post.jpg",
    hero: {
      title: "My Scarf",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, labore?",
      image: "/images/projects/my-iscrfi/hero-banner.jpg",
    },
    details: {
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt vitae temporibus assumenda...",
      highlights: ["Creative Design", "Responsive Layout"],
      services: ["Branding & Design", "Social Media", "Advertising"],
      websiteLink: null,
    },
    video: {
      videoSrc: null,
    },
    richtext: {
      title: "Lorem ipsum dolor sit amet consectetur.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet asperiores quae reiciendis...",
    },
    banner: {
      image: "/images/projects/my-iscrfi/banner.jpg",
    },
    mockups: [
      { src: "/images/projects/my-iscrfi/mockup.jpg", alt: "Mockup Image 1" },
      { src: "/images/projects/my-iscrfi/mockup-2.jpg", alt: "Mockup Image 2" },
    ],
  },
  {
    id: "stretchedweb",
    poster: "/images/projects/stretchedweb/post.png",
    hero: {
      title: "Stretchedweb",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, labore?",
      image: "/images/projects/my-iscrfi/hero-banner.jpg",
    },
    details: {
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt vitae temporibus assumenda...",
      highlights: ["Creative Design", "Responsive Layout"],
      services: ["Branding & Design", "Social Media", "Advertising"],
      websiteLink: null,
    },
    video: {
      videoSrc: null,
    },
    richtext: {
      title: "Lorem ipsum dolor sit amet consectetur.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet asperiores quae reiciendis...",
    },
    banner: {
      image: "/images/projects/my-iscrfi/banner.jpg",
    },
    mockups: [
      { src: "/images/projects/my-iscrfi/mockup.jpg", alt: "Mockup Image 1" },
      { src: "/images/projects/my-iscrfi/mockup-2.jpg", alt: "Mockup Image 2" },
    ],
  },
  {
    id: "uit",
    poster: "/images/projects/UIT/post.png",
    hero: {
      title: "UIT",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, labore?",
      image: "/images/projects/my-iscrfi/hero-banner.jpg",
    },
    details: {
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt vitae temporibus assumenda...",
      highlights: ["Creative Design", "Responsive Layout"],
      services: ["Branding & Design", "Social Media", "Advertising"],
      websiteLink: null,
    },
    video: {
      videoSrc: null,
    },
    richtext: {
      title: "Lorem ipsum dolor sit amet consectetur.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet asperiores quae reiciendis...",
    },
    banner: {
      image: "/images/projects/my-iscrfi/banner.jpg",
    },
    mockups: [
      { src: "/images/projects/my-iscrfi/mockup.jpg", alt: "Mockup Image 1" },
      { src: "/images/projects/my-iscrfi/mockup-2.jpg", alt: "Mockup Image 2" },
    ],
  },
  {
    id: "van-log",
    poster: "/images/projects/van-log/post.png",
    hero: {
      title: "Van Log",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, labore?",
      image: "/images/projects/van-log/hero-banner.png",
    },
    details: {
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt vitae temporibus assumenda...",
      highlights: ["Creative Design", "Responsive Layout"],
      services: ["Branding & Design", "Social Media", "Advertising"],
      websiteLink: null,
    },
    video: {
      videoSrc: null,
    },
    richtext: {
      title: "Lorem ipsum dolor sit amet consectetur.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet asperiores quae reiciendis...",
    },
    banner: {
      image: "/images/projects/van-log/banner.png",
    },
    mockups: [
      { src: "/images/projects/van-log/mockup.png", alt: "Mockup Image 1" },
      { src: "/images/projects/van-log/mockup-2.png", alt: "Mockup Image 2" },
    ],
  },
  {
    id: "wafa-assurance",
    poster: "/images/projects/wafa-assurance/post.png",
    hero: {
      title: "Wafa Assurance",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, labore?",
      image: "/images/projects/wafa-assurance/hero-banner.png",
    },
    details: {
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt vitae temporibus assumenda...",
      highlights: ["Creative Design", "Responsive Layout"],
      services: ["Branding & Design", "Social Media", "Advertising"],
      websiteLink: null,
    },
    video: {
      videoSrc: null,
    },
    richtext: {
      title: "Lorem ipsum dolor sit amet consectetur.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet asperiores quae reiciendis...",
    },
    banner: {
      image: "/images/projects/wafa-assurance/banner.png",
    },
    mockups: [
      { src: "/images/projects/wafa-assurance/mockup.png", alt: "Mockup Image 1" },
      { src: "/images/projects/wafa-assurance/mockup-2.png", alt: "Mockup Image 2" },
    ],
  },
  {
    id: "rayan-immoblie",
    poster: "/images/projects/rayan/post.png",
    hero: {
      title: "Rayan Immoblie",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, labore?",
      image: "/images/projects/rayan/hero-banner.png",
    },
    details: {
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt vitae temporibus assumenda...",
      highlights: ["Creative Design", "Responsive Layout"],
      services: ["Branding & Design", "Social Media", "Advertising"],
      websiteLink: null,
    },
    video: {
      videoSrc: null,
    },
    richtext: {
      title: "Lorem ipsum dolor sit amet consectetur.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet asperiores quae reiciendis...",
    },
    banner: {
      image: "/images/projects/rayan/banner.png",
    },
    mockups: [
      { src: "/images/projects/rayan/mockup.png", alt: "Mockup Image 1" },
      { src: "/images/projects/rayan/mockup-2.png", alt: "Mockup Image 2" },
    ],
  },
];
export default projectsData;
