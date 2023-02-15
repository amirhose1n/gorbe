import { useRouter } from "next/router";
import Graffities from "../../src/components/pages/projects/graffities";
import Illustrators from "../../src/components/pages/projects/illustrators";

function Projects({ projects }: any) {
  const {
    query: { index },
  } = useRouter();

  const illustrators =
    projects &&
    projects.length > 0 &&
    projects.filter((project: any) => {
      return project.name.includes("- Illustration");
    });
  const graffities =
    projects &&
    projects.length > 0 &&
    projects.filter((project: any) => {
      return project.name.includes("- Graffiti");
    });

  if (index === "graffities") {
    return <Graffities data={graffities} />;
  }

  if (index === "illustrators") {
    return <Illustrators data={illustrators} />;
  }

  return new Error("Page not found !!!");
}

export async function getServerSideProps({ query: { index } }: any) {
  if (index !== "graffities" && index !== "illustrators") {
    return {
      props: {
        error: {
          statusCode: 404,
          message: "Page not found !!!",
        },
      },
    };
  }
  const data = {
    props: {
      data: {
        profile: {
          activeSection: {
            work: {
              isInitialized: true,
              projects: [
                {
                  id: 152480255,
                  name: "Pirate Gorbe - Illustration",
                  published_on: 1662991350,
                  created_on: 1662991310,
                  modified_on: 1671716321,
                  url: "https://www.behance.net/gallery/152480255/Pirate-Gorbe-Illustration",
                  slug: "Pirate-Gorbe-Illustration",
                  privacy: "public",
                  fields: [
                    {
                      id: 44,
                      name: "Graphic Design",
                      slug: "graphic-design",
                      url: "/search?field=44&content=projects",
                    },
                    {
                      id: 48,
                      name: "Illustration",
                      slug: "illustration",
                      url: "/search?field=48&content=projects",
                    },
                  ],
                  covers: {
                    "808":
                      "https://mir-s3-cdn-cf.behance.net/projects/808/5ddb05152480255.Y3JvcCwxNTAwLDExNzMsMCwxNjM.jpg",
                    "808_webp":
                      "https://mir-s3-cdn-cf.behance.net/projects/808_webp/5ddb05152480255.Y3JvcCwxNTAwLDExNzMsMCwxNjM.jpg",
                    "404":
                      "https://mir-s3-cdn-cf.behance.net/projects/404/5ddb05152480255.Y3JvcCwxNTAwLDExNzMsMCwxNjM.jpg",
                    "404_webp":
                      "https://mir-s3-cdn-cf.behance.net/projects/404_webp/5ddb05152480255.Y3JvcCwxNTAwLDExNzMsMCwxNjM.jpg",
                    "202":
                      "https://mir-s3-cdn-cf.behance.net/projects/202/5ddb05152480255.Y3JvcCwxNTAwLDExNzMsMCwxNjM.jpg",
                    "202_webp":
                      "https://mir-s3-cdn-cf.behance.net/projects/202_webp/5ddb05152480255.Y3JvcCwxNTAwLDExNzMsMCwxNjM.jpg",
                    "230":
                      "https://mir-s3-cdn-cf.behance.net/projects/230/5ddb05152480255.Y3JvcCwxNTAwLDExNzMsMCwxNjM.jpg",
                    "230_webp":
                      "https://mir-s3-cdn-cf.behance.net/projects/230_webp/5ddb05152480255.Y3JvcCwxNTAwLDExNzMsMCwxNjM.jpg",
                    "115":
                      "https://mir-s3-cdn-cf.behance.net/projects/115/5ddb05152480255.Y3JvcCwxNTAwLDExNzMsMCwxNjM.jpg",
                    "115_webp":
                      "https://mir-s3-cdn-cf.behance.net/projects/115_webp/5ddb05152480255.Y3JvcCwxNTAwLDExNzMsMCwxNjM.jpg",
                    original:
                      "https://mir-s3-cdn-cf.behance.net/projects/original/5ddb05152480255.Y3JvcCwxNTAwLDExNzMsMCwxNjM.jpg",
                    original_webp:
                      "https://mir-s3-cdn-cf.behance.net/projects/original_webp/5ddb05152480255.Y3JvcCwxNTAwLDExNzMsMCwxNjM.jpg",
                    max_808:
                      "https://mir-s3-cdn-cf.behance.net/projects/max_808/5ddb05152480255.Y3JvcCwxNTAwLDExNzMsMCwxNjM.jpg",
                    max_808_webp:
                      "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/5ddb05152480255.Y3JvcCwxNTAwLDExNzMsMCwxNjM.jpg",
                  },
                  mature_content: 0,
                  mature_access: "allowed",
                  owners: [
                    {
                      id: 972597015,
                      first_name: '" GORBE',
                      last_name: '"',
                      username: "Everythingbygorbe",
                      city: "Tehran",
                      state: "",
                      country: "Iran, Islamic Republic of",
                      location: "Tehran, Iran, Islamic Republic of",
                      company: "",
                      occupation: "ILLUSTRATOR - GRAFFITI ARTIST",
                      created_on: 1621795825,
                      url: "https://www.behance.net/Everythingbygorbe",
                      images: {
                        "50": "https://mir-s3-cdn-cf.behance.net/user/50/bc78a4972597015.6317938fde0c0.jpg",
                        "100":
                          "https://mir-s3-cdn-cf.behance.net/user/100/bc78a4972597015.6317938fde0c0.jpg",
                        "115":
                          "https://mir-s3-cdn-cf.behance.net/user/115/bc78a4972597015.6317938fde0c0.jpg",
                        "230":
                          "https://mir-s3-cdn-cf.behance.net/user/230/bc78a4972597015.6317938fde0c0.jpg",
                        "138":
                          "https://mir-s3-cdn-cf.behance.net/user/138/bc78a4972597015.6317938fde0c0.jpg",
                        "276":
                          "https://mir-s3-cdn-cf.behance.net/user/276/bc78a4972597015.6317938fde0c0.jpg",
                      },
                      display_name: '" GORBE "',
                      fields: [
                        "Illustration",
                        "Graphic Design",
                        "Character Design",
                      ],
                      has_default_image: 0,
                      website: "Everythingbygorbe.com",
                      banner_image_url:
                        "https://mir-s3-cdn-cf.behance.net/87a0c6104fd27444b55f084b536998d3/bba0951d-6211-43f4-8961-5bc72302ed32_rwc_408x0x2193x410x3200.jpg?h=0360d3d3125c2facbd90b618331095bd",
                      has_premium_access: false,
                      stats: {
                        followers: 9,
                        following: 13,
                        comments: 4,
                        appreciations: 33,
                        views: 269,
                      },
                      user_fields: [
                        { url: "/search?field=48", name: "Illustration" },
                        { url: "/search?field=44", name: "Graphic Design" },
                        { url: "/search?field=124", name: "Character Design" },
                      ],
                      is_profile_owner: false,
                      is_subscription_creator: false,
                      is_following: 0,
                    },
                  ],
                  stats: { views: 7, appreciations: 1, comments: 0 },
                  conceived_on: 1662940800,
                  premium: 0,
                  linked_asset_count: 0,
                  linked_assets: [],
                  colors: [{ r: 26, g: 25, b: 25 }],
                  is_editable: false,
                  share_url:
                    "https://www.behance.net/gallery/152480255/Pirate-Gorbe-Illustration?share=1",
                  field_links: [
                    {
                      url: "/search?field=44&content=projects",
                      name: "Graphic Design",
                      separate: true,
                    },
                    {
                      url: "/search?field=48&content=projects",
                      name: "Illustration",
                    },
                  ],
                  multiple_owners: false,
                  modified_date: "Dec 22, 2022",
                  featured_on: null,
                  private: false,
                },
                {
                  id: 152480079,
                  name: "Gorbe in Toxic Suit! - Graffiti",
                  published_on: 1662991248,
                  created_on: 1662991175,
                  modified_on: 1670586063,
                  url: "https://www.behance.net/gallery/152480079/Gorbe-in-Toxic-Suit-Graffiti",
                  slug: "Gorbe-in-Toxic-Suit-Graffiti",
                  privacy: "public",
                  fields: [
                    {
                      id: 44,
                      name: "Graphic Design",
                      slug: "graphic-design",
                      url: "/search?field=44&content=projects",
                    },
                    {
                      id: 48,
                      name: "Illustration",
                      slug: "illustration",
                      url: "/search?field=48&content=projects",
                    },
                  ],
                  covers: {
                    "808":
                      "https://mir-s3-cdn-cf.behance.net/projects/808/d4d940152480079.Y3JvcCw1MDIwLDM5MjYsMCwyNA.jpg",
                    "808_webp":
                      "https://mir-s3-cdn-cf.behance.net/projects/808_webp/d4d940152480079.Y3JvcCw1MDIwLDM5MjYsMCwyNA.jpg",
                    "404":
                      "https://mir-s3-cdn-cf.behance.net/projects/404/d4d940152480079.Y3JvcCw1MDIwLDM5MjYsMCwyNA.jpg",
                    "404_webp":
                      "https://mir-s3-cdn-cf.behance.net/projects/404_webp/d4d940152480079.Y3JvcCw1MDIwLDM5MjYsMCwyNA.jpg",
                    "202":
                      "https://mir-s3-cdn-cf.behance.net/projects/202/d4d940152480079.Y3JvcCw1MDIwLDM5MjYsMCwyNA.jpg",
                    "202_webp":
                      "https://mir-s3-cdn-cf.behance.net/projects/202_webp/d4d940152480079.Y3JvcCw1MDIwLDM5MjYsMCwyNA.jpg",
                    "230":
                      "https://mir-s3-cdn-cf.behance.net/projects/230/d4d940152480079.Y3JvcCw1MDIwLDM5MjYsMCwyNA.jpg",
                    "230_webp":
                      "https://mir-s3-cdn-cf.behance.net/projects/230_webp/d4d940152480079.Y3JvcCw1MDIwLDM5MjYsMCwyNA.jpg",
                    "115":
                      "https://mir-s3-cdn-cf.behance.net/projects/115/d4d940152480079.Y3JvcCw1MDIwLDM5MjYsMCwyNA.jpg",
                    "115_webp":
                      "https://mir-s3-cdn-cf.behance.net/projects/115_webp/d4d940152480079.Y3JvcCw1MDIwLDM5MjYsMCwyNA.jpg",
                    original:
                      "https://mir-s3-cdn-cf.behance.net/projects/original/d4d940152480079.Y3JvcCw1MDIwLDM5MjYsMCwyNA.jpg",
                    original_webp:
                      "https://mir-s3-cdn-cf.behance.net/projects/original_webp/d4d940152480079.Y3JvcCw1MDIwLDM5MjYsMCwyNA.jpg",
                    max_808:
                      "https://mir-s3-cdn-cf.behance.net/projects/max_808/d4d940152480079.Y3JvcCw1MDIwLDM5MjYsMCwyNA.jpg",
                    max_808_webp:
                      "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/d4d940152480079.Y3JvcCw1MDIwLDM5MjYsMCwyNA.jpg",
                  },
                  mature_content: 0,
                  mature_access: "allowed",
                  owners: [
                    {
                      id: 972597015,
                      first_name: '" GORBE',
                      last_name: '"',
                      username: "Everythingbygorbe",
                      city: "Tehran",
                      state: "",
                      country: "Iran, Islamic Republic of",
                      location: "Tehran, Iran, Islamic Republic of",
                      company: "",
                      occupation: "ILLUSTRATOR - GRAFFITI ARTIST",
                      created_on: 1621795825,
                      url: "https://www.behance.net/Everythingbygorbe",
                      images: {
                        "50": "https://mir-s3-cdn-cf.behance.net/user/50/bc78a4972597015.6317938fde0c0.jpg",
                        "100":
                          "https://mir-s3-cdn-cf.behance.net/user/100/bc78a4972597015.6317938fde0c0.jpg",
                        "115":
                          "https://mir-s3-cdn-cf.behance.net/user/115/bc78a4972597015.6317938fde0c0.jpg",
                        "230":
                          "https://mir-s3-cdn-cf.behance.net/user/230/bc78a4972597015.6317938fde0c0.jpg",
                        "138":
                          "https://mir-s3-cdn-cf.behance.net/user/138/bc78a4972597015.6317938fde0c0.jpg",
                        "276":
                          "https://mir-s3-cdn-cf.behance.net/user/276/bc78a4972597015.6317938fde0c0.jpg",
                      },
                      display_name: '" GORBE "',
                      fields: [
                        "Illustration",
                        "Graphic Design",
                        "Character Design",
                      ],
                      has_default_image: 0,
                      website: "Everythingbygorbe.com",
                      banner_image_url:
                        "https://mir-s3-cdn-cf.behance.net/87a0c6104fd27444b55f084b536998d3/bba0951d-6211-43f4-8961-5bc72302ed32_rwc_408x0x2193x410x3200.jpg?h=0360d3d3125c2facbd90b618331095bd",
                      has_premium_access: false,
                      stats: {
                        followers: 9,
                        following: 13,
                        comments: 4,
                        appreciations: 33,
                        views: 269,
                      },
                      user_fields: [
                        { url: "/search?field=48", name: "Illustration" },
                        { url: "/search?field=44", name: "Graphic Design" },
                        { url: "/search?field=124", name: "Character Design" },
                      ],
                      is_profile_owner: false,
                      is_subscription_creator: false,
                      is_following: 0,
                    },
                  ],
                  stats: { views: 6, appreciations: 2, comments: 0 },
                  conceived_on: 1662940800,
                  premium: 0,
                  linked_asset_count: 0,
                  linked_assets: [],
                  colors: [{ r: 198, g: 195, b: 191 }],
                  is_editable: false,
                  share_url:
                    "https://www.behance.net/gallery/152480079/Gorbe-in-Toxic-Suit-Graffiti?share=1",
                  field_links: [
                    {
                      url: "/search?field=44&content=projects",
                      name: "Graphic Design",
                      separate: true,
                    },
                    {
                      url: "/search?field=48&content=projects",
                      name: "Illustration",
                    },
                  ],
                  multiple_owners: false,
                  modified_date: "Dec 9, 2022",
                  featured_on: null,
                  private: false,
                },
                {
                  id: 152479723,
                  name: "Omid Behrouzian Logo - Illustration",
                  published_on: 1662991030,
                  created_on: 1662990898,
                  modified_on: 1671716532,
                  url: "https://www.behance.net/gallery/152479723/Omid-Behrouzian-Logo-Illustration",
                  slug: "Omid-Behrouzian-Logo-Illustration",
                  privacy: "public",
                  fields: [
                    {
                      id: 44,
                      name: "Graphic Design",
                      slug: "graphic-design",
                      url: "/search?field=44&content=projects",
                    },
                    {
                      id: 48,
                      name: "Illustration",
                      slug: "illustration",
                      url: "/search?field=48&content=projects",
                    },
                  ],
                  covers: {
                    "808":
                      "https://mir-s3-cdn-cf.behance.net/projects/808/dc7354152479723.Y3JvcCwzMzY3LDI2MzQsMjA4LDA.jpg",
                    "808_webp":
                      "https://mir-s3-cdn-cf.behance.net/projects/808_webp/dc7354152479723.Y3JvcCwzMzY3LDI2MzQsMjA4LDA.jpg",
                    "404":
                      "https://mir-s3-cdn-cf.behance.net/projects/404/dc7354152479723.Y3JvcCwzMzY3LDI2MzQsMjA4LDA.jpg",
                    "404_webp":
                      "https://mir-s3-cdn-cf.behance.net/projects/404_webp/dc7354152479723.Y3JvcCwzMzY3LDI2MzQsMjA4LDA.jpg",
                    "202":
                      "https://mir-s3-cdn-cf.behance.net/projects/202/dc7354152479723.Y3JvcCwzMzY3LDI2MzQsMjA4LDA.jpg",
                    "202_webp":
                      "https://mir-s3-cdn-cf.behance.net/projects/202_webp/dc7354152479723.Y3JvcCwzMzY3LDI2MzQsMjA4LDA.jpg",
                    "230":
                      "https://mir-s3-cdn-cf.behance.net/projects/230/dc7354152479723.Y3JvcCwzMzY3LDI2MzQsMjA4LDA.jpg",
                    "230_webp":
                      "https://mir-s3-cdn-cf.behance.net/projects/230_webp/dc7354152479723.Y3JvcCwzMzY3LDI2MzQsMjA4LDA.jpg",
                    "115":
                      "https://mir-s3-cdn-cf.behance.net/projects/115/dc7354152479723.Y3JvcCwzMzY3LDI2MzQsMjA4LDA.jpg",
                    "115_webp":
                      "https://mir-s3-cdn-cf.behance.net/projects/115_webp/dc7354152479723.Y3JvcCwzMzY3LDI2MzQsMjA4LDA.jpg",
                    original:
                      "https://mir-s3-cdn-cf.behance.net/projects/original/dc7354152479723.Y3JvcCwzMzY3LDI2MzQsMjA4LDA.jpg",
                    original_webp:
                      "https://mir-s3-cdn-cf.behance.net/projects/original_webp/dc7354152479723.Y3JvcCwzMzY3LDI2MzQsMjA4LDA.jpg",
                    max_808:
                      "https://mir-s3-cdn-cf.behance.net/projects/max_808/dc7354152479723.Y3JvcCwzMzY3LDI2MzQsMjA4LDA.jpg",
                    max_808_webp:
                      "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/dc7354152479723.Y3JvcCwzMzY3LDI2MzQsMjA4LDA.jpg",
                  },
                  mature_content: 0,
                  mature_access: "allowed",
                  owners: [
                    {
                      id: 972597015,
                      first_name: '" GORBE',
                      last_name: '"',
                      username: "Everythingbygorbe",
                      city: "Tehran",
                      state: "",
                      country: "Iran, Islamic Republic of",
                      location: "Tehran, Iran, Islamic Republic of",
                      company: "",
                      occupation: "ILLUSTRATOR - GRAFFITI ARTIST",
                      created_on: 1621795825,
                      url: "https://www.behance.net/Everythingbygorbe",
                      images: {
                        "50": "https://mir-s3-cdn-cf.behance.net/user/50/bc78a4972597015.6317938fde0c0.jpg",
                        "100":
                          "https://mir-s3-cdn-cf.behance.net/user/100/bc78a4972597015.6317938fde0c0.jpg",
                        "115":
                          "https://mir-s3-cdn-cf.behance.net/user/115/bc78a4972597015.6317938fde0c0.jpg",
                        "230":
                          "https://mir-s3-cdn-cf.behance.net/user/230/bc78a4972597015.6317938fde0c0.jpg",
                        "138":
                          "https://mir-s3-cdn-cf.behance.net/user/138/bc78a4972597015.6317938fde0c0.jpg",
                        "276":
                          "https://mir-s3-cdn-cf.behance.net/user/276/bc78a4972597015.6317938fde0c0.jpg",
                      },
                      display_name: '" GORBE "',
                      fields: [
                        "Illustration",
                        "Graphic Design",
                        "Character Design",
                      ],
                      has_default_image: 0,
                      website: "Everythingbygorbe.com",
                      banner_image_url:
                        "https://mir-s3-cdn-cf.behance.net/87a0c6104fd27444b55f084b536998d3/bba0951d-6211-43f4-8961-5bc72302ed32_rwc_408x0x2193x410x3200.jpg?h=0360d3d3125c2facbd90b618331095bd",
                      has_premium_access: false,
                      stats: {
                        followers: 9,
                        following: 13,
                        comments: 4,
                        appreciations: 33,
                        views: 269,
                      },
                      user_fields: [
                        { url: "/search?field=48", name: "Illustration" },
                        { url: "/search?field=44", name: "Graphic Design" },
                        { url: "/search?field=124", name: "Character Design" },
                      ],
                      is_profile_owner: false,
                      is_subscription_creator: false,
                      is_following: 0,
                    },
                  ],
                  stats: { views: 13, appreciations: 2, comments: 0 },
                  conceived_on: 1662940800,
                  premium: 0,
                  linked_asset_count: 0,
                  linked_assets: [],
                  colors: [{ r: 13, g: 9, b: 9 }],
                  is_editable: false,
                  share_url:
                    "https://www.behance.net/gallery/152479723/Omid-Behrouzian-Logo-Illustration?share=1",
                  field_links: [
                    {
                      url: "/search?field=44&content=projects",
                      name: "Graphic Design",
                      separate: true,
                    },
                    {
                      url: "/search?field=48&content=projects",
                      name: "Illustration",
                    },
                  ],
                  multiple_owners: false,
                  modified_date: "Dec 22, 2022",
                  featured_on: null,
                  private: false,
                },
                {
                  id: 152479617,
                  name: "Concrete Hero - Graffiti",
                  published_on: 1662990822,
                  created_on: 1662990807,
                  modified_on: 1670530676,
                  url: "https://www.behance.net/gallery/152479617/Concrete-Hero-Graffiti",
                  slug: "Concrete-Hero-Graffiti",
                  privacy: "public",
                  fields: [
                    {
                      id: 44,
                      name: "Graphic Design",
                      slug: "graphic-design",
                      url: "/search?field=44&content=projects",
                    },
                    {
                      id: 48,
                      name: "Illustration",
                      slug: "illustration",
                      url: "/search?field=48&content=projects",
                    },
                  ],
                  covers: {
                    "808":
                      "https://mir-s3-cdn-cf.behance.net/projects/808/3ba14f152479617.Y3JvcCwzODY2LDMwMjQsODYsMA.jpg",
                    "808_webp":
                      "https://mir-s3-cdn-cf.behance.net/projects/808_webp/3ba14f152479617.Y3JvcCwzODY2LDMwMjQsODYsMA.jpg",
                    "404":
                      "https://mir-s3-cdn-cf.behance.net/projects/404/3ba14f152479617.Y3JvcCwzODY2LDMwMjQsODYsMA.jpg",
                    "404_webp":
                      "https://mir-s3-cdn-cf.behance.net/projects/404_webp/3ba14f152479617.Y3JvcCwzODY2LDMwMjQsODYsMA.jpg",
                    "202":
                      "https://mir-s3-cdn-cf.behance.net/projects/202/3ba14f152479617.Y3JvcCwzODY2LDMwMjQsODYsMA.jpg",
                    "202_webp":
                      "https://mir-s3-cdn-cf.behance.net/projects/202_webp/3ba14f152479617.Y3JvcCwzODY2LDMwMjQsODYsMA.jpg",
                    "230":
                      "https://mir-s3-cdn-cf.behance.net/projects/230/3ba14f152479617.Y3JvcCwzODY2LDMwMjQsODYsMA.jpg",
                    "230_webp":
                      "https://mir-s3-cdn-cf.behance.net/projects/230_webp/3ba14f152479617.Y3JvcCwzODY2LDMwMjQsODYsMA.jpg",
                    "115":
                      "https://mir-s3-cdn-cf.behance.net/projects/115/3ba14f152479617.Y3JvcCwzODY2LDMwMjQsODYsMA.jpg",
                    "115_webp":
                      "https://mir-s3-cdn-cf.behance.net/projects/115_webp/3ba14f152479617.Y3JvcCwzODY2LDMwMjQsODYsMA.jpg",
                    original:
                      "https://mir-s3-cdn-cf.behance.net/projects/original/3ba14f152479617.Y3JvcCwzODY2LDMwMjQsODYsMA.jpg",
                    original_webp:
                      "https://mir-s3-cdn-cf.behance.net/projects/original_webp/3ba14f152479617.Y3JvcCwzODY2LDMwMjQsODYsMA.jpg",
                    max_808:
                      "https://mir-s3-cdn-cf.behance.net/projects/max_808/3ba14f152479617.Y3JvcCwzODY2LDMwMjQsODYsMA.jpg",
                    max_808_webp:
                      "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/3ba14f152479617.Y3JvcCwzODY2LDMwMjQsODYsMA.jpg",
                  },
                  mature_content: 0,
                  mature_access: "allowed",
                  owners: [
                    {
                      id: 972597015,
                      first_name: '" GORBE',
                      last_name: '"',
                      username: "Everythingbygorbe",
                      city: "Tehran",
                      state: "",
                      country: "Iran, Islamic Republic of",
                      location: "Tehran, Iran, Islamic Republic of",
                      company: "",
                      occupation: "ILLUSTRATOR - GRAFFITI ARTIST",
                      created_on: 1621795825,
                      url: "https://www.behance.net/Everythingbygorbe",
                      images: {
                        "50": "https://mir-s3-cdn-cf.behance.net/user/50/bc78a4972597015.6317938fde0c0.jpg",
                        "100":
                          "https://mir-s3-cdn-cf.behance.net/user/100/bc78a4972597015.6317938fde0c0.jpg",
                        "115":
                          "https://mir-s3-cdn-cf.behance.net/user/115/bc78a4972597015.6317938fde0c0.jpg",
                        "230":
                          "https://mir-s3-cdn-cf.behance.net/user/230/bc78a4972597015.6317938fde0c0.jpg",
                        "138":
                          "https://mir-s3-cdn-cf.behance.net/user/138/bc78a4972597015.6317938fde0c0.jpg",
                        "276":
                          "https://mir-s3-cdn-cf.behance.net/user/276/bc78a4972597015.6317938fde0c0.jpg",
                      },
                      display_name: '" GORBE "',
                      fields: [
                        "Illustration",
                        "Graphic Design",
                        "Character Design",
                      ],
                      has_default_image: 0,
                      website: "Everythingbygorbe.com",
                      banner_image_url:
                        "https://mir-s3-cdn-cf.behance.net/87a0c6104fd27444b55f084b536998d3/bba0951d-6211-43f4-8961-5bc72302ed32_rwc_408x0x2193x410x3200.jpg?h=0360d3d3125c2facbd90b618331095bd",
                      has_premium_access: false,
                      stats: {
                        followers: 9,
                        following: 13,
                        comments: 4,
                        appreciations: 33,
                        views: 269,
                      },
                      user_fields: [
                        { url: "/search?field=48", name: "Illustration" },
                        { url: "/search?field=44", name: "Graphic Design" },
                        { url: "/search?field=124", name: "Character Design" },
                      ],
                      is_profile_owner: false,
                      is_subscription_creator: false,
                      is_following: 0,
                    },
                  ],
                  stats: { views: 11, appreciations: 2, comments: 0 },
                  conceived_on: 1662940800,
                  premium: 0,
                  linked_asset_count: 0,
                  linked_assets: [],
                  colors: [{ r: 53, g: 53, b: 53 }],
                  is_editable: false,
                  share_url:
                    "https://www.behance.net/gallery/152479617/Concrete-Hero-Graffiti?share=1",
                  field_links: [
                    {
                      url: "/search?field=44&content=projects",
                      name: "Graphic Design",
                      separate: true,
                    },
                    {
                      url: "/search?field=48&content=projects",
                      name: "Illustration",
                    },
                  ],
                  multiple_owners: false,
                  modified_date: "Dec 8, 2022",
                  featured_on: null,
                  private: false,
                },
                {
                  id: 152475477,
                  name: "Psybet - Illustration",
                  published_on: 1662987921,
                  created_on: 1662987902,
                  modified_on: 1670361949,
                  url: "https://www.behance.net/gallery/152475477/Psybet-Illustration",
                  slug: "Psybet-Illustration",
                  privacy: "public",
                  fields: [
                    {
                      id: 48,
                      name: "Illustration",
                      slug: "illustration",
                      url: "/search?field=48&content=projects",
                    },
                    {
                      id: 44,
                      name: "Graphic Design",
                      slug: "graphic-design",
                      url: "/search?field=44&content=projects",
                    },
                  ],
                  covers: {
                    "808":
                      "https://mir-s3-cdn-cf.behance.net/projects/808/668586152475477.Y3JvcCwyNTQ0LDE5OTAsNDU5LDA.jpg",
                    "808_webp":
                      "https://mir-s3-cdn-cf.behance.net/projects/808_webp/668586152475477.Y3JvcCwyNTQ0LDE5OTAsNDU5LDA.jpg",
                    "404":
                      "https://mir-s3-cdn-cf.behance.net/projects/404/668586152475477.Y3JvcCwyNTQ0LDE5OTAsNDU5LDA.jpg",
                    "404_webp":
                      "https://mir-s3-cdn-cf.behance.net/projects/404_webp/668586152475477.Y3JvcCwyNTQ0LDE5OTAsNDU5LDA.jpg",
                    "202":
                      "https://mir-s3-cdn-cf.behance.net/projects/202/668586152475477.Y3JvcCwyNTQ0LDE5OTAsNDU5LDA.jpg",
                    "202_webp":
                      "https://mir-s3-cdn-cf.behance.net/projects/202_webp/668586152475477.Y3JvcCwyNTQ0LDE5OTAsNDU5LDA.jpg",
                    "230":
                      "https://mir-s3-cdn-cf.behance.net/projects/230/668586152475477.Y3JvcCwyNTQ0LDE5OTAsNDU5LDA.jpg",
                    "230_webp":
                      "https://mir-s3-cdn-cf.behance.net/projects/230_webp/668586152475477.Y3JvcCwyNTQ0LDE5OTAsNDU5LDA.jpg",
                    "115":
                      "https://mir-s3-cdn-cf.behance.net/projects/115/668586152475477.Y3JvcCwyNTQ0LDE5OTAsNDU5LDA.jpg",
                    "115_webp":
                      "https://mir-s3-cdn-cf.behance.net/projects/115_webp/668586152475477.Y3JvcCwyNTQ0LDE5OTAsNDU5LDA.jpg",
                    original:
                      "https://mir-s3-cdn-cf.behance.net/projects/original/668586152475477.Y3JvcCwyNTQ0LDE5OTAsNDU5LDA.jpg",
                    original_webp:
                      "https://mir-s3-cdn-cf.behance.net/projects/original_webp/668586152475477.Y3JvcCwyNTQ0LDE5OTAsNDU5LDA.jpg",
                    max_808:
                      "https://mir-s3-cdn-cf.behance.net/projects/max_808/668586152475477.Y3JvcCwyNTQ0LDE5OTAsNDU5LDA.jpg",
                    max_808_webp:
                      "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/668586152475477.Y3JvcCwyNTQ0LDE5OTAsNDU5LDA.jpg",
                  },
                  mature_content: 0,
                  mature_access: "allowed",
                  owners: [
                    {
                      id: 972597015,
                      first_name: '" GORBE',
                      last_name: '"',
                      username: "Everythingbygorbe",
                      city: "Tehran",
                      state: "",
                      country: "Iran, Islamic Republic of",
                      location: "Tehran, Iran, Islamic Republic of",
                      company: "",
                      occupation: "ILLUSTRATOR - GRAFFITI ARTIST",
                      created_on: 1621795825,
                      url: "https://www.behance.net/Everythingbygorbe",
                      images: {
                        "50": "https://mir-s3-cdn-cf.behance.net/user/50/bc78a4972597015.6317938fde0c0.jpg",
                        "100":
                          "https://mir-s3-cdn-cf.behance.net/user/100/bc78a4972597015.6317938fde0c0.jpg",
                        "115":
                          "https://mir-s3-cdn-cf.behance.net/user/115/bc78a4972597015.6317938fde0c0.jpg",
                        "230":
                          "https://mir-s3-cdn-cf.behance.net/user/230/bc78a4972597015.6317938fde0c0.jpg",
                        "138":
                          "https://mir-s3-cdn-cf.behance.net/user/138/bc78a4972597015.6317938fde0c0.jpg",
                        "276":
                          "https://mir-s3-cdn-cf.behance.net/user/276/bc78a4972597015.6317938fde0c0.jpg",
                      },
                      display_name: '" GORBE "',
                      fields: [
                        "Illustration",
                        "Graphic Design",
                        "Character Design",
                      ],
                      has_default_image: 0,
                      website: "Everythingbygorbe.com",
                      banner_image_url:
                        "https://mir-s3-cdn-cf.behance.net/87a0c6104fd27444b55f084b536998d3/bba0951d-6211-43f4-8961-5bc72302ed32_rwc_408x0x2193x410x3200.jpg?h=0360d3d3125c2facbd90b618331095bd",
                      has_premium_access: false,
                      stats: {
                        followers: 9,
                        following: 13,
                        comments: 4,
                        appreciations: 33,
                        views: 269,
                      },
                      user_fields: [
                        { url: "/search?field=48", name: "Illustration" },
                        { url: "/search?field=44", name: "Graphic Design" },
                        { url: "/search?field=124", name: "Character Design" },
                      ],
                      is_profile_owner: false,
                      is_subscription_creator: false,
                      is_following: 0,
                    },
                  ],
                  stats: { views: 8, appreciations: 1, comments: 0 },
                  conceived_on: 1662940800,
                  premium: 0,
                  linked_asset_count: 0,
                  linked_assets: [],
                  colors: [{ r: 1, g: 90, b: 39 }],
                  is_editable: false,
                  share_url:
                    "https://www.behance.net/gallery/152475477/Psybet-Illustration?share=1",
                  field_links: [
                    {
                      url: "/search?field=48&content=projects",
                      name: "Illustration",
                      separate: true,
                    },
                    {
                      url: "/search?field=44&content=projects",
                      name: "Graphic Design",
                    },
                  ],
                  multiple_owners: false,
                  modified_date: "Dec 6, 2022",
                  featured_on: null,
                  private: false,
                },
                {
                  id: 152083833,
                  name: "Kashan Pollution Graffiti event - Graffiti",
                  published_on: 1662493446,
                  created_on: 1662493383,
                  modified_on: 1670362106,
                  url: "https://www.behance.net/gallery/152083833/Kashan-Pollution-Graffiti-event-Graffiti",
                  slug: "Kashan-Pollution-Graffiti-event-Graffiti",
                  privacy: "public",
                  fields: [
                    {
                      id: 124,
                      name: "Character Design",
                      slug: "character-design",
                      url: "/search?field=124&content=projects",
                    },
                    {
                      id: 43,
                      name: "Graffiti",
                      slug: "graffiti",
                      url: "/search?field=43&content=projects",
                    },
                    {
                      id: 48,
                      name: "Illustration",
                      slug: "illustration",
                      url: "/search?field=48&content=projects",
                    },
                  ],
                  covers: {
                    "808":
                      "https://mir-s3-cdn-cf.behance.net/projects/808/a04579152083833.Y3JvcCwyMzQwLDE4MzAsNTE1LDU0NA.jpg",
                    "808_webp":
                      "https://mir-s3-cdn-cf.behance.net/projects/808_webp/a04579152083833.Y3JvcCwyMzQwLDE4MzAsNTE1LDU0NA.jpg",
                    "404":
                      "https://mir-s3-cdn-cf.behance.net/projects/404/a04579152083833.Y3JvcCwyMzQwLDE4MzAsNTE1LDU0NA.jpg",
                    "404_webp":
                      "https://mir-s3-cdn-cf.behance.net/projects/404_webp/a04579152083833.Y3JvcCwyMzQwLDE4MzAsNTE1LDU0NA.jpg",
                    "202":
                      "https://mir-s3-cdn-cf.behance.net/projects/202/a04579152083833.Y3JvcCwyMzQwLDE4MzAsNTE1LDU0NA.jpg",
                    "202_webp":
                      "https://mir-s3-cdn-cf.behance.net/projects/202_webp/a04579152083833.Y3JvcCwyMzQwLDE4MzAsNTE1LDU0NA.jpg",
                    "230":
                      "https://mir-s3-cdn-cf.behance.net/projects/230/a04579152083833.Y3JvcCwyMzQwLDE4MzAsNTE1LDU0NA.jpg",
                    "230_webp":
                      "https://mir-s3-cdn-cf.behance.net/projects/230_webp/a04579152083833.Y3JvcCwyMzQwLDE4MzAsNTE1LDU0NA.jpg",
                    "115":
                      "https://mir-s3-cdn-cf.behance.net/projects/115/a04579152083833.Y3JvcCwyMzQwLDE4MzAsNTE1LDU0NA.jpg",
                    "115_webp":
                      "https://mir-s3-cdn-cf.behance.net/projects/115_webp/a04579152083833.Y3JvcCwyMzQwLDE4MzAsNTE1LDU0NA.jpg",
                    original:
                      "https://mir-s3-cdn-cf.behance.net/projects/original/a04579152083833.Y3JvcCwyMzQwLDE4MzAsNTE1LDU0NA.jpg",
                    original_webp:
                      "https://mir-s3-cdn-cf.behance.net/projects/original_webp/a04579152083833.Y3JvcCwyMzQwLDE4MzAsNTE1LDU0NA.jpg",
                    max_808:
                      "https://mir-s3-cdn-cf.behance.net/projects/max_808/a04579152083833.Y3JvcCwyMzQwLDE4MzAsNTE1LDU0NA.jpg",
                    max_808_webp:
                      "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/a04579152083833.Y3JvcCwyMzQwLDE4MzAsNTE1LDU0NA.jpg",
                  },
                  mature_content: 0,
                  mature_access: "allowed",
                  owners: [
                    {
                      id: 972597015,
                      first_name: '" GORBE',
                      last_name: '"',
                      username: "Everythingbygorbe",
                      city: "Tehran",
                      state: "",
                      country: "Iran, Islamic Republic of",
                      location: "Tehran, Iran, Islamic Republic of",
                      company: "",
                      occupation: "ILLUSTRATOR - GRAFFITI ARTIST",
                      created_on: 1621795825,
                      url: "https://www.behance.net/Everythingbygorbe",
                      images: {
                        "50": "https://mir-s3-cdn-cf.behance.net/user/50/bc78a4972597015.6317938fde0c0.jpg",
                        "100":
                          "https://mir-s3-cdn-cf.behance.net/user/100/bc78a4972597015.6317938fde0c0.jpg",
                        "115":
                          "https://mir-s3-cdn-cf.behance.net/user/115/bc78a4972597015.6317938fde0c0.jpg",
                        "230":
                          "https://mir-s3-cdn-cf.behance.net/user/230/bc78a4972597015.6317938fde0c0.jpg",
                        "138":
                          "https://mir-s3-cdn-cf.behance.net/user/138/bc78a4972597015.6317938fde0c0.jpg",
                        "276":
                          "https://mir-s3-cdn-cf.behance.net/user/276/bc78a4972597015.6317938fde0c0.jpg",
                      },
                      display_name: '" GORBE "',
                      fields: [
                        "Illustration",
                        "Graphic Design",
                        "Character Design",
                      ],
                      has_default_image: 0,
                      website: "Everythingbygorbe.com",
                      banner_image_url:
                        "https://mir-s3-cdn-cf.behance.net/87a0c6104fd27444b55f084b536998d3/bba0951d-6211-43f4-8961-5bc72302ed32_rwc_408x0x2193x410x3200.jpg?h=0360d3d3125c2facbd90b618331095bd",
                      has_premium_access: false,
                      stats: {
                        followers: 9,
                        following: 13,
                        comments: 4,
                        appreciations: 33,
                        views: 269,
                      },
                      user_fields: [
                        { url: "/search?field=48", name: "Illustration" },
                        { url: "/search?field=44", name: "Graphic Design" },
                        { url: "/search?field=124", name: "Character Design" },
                      ],
                      is_profile_owner: false,
                      is_subscription_creator: false,
                      is_following: 0,
                    },
                  ],
                  stats: { views: 10, appreciations: 1, comments: 0 },
                  conceived_on: 1662422400,
                  premium: 0,
                  linked_asset_count: 0,
                  linked_assets: [],
                  colors: [{ r: 160, g: 86, b: 11 }],
                  is_editable: false,
                  share_url:
                    "https://www.behance.net/gallery/152083833/Kashan-Pollution-Graffiti-event-Graffiti?share=1",
                  field_links: [
                    {
                      url: "/search?field=124&content=projects",
                      name: "Character Design",
                      separate: true,
                    },
                    {
                      url: "/search?field=43&content=projects",
                      name: "Graffiti",
                      separate: true,
                    },
                    {
                      url: "/search?field=48&content=projects",
                      name: "Illustration",
                    },
                  ],
                  multiple_owners: false,
                  modified_date: "Dec 6, 2022",
                  featured_on: null,
                  private: false,
                },
                {
                  id: 131507797,
                  name: "DMD Character - Illustration",
                  published_on: 1637237384,
                  created_on: 1637237271,
                  modified_on: 1671716656,
                  url: "https://www.behance.net/gallery/131507797/DMD-Character-Illustration",
                  slug: "DMD-Character-Illustration",
                  privacy: "public",
                  fields: [
                    {
                      id: 48,
                      name: "Illustration",
                      slug: "illustration",
                      url: "/search?field=48&content=projects",
                    },
                    {
                      id: 44,
                      name: "Graphic Design",
                      slug: "graphic-design",
                      url: "/search?field=44&content=projects",
                    },
                    {
                      id: 108,
                      name: "Advertising",
                      slug: "advertising",
                      url: "/search?field=108&content=projects",
                    },
                  ],
                  covers: {
                    "808":
                      "https://mir-s3-cdn-cf.behance.net/projects/808/bc63aa131507797.Y3JvcCwyMTQzLDE2NzYsNzAwLDIzOA.jpg",
                    "808_webp":
                      "https://mir-s3-cdn-cf.behance.net/projects/808_webp/bc63aa131507797.Y3JvcCwyMTQzLDE2NzYsNzAwLDIzOA.jpg",
                    "404":
                      "https://mir-s3-cdn-cf.behance.net/projects/404/bc63aa131507797.Y3JvcCwyMTQzLDE2NzYsNzAwLDIzOA.jpg",
                    "404_webp":
                      "https://mir-s3-cdn-cf.behance.net/projects/404_webp/bc63aa131507797.Y3JvcCwyMTQzLDE2NzYsNzAwLDIzOA.jpg",
                    "202":
                      "https://mir-s3-cdn-cf.behance.net/projects/202/bc63aa131507797.Y3JvcCwyMTQzLDE2NzYsNzAwLDIzOA.jpg",
                    "202_webp":
                      "https://mir-s3-cdn-cf.behance.net/projects/202_webp/bc63aa131507797.Y3JvcCwyMTQzLDE2NzYsNzAwLDIzOA.jpg",
                    "230":
                      "https://mir-s3-cdn-cf.behance.net/projects/230/bc63aa131507797.Y3JvcCwyMTQzLDE2NzYsNzAwLDIzOA.jpg",
                    "230_webp":
                      "https://mir-s3-cdn-cf.behance.net/projects/230_webp/bc63aa131507797.Y3JvcCwyMTQzLDE2NzYsNzAwLDIzOA.jpg",
                    "115":
                      "https://mir-s3-cdn-cf.behance.net/projects/115/bc63aa131507797.Y3JvcCwyMTQzLDE2NzYsNzAwLDIzOA.jpg",
                    "115_webp":
                      "https://mir-s3-cdn-cf.behance.net/projects/115_webp/bc63aa131507797.Y3JvcCwyMTQzLDE2NzYsNzAwLDIzOA.jpg",
                    original:
                      "https://mir-s3-cdn-cf.behance.net/projects/original/bc63aa131507797.Y3JvcCwyMTQzLDE2NzYsNzAwLDIzOA.jpg",
                    original_webp:
                      "https://mir-s3-cdn-cf.behance.net/projects/original_webp/bc63aa131507797.Y3JvcCwyMTQzLDE2NzYsNzAwLDIzOA.jpg",
                    max_808:
                      "https://mir-s3-cdn-cf.behance.net/projects/max_808/bc63aa131507797.Y3JvcCwyMTQzLDE2NzYsNzAwLDIzOA.jpg",
                    max_808_webp:
                      "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/bc63aa131507797.Y3JvcCwyMTQzLDE2NzYsNzAwLDIzOA.jpg",
                  },
                  mature_content: 0,
                  mature_access: "allowed",
                  owners: [
                    {
                      id: 972597015,
                      first_name: '" GORBE',
                      last_name: '"',
                      username: "Everythingbygorbe",
                      city: "Tehran",
                      state: "",
                      country: "Iran, Islamic Republic of",
                      location: "Tehran, Iran, Islamic Republic of",
                      company: "",
                      occupation: "ILLUSTRATOR - GRAFFITI ARTIST",
                      created_on: 1621795825,
                      url: "https://www.behance.net/Everythingbygorbe",
                      images: {
                        "50": "https://mir-s3-cdn-cf.behance.net/user/50/bc78a4972597015.6317938fde0c0.jpg",
                        "100":
                          "https://mir-s3-cdn-cf.behance.net/user/100/bc78a4972597015.6317938fde0c0.jpg",
                        "115":
                          "https://mir-s3-cdn-cf.behance.net/user/115/bc78a4972597015.6317938fde0c0.jpg",
                        "230":
                          "https://mir-s3-cdn-cf.behance.net/user/230/bc78a4972597015.6317938fde0c0.jpg",
                        "138":
                          "https://mir-s3-cdn-cf.behance.net/user/138/bc78a4972597015.6317938fde0c0.jpg",
                        "276":
                          "https://mir-s3-cdn-cf.behance.net/user/276/bc78a4972597015.6317938fde0c0.jpg",
                      },
                      display_name: '" GORBE "',
                      fields: [
                        "Illustration",
                        "Graphic Design",
                        "Character Design",
                      ],
                      has_default_image: 0,
                      website: "Everythingbygorbe.com",
                      banner_image_url:
                        "https://mir-s3-cdn-cf.behance.net/87a0c6104fd27444b55f084b536998d3/bba0951d-6211-43f4-8961-5bc72302ed32_rwc_408x0x2193x410x3200.jpg?h=0360d3d3125c2facbd90b618331095bd",
                      has_premium_access: false,
                      stats: {
                        followers: 9,
                        following: 13,
                        comments: 4,
                        appreciations: 33,
                        views: 269,
                      },
                      user_fields: [
                        { url: "/search?field=48", name: "Illustration" },
                        { url: "/search?field=44", name: "Graphic Design" },
                        { url: "/search?field=124", name: "Character Design" },
                      ],
                      is_profile_owner: false,
                      is_subscription_creator: false,
                      is_following: 0,
                    },
                  ],
                  stats: { views: 42, appreciations: 3, comments: 0 },
                  conceived_on: 1637193600,
                  premium: 0,
                  linked_asset_count: 0,
                  linked_assets: [],
                  colors: [{ r: 0, g: 0, b: 0 }],
                  is_editable: false,
                  share_url:
                    "https://www.behance.net/gallery/131507797/DMD-Character-Illustration?share=1",
                  field_links: [
                    {
                      url: "/search?field=48&content=projects",
                      name: "Illustration",
                      separate: true,
                    },
                    {
                      url: "/search?field=44&content=projects",
                      name: "Graphic Design",
                      separate: true,
                    },
                    {
                      url: "/search?field=108&content=projects",
                      name: "Advertising",
                    },
                  ],
                  multiple_owners: false,
                  modified_date: "Dec 22, 2022",
                  featured_on: null,
                  private: false,
                },
              ],
              hasMore: true,
            },
          },
          adminPermissions: {
            isCurationBlocklistAdmin: false,
            isSuggestionAdmin: false,
            isSpamBlocklistAdmin: false,
            isUseAccountAdmin: false,
            isSearchManageAdmin: false,
            isViewEmailAdmin: false,
          },
          admin: [],
          blockDidFail: false,
          checklist: [],
          isReportModalVisible: false,
          isMessageButtonVisible: true,
          owner: {
            id: 972597015,
            first_name: '" GORBE',
            last_name: '"',
            username: "Everythingbygorbe",
            city: "Tehran",
            state: "",
            country: "Iran, Islamic Republic of",
            location: "Tehran, Iran, Islamic Republic of",
            company: "",
            occupation: "ILLUSTRATOR - GRAFFITI ARTIST",
            created_on: 1621795825,
            url: "https://www.behance.net/Everythingbygorbe",
            images: {
              "50": "https://mir-s3-cdn-cf.behance.net/user/50/bc78a4972597015.6317938fde0c0.jpg",
              "100":
                "https://mir-s3-cdn-cf.behance.net/user/100/bc78a4972597015.6317938fde0c0.jpg",
              "115":
                "https://mir-s3-cdn-cf.behance.net/user/115/bc78a4972597015.6317938fde0c0.jpg",
              "230":
                "https://mir-s3-cdn-cf.behance.net/user/230/bc78a4972597015.6317938fde0c0.jpg",
              "138":
                "https://mir-s3-cdn-cf.behance.net/user/138/bc78a4972597015.6317938fde0c0.jpg",
              "276":
                "https://mir-s3-cdn-cf.behance.net/user/276/bc78a4972597015.6317938fde0c0.jpg",
            },
            display_name: '" GORBE "',
            fields: [
              { id: 48, name: "Illustration" },
              { id: 44, name: "Graphic Design" },
              { id: 124, name: "Character Design" },
            ],
            has_default_image: 0,
            website: "Everythingbygorbe.com",
            banner_image_url:
              "https://mir-s3-cdn-cf.behance.net/87a0c6104fd27444b55f084b536998d3/bba0951d-6211-43f4-8961-5bc72302ed32_rwc_408x0x2193x410x3200.jpg?h=0360d3d3125c2facbd90b618331095bd",
            has_premium_access: false,
            stats: {
              followers: 9,
              following: 13,
              comments: 4,
              appreciations: 33,
              views: 269,
              team_members: false,
              collections: true,
              collections_following: false,
              appreciated: true,
              received_project_appreciations: 33,
              received_project_views: 269,
              received_project_comments: 0,
              received_profile_views: 125,
              given_project_comments: 4,
              given_project_apps: 47,
              given_project_views: 549,
              hasProjects: true,
              hasCollections: true,
              hasAppreciations: true,
              datasets: {
                this_month: {
                  received_project_views: [
                    { timestamp: 1673797880, count: 1 },
                    { timestamp: 1673884280, count: 2 },
                    { timestamp: 1673970680, count: 12 },
                    { timestamp: 1674057080, count: 4 },
                    { timestamp: 1674143480, count: 2 },
                    { timestamp: 1674229880, count: 0 },
                    { timestamp: 1674316280, count: 3 },
                    { timestamp: 1674402680, count: 0 },
                    { timestamp: 1674489080, count: 1 },
                    { timestamp: 1674575480, count: 0 },
                    { timestamp: 1674661880, count: 3 },
                    { timestamp: 1674748280, count: 0 },
                    { timestamp: 1674834680, count: 0 },
                    { timestamp: 1674921080, count: 7 },
                    { timestamp: 1675007480, count: 3 },
                    { timestamp: 1675093880, count: 2 },
                    { timestamp: 1675180280, count: 0 },
                    { timestamp: 1675266680, count: 0 },
                    { timestamp: 1675353080, count: 0 },
                    { timestamp: 1675439480, count: 1 },
                    { timestamp: 1675525880, count: 1 },
                    { timestamp: 1675612280, count: 0 },
                    { timestamp: 1675698680, count: 0 },
                    { timestamp: 1675785080, count: 1 },
                    { timestamp: 1675871480, count: 2 },
                    { timestamp: 1675957880, count: 0 },
                    { timestamp: 1676044280, count: 0 },
                    { timestamp: 1676130680, count: 2 },
                    { timestamp: 1676217080, count: 0 },
                    { timestamp: 1676303480, count: 2 },
                    { timestamp: 1676389880, count: 0 },
                  ],
                  received_project_apps: [
                    { timestamp: 1673797880, count: 0 },
                    { timestamp: 1673884280, count: 0 },
                    { timestamp: 1673970680, count: 6 },
                    { timestamp: 1674057080, count: 0 },
                    { timestamp: 1674143480, count: 0 },
                    { timestamp: 1674229880, count: 0 },
                    { timestamp: 1674316280, count: 0 },
                    { timestamp: 1674402680, count: 0 },
                    { timestamp: 1674489080, count: 0 },
                    { timestamp: 1674575480, count: 0 },
                    { timestamp: 1674661880, count: 0 },
                    { timestamp: 1674748280, count: 0 },
                    { timestamp: 1674834680, count: 0 },
                    { timestamp: 1674921080, count: 0 },
                    { timestamp: 1675007480, count: 1 },
                    { timestamp: 1675093880, count: 1 },
                    { timestamp: 1675180280, count: 0 },
                    { timestamp: 1675266680, count: 0 },
                    { timestamp: 1675353080, count: 0 },
                    { timestamp: 1675439480, count: 0 },
                    { timestamp: 1675525880, count: 0 },
                    { timestamp: 1675612280, count: 0 },
                    { timestamp: 1675698680, count: 0 },
                    { timestamp: 1675785080, count: 0 },
                    { timestamp: 1675871480, count: 0 },
                    { timestamp: 1675957880, count: 0 },
                    { timestamp: 1676044280, count: 0 },
                    { timestamp: 1676130680, count: 0 },
                    { timestamp: 1676217080, count: 0 },
                    { timestamp: 1676303480, count: 0 },
                    { timestamp: 1676389880, count: 0 },
                  ],
                },
                this_month_last_year: {
                  received_project_views: [
                    { timestamp: 1642261880, count: 0 },
                    { timestamp: 1642348280, count: 0 },
                    { timestamp: 1642434680, count: 0 },
                    { timestamp: 1642521080, count: 0 },
                    { timestamp: 1642607480, count: 0 },
                    { timestamp: 1642693880, count: 0 },
                    { timestamp: 1642780280, count: 0 },
                    { timestamp: 1642866680, count: 0 },
                    { timestamp: 1642953080, count: 0 },
                    { timestamp: 1643039480, count: 0 },
                    { timestamp: 1643125880, count: 0 },
                    { timestamp: 1643212280, count: 1 },
                    { timestamp: 1643298680, count: 0 },
                    { timestamp: 1643385080, count: 0 },
                    { timestamp: 1643471480, count: 0 },
                    { timestamp: 1643557880, count: 0 },
                    { timestamp: 1643644280, count: 0 },
                    { timestamp: 1643730680, count: 0 },
                    { timestamp: 1643817080, count: 0 },
                    { timestamp: 1643903480, count: 0 },
                    { timestamp: 1643989880, count: 0 },
                    { timestamp: 1644076280, count: 0 },
                    { timestamp: 1644162680, count: 0 },
                    { timestamp: 1644249080, count: 0 },
                    { timestamp: 1644335480, count: 0 },
                    { timestamp: 1644421880, count: 0 },
                    { timestamp: 1644508280, count: 0 },
                    { timestamp: 1644594680, count: 0 },
                    { timestamp: 1644681080, count: 0 },
                    { timestamp: 1644767480, count: 0 },
                    { timestamp: 1644853880, count: 0 },
                  ],
                  received_project_apps: [
                    { timestamp: 1642261880, count: 0 },
                    { timestamp: 1642348280, count: 0 },
                    { timestamp: 1642434680, count: 0 },
                    { timestamp: 1642521080, count: 0 },
                    { timestamp: 1642607480, count: 0 },
                    { timestamp: 1642693880, count: 0 },
                    { timestamp: 1642780280, count: 0 },
                    { timestamp: 1642866680, count: 0 },
                    { timestamp: 1642953080, count: 0 },
                    { timestamp: 1643039480, count: 0 },
                    { timestamp: 1643125880, count: 0 },
                    { timestamp: 1643212280, count: 0 },
                    { timestamp: 1643298680, count: 0 },
                    { timestamp: 1643385080, count: 0 },
                    { timestamp: 1643471480, count: 0 },
                    { timestamp: 1643557880, count: 0 },
                    { timestamp: 1643644280, count: 0 },
                    { timestamp: 1643730680, count: 0 },
                    { timestamp: 1643817080, count: 0 },
                    { timestamp: 1643903480, count: 0 },
                    { timestamp: 1643989880, count: 0 },
                    { timestamp: 1644076280, count: 0 },
                    { timestamp: 1644162680, count: 0 },
                    { timestamp: 1644249080, count: 0 },
                    { timestamp: 1644335480, count: 0 },
                    { timestamp: 1644421880, count: 0 },
                    { timestamp: 1644508280, count: 0 },
                    { timestamp: 1644594680, count: 0 },
                    { timestamp: 1644681080, count: 0 },
                    { timestamp: 1644767480, count: 0 },
                    { timestamp: 1644853880, count: 0 },
                  ],
                },
              },
              hasLivestreamReplays: false,
            },
            user_fields: [
              { url: "/search?field=48", name: "Illustration" },
              { url: "/search?field=44", name: "Graphic Design" },
              { url: "/search?field=124", name: "Character Design" },
            ],
            is_profile_owner: false,
            is_subscription_creator: false,
            is_following: 0,
            twitter: "",
            links: [],
            sections: {
              About:
                'After finishing high school and mandatory military service, I began my career as a full-time illustrator and graffiti artist based in Tehran.\nFor me, Artistic life has been divided into two parts. One is to help clients and their businesses visually.  The other part is "GORBE" character and its fantasy world.\n\n"GORBE" is the name of the character I made to express my feeling. It will be turned into a graffiti on the wall and sometimes it will be a paper toy on the shelf.',
            },
            social_links: [
              {
                social_id: 7,
                url: "http://youtube.com/@everythingbygorbe4753",
                service_name: "YouTube",
                value: "everythingbygorbe4753",
                isYouTube: true,
                social_network_type: "isYouTube",
              },
              {
                social_id: 12,
                url: "http://instagram.com/everythingbygorbe",
                service_name: "Instagram",
                value: "everythingbygorbe",
                isInstagram: true,
                social_network_type: "isInstagram",
              },
            ],
            has_social_links: true,
            verified: 1,
            flagged: 0,
            nofollow: false,
            name_reversed: false,
            join_date: "May 23, 2021",
            has_company: true,
            known_as: "",
            has_website: true,
            urls: {
              relative: "/Everythingbygorbe",
              editor: "https://www.behance.net/Everythingbygorbe/editor",
              short: "http://be.net/Everythingbygorbe",
              feed: "https://www.behance.net/Everythingbygorbe.xml",
              resume_edit: "https://www.behance.net/portfolio/experience/edit",
              resume: "https://www.behance.net/Everythingbygorbe/resume",
              website: "http://Everythingbygorbe.com",
              website_pretty: "Everythingbygorbe.com",
              stats: "https://www.behance.net/Everythingbygorbe/stats",
              following: "/Everythingbygorbe/following",
              followers: "/Everythingbygorbe/followers",
              team_members: "/Everythingbygorbe/team_members",
              collections:
                "https://www.behance.net/Everythingbygorbe/collections",
              collections_following:
                "https://www.behance.net/Everythingbygorbe/collections_following",
              projects: "https://www.behance.net/Everythingbygorbe",
              appreciated:
                "https://www.behance.net/Everythingbygorbe/appreciated",
              videos: "https://www.behance.net/Everythingbygorbe/videos",
            },
            about: [
              {
                name: "About",
                value:
                  "<div class='variable-text variable-text-short'>After finishing high school and mandatory military service, I began my career as a full-time illustrator and graffiti artist based in Tehran.<br />\nFor me, Artistic life has been divided into two parts. One is to help clients and their businesses visually.  The other part is \"GORBE\" character and its fantasy world.<br />\n<br />\n\"GO&#8230; <span class='variable-text-link fake-link'> Read More</span></div><div class='variable-text variable-text-full hide'>After finishing high school and mandatory military service, I began my career as a full-time illustrator and graffiti artist based in Tehran.<br />\nFor me, Artistic life has been divided into two parts. One is to help clients and their businesses visually.  The other part is \"GORBE\" character and its fantasy world.<br />\n<br />\n\"GORBE\" is the name of the character I made to express my feeling. It will be turned into a graffiti on the wall and sometimes it will be a paper toy on the shelf. <span class='variable-text-link fake-link'> Read Less</span></div>",
                index: 1,
                exists: true,
              },
            ],
            custom_sections: [
              { name: false, value: false, index: 2, exists: false },
              { name: false, value: false, index: 3, exists: false },
            ],
            field_links: [
              { url: "/search?field=48", name: "Illustration", separate: true },
              {
                url: "/search?field=44",
                name: "Graphic Design",
                separate: true,
              },
              {
                url: "/search?field=124",
                name: "Character Design",
                separate: false,
              },
            ],
            location_link: "/search?content=users&country=IR&city=Tehran",
            networks: [],
            resume: [],
            teams: [],
            viral_data: {
              url: "https://www.behance.net/Everythingbygorbe",
              title: '" GORBE " on Behance',
            },
            has_features: false,
            adobe_pro: { paidCC: false, tools: [] },
            country_code: "IR",
            isLive: false,
            liveStreamId: null,
            liveStreamUrl: null,
            liveStream: null,
            orchestratorBaseUrl: "https://livestream-cdn.adobe.io/",
            isMessageButtonVisible: true,
          },
        },
      },
    },
  };

  return {
    props: {
      projects: data?.props?.data?.profile?.activeSection?.work?.projects,
    },
  };
}

export default Projects;
