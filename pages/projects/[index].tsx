import { useRouter } from "next/router";
import Graffities from "../../src/components/pages/projects/graffities";
import Illustrators from "../../src/components/pages/projects/illustrators";
import fetchBehance from "../api/behance";

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
  let data = await fetchBehance();
  // const data = {
  //   props: {
  //     data: {
  //       profile: {
  //         activeSection: {
  //           work: {
  //             projects: [
  //               {
  //                 id: 152083833,
  //                 name: "Kashan Pollution Graffiti event - Graffiti",
  //                 published_on: 1662493446,
  //                 created_on: 1662493383,
  //                 modified_on: 1662493446,
  //                 url: "https://www.behance.net/gallery/152083833/Kashan-Pollution-Graffiti-event-Graffiti",
  //                 slug: "Kashan-Pollution-Graffiti-event-Graffiti",
  //                 privacy: "public",
  //                 fields: [
  //                   {
  //                     id: 48,
  //                     name: "Illustration",
  //                     slug: "illustration",
  //                     url: "/search?field=48&content=projects",
  //                   },
  //                   {
  //                     id: 124,
  //                     name: "Character Design",
  //                     slug: "character-design",
  //                     url: "/search?field=124&content=projects",
  //                   },
  //                   {
  //                     id: 110,
  //                     name: "Drawing",
  //                     slug: "drawing",
  //                     url: "/search?field=110&content=projects",
  //                   },
  //                 ],
  //                 covers: {
  //                   115: "https://mir-s3-cdn-cf.behance.net/projects/115/495265152083833.Y3JvcCwzMTI5LDI0NDcsNjksMA.jpg",
  //                   202: "https://mir-s3-cdn-cf.behance.net/projects/202/495265152083833.Y3JvcCwzMTI5LDI0NDcsNjksMA.jpg",
  //                   230: "https://mir-s3-cdn-cf.behance.net/projects/230/495265152083833.Y3JvcCwzMTI5LDI0NDcsNjksMA.jpg",
  //                   404: "https://mir-s3-cdn-cf.behance.net/projects/404/495265152083833.Y3JvcCwzMTI5LDI0NDcsNjksMA.jpg",
  //                   808: "https://mir-s3-cdn-cf.behance.net/projects/808/495265152083833.Y3JvcCwzMTI5LDI0NDcsNjksMA.jpg",
  //                   "808_webp":
  //                     "https://mir-s3-cdn-cf.behance.net/projects/808_webp/495265152083833.Y3JvcCwzMTI5LDI0NDcsNjksMA.jpg",
  //                   "404_webp":
  //                     "https://mir-s3-cdn-cf.behance.net/projects/404_webp/495265152083833.Y3JvcCwzMTI5LDI0NDcsNjksMA.jpg",
  //                   "202_webp":
  //                     "https://mir-s3-cdn-cf.behance.net/projects/202_webp/495265152083833.Y3JvcCwzMTI5LDI0NDcsNjksMA.jpg",
  //                   "230_webp":
  //                     "https://mir-s3-cdn-cf.behance.net/projects/230_webp/495265152083833.Y3JvcCwzMTI5LDI0NDcsNjksMA.jpg",
  //                   "115_webp":
  //                     "https://mir-s3-cdn-cf.behance.net/projects/115_webp/495265152083833.Y3JvcCwzMTI5LDI0NDcsNjksMA.jpg",
  //                   original:
  //                     "https://mir-s3-cdn-cf.behance.net/projects/original/495265152083833.Y3JvcCwzMTI5LDI0NDcsNjksMA.jpg",
  //                   original_webp:
  //                     "https://mir-s3-cdn-cf.behance.net/projects/original_webp/495265152083833.Y3JvcCwzMTI5LDI0NDcsNjksMA.jpg",
  //                   max_808:
  //                     "https://mir-s3-cdn-cf.behance.net/projects/max_808/495265152083833.Y3JvcCwzMTI5LDI0NDcsNjksMA.jpg",
  //                   max_808_webp:
  //                     "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/495265152083833.Y3JvcCwzMTI5LDI0NDcsNjksMA.jpg",
  //                 },
  //                 mature_content: 0,
  //                 mature_access: "allowed",
  //                 owners: [
  //                   {
  //                     id: 972597015,
  //                     first_name: '" GORBE',
  //                     last_name: '"',
  //                     username: "Everythingbygorbe",
  //                     city: "Tehran",
  //                     state: "",
  //                     country: "Iran, Islamic Republic of",
  //                     location: "Tehran, Iran, Islamic Republic of",
  //                     company: "",
  //                     occupation: "ILLUSTRATOR - GRAFFITI ARTIST",
  //                     created_on: 1621795825,
  //                     url: "https://www.behance.net/Everythingbygorbe",
  //                     images: {
  //                       50: "https://mir-s3-cdn-cf.behance.net/user/50/bc78a4972597015.6317938fde0c0.jpg",
  //                       100: "https://mir-s3-cdn-cf.behance.net/user/100/bc78a4972597015.6317938fde0c0.jpg",
  //                       115: "https://mir-s3-cdn-cf.behance.net/user/115/bc78a4972597015.6317938fde0c0.jpg",
  //                       138: "https://mir-s3-cdn-cf.behance.net/user/138/bc78a4972597015.6317938fde0c0.jpg",
  //                       230: "https://mir-s3-cdn-cf.behance.net/user/230/bc78a4972597015.6317938fde0c0.jpg",
  //                       276: "https://mir-s3-cdn-cf.behance.net/user/276/bc78a4972597015.6317938fde0c0.jpg",
  //                     },
  //                     display_name: '" GORBE "',
  //                     fields: [
  //                       "Illustration",
  //                       "Graphic Design",
  //                       "Character Design",
  //                     ],
  //                     has_default_image: 0,
  //                     website: "",
  //                     banner_image_url:
  //                       "https://mir-s3-cdn-cf.behance.net/87a0c6104fd27444b55f084b536998d3/14653e77-8233-4dc9-96d2-cb5590641ecf_rwc_-2x735x2632x491x2632.png?h=ca4e86101e69bd9f47dc38f4c03b6a5a",
  //                     has_premium_access: false,
  //                     stats: {
  //                       followers: 1,
  //                       following: 6,
  //                       comments: 2,
  //                       appreciations: 0,
  //                       views: 25,
  //                     },
  //                   },
  //                 ],
  //                 stats: {
  //                   views: 1,
  //                   appreciations: 0,
  //                   comments: 0,
  //                 },
  //                 conceived_on: 1662422400,
  //                 premium: 0,
  //                 linked_asset_count: 0,
  //                 linked_assets: [],
  //                 colors: [
  //                   {
  //                     r: 5,
  //                     g: 3,
  //                     b: 14,
  //                   },
  //                 ],
  //                 is_editable: false,
  //                 share_url:
  //                   "https://www.behance.net/gallery/152083833/Kashan-Pollution-Graffiti-event-Graffiti?share=1",
  //                 field_links: [
  //                   {
  //                     url: "/search?field=48&content=projects",
  //                     name: "Illustration",
  //                     separate: true,
  //                   },
  //                   {
  //                     url: "/search?field=124&content=projects",
  //                     name: "Character Design",
  //                     separate: true,
  //                   },
  //                   {
  //                     url: "/search?field=110&content=projects",
  //                     name: "Drawing",
  //                   },
  //                 ],
  //                 multiple_owners: false,
  //                 modified_date: "Sep 6, 2022",
  //                 featured_on: null,
  //                 private: false,
  //               },
  //             ],
  //           },
  //         },
  //       },
  //     },
  //   },
  // };

  return {
    props: {
      projects: data?.props?.data?.profile?.activeSection?.work?.projects,
    },
  };
}

export default Projects;
