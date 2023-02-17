/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from "next/link";
import useIsMobile from "../src/hooks/useIsMobile";

function Home() {
  const isMobile = useIsMobile();

  const menus = [
    {
      image: "Gorbe.png",
      link: "/gorbe",
      size: !isMobile ? { width: 118, height: 48 } : { width: 94, height: 38 },
    },
    {
      image: "Illustration.png",
      link: "/projects/illustrators",
      size: !isMobile ? { width: 246, height: 35 } : { width: 197, height: 28 },
    },
    {
      image: "Graffiti.png",
      link: "/projects/graffities",
      size: !isMobile ? { width: 168, height: 35 } : { width: 134, height: 28 },
    },
    {
      image: "Store.png",
      link: "https://everythingbygorbe.com/",
      size: !isMobile ? { width: 113, height: 38 } : { width: 90, height: 19 },
      target: "_blank",
    },
    {
      image: "Contact.png",
      link: "/contact",
      size: !isMobile ? { width: 155, height: 33 } : { width: 120, height: 26 },
    },
  ];

  return (
    <div className="relative">
      <Head>
        <title>Everythingbygorbe</title>
      </Head>
      <div className="z-30">
        <img
          src={"/images/gorbe.gif"}
          alt="gorbe"
          className="object-cover h-screen min-w-full"
        />
      </div>
      <div className="mainmenu h-screen m-0 z-50 w-full min-h-full flex justify-center items-center top-0 absolute">
        <div className="relative flex flex-col text-center pt-12 sm:pt-20 items-center">
          {menus.map(({ image, link, size, target = "_self" }) => (
            <div
              key={image}
              className="hover:scale-110 cursor-pointer transition-all duration-200 sm:py-2 py-1.5"
            >
              <Link href={link} target={target}>
                <img src={`/images/texts/${image}`} alt={image} {...size} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Home;
