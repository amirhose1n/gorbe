import Image from "next/image";
import Link from "next/link";

function Home() {
  const menus = [
    { image: "Gorbe.png", link: "/gorbe" },
    { image: "Illustration.png", link: "/projects/illustrators" },
    { image: "Graffiti.png", link: "/projects/graffities" },
    { image: "Store.png", link: "https://everythingbygorbe.com/" },
    { image: "Contact.png", link: "/contact" },
  ];

  return (
    <>
      <div className="z-30">
        <Image src={"/images/gorbe.gif"} layout="fill" objectFit="cover" />
      </div>
      <div className="mainmenu h-screen flex m-0 z-50 w-full min-h-full flex justify-center items-center absolute">
        <div className="relative flex flex-col text-center pt-20 items-center gap-y-8">
          {menus.map(({ image, link }) => (
            <div
              key={image}
              className="hover:scale-125 transition-all duration-200"
            >
              <Link href={link}>
                <a>
                  <img
                    src={`/images/texts/${image}`}
                    alt={image}
                    layout="fill"
                    className="!object-contain !w-auto !relative "
                  />
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
