/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

function Home() {
  const menus = [
    { image: "Gorbe.png", link: "/gorbe", size: { width: 118, height: 48 } },
    {
      image: "Illustration.png",
      link: "/projects/illustrators",
      size: { width: 246, height: 35 },
    },
    {
      image: "Graffiti.png",
      link: "/projects/graffities",
      size: { width: 168, height: 35 },
    },
    {
      image: "Store.png",
      link: "https://everythingbygorbe.com/",
      size: { width: 113, height: 38 },
      target: "_blank",
    },
    {
      image: "Contact.png",
      link: "/contact",
      size: { width: 155, height: 33 },
    },
  ];

  return (
    <div className="relative">
      <div className="z-30">
        <img
          src={"/images/gorbe.gif"}
          alt="gorbe"
          className="object-cover h-screen"
        />
      </div>
      <div className="mainmenu h-screen m-0 z-50 w-full min-h-full flex justify-center items-center top-0 absolute">
        <div className="relative flex flex-col text-center pt-20 items-center gap-y-4">
          {menus.map(({ image, link, size, target = "_self" }) => (
            <div
              key={image}
              className="hover:scale-110 transition-all duration-200"
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
