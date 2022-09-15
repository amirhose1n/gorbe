import Image from "next/image";
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
    <>
      <div className="z-30">
        <Image
          src={"/images/gorbe.gif"}
          alt="gorbe"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="mainmenu h-screen flex m-0 z-50 w-full min-h-full flex justify-center items-center absolute">
        <div className="relative flex flex-col text-center pt-20 mt-6 items-center gap-y-8">
          {menus.map(({ image, link, size, target = "_self" }) => (
            <div
              key={image}
              className="hover:scale-110 transition-all duration-200"
            >
              <Link href={link}>
                <a target={target}>
                  <Image src={`/images/texts/${image}`} alt={image} {...size} />
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
