/* eslint-disable react/jsx-no-comment-textnodes */
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "../src/components/pageHeader";
const expriences = [
  {
    image: "/images/Sotoon.png",
    link: "www.google.com",
  },
  {
    image: "/images/GorbeX.png",
    link: "www.google.com",
  },
  {
    image: "/images/Tsixty.png",
    link: "www.google.com",
  },
  {
    image: "/images/Digikala.png",
    link: "www.google.com",
  },
];

const medias = [
  { image: "/images/Youtube.png", link: "www.google.com" },
  { image: "/images/Insta.png", link: "www.google.com" },
  { image: "/images/Behance.png", link: "www.google.com" },
];

function Gorbe() {
  return (
    <div className="bg-dark-400 font-bold min-h-screen">
      <Head>
        <title>Everythingbygorbe | gorbe</title>
      </Head>
      <div className="layout layout--center">
        <PageHeader width={157} height={75} img="/images/Gorbe.png" />
        {/* <iframe
          width="100%"
          src="https://www.youtube.com/embed/dqPS3I_8BdY"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="rounded-md md:h-96 sm:h-64 h-52"
        ></iframe> */}

        <img
          src="/images/ContactBackground.jpg"
          alt="Gorbe"
          className="rounded-md"
        />
        <p className="font-normal text-md sm:text-lg pt-12 pb-6 text-dark-500 text-justify">
          I’m 26, born, and raised in Mashhad, Iran. I ride my skateboard
          sometimes but painting is my passion because I LOVE being creative! My
          mother inspired me to start painting as I watched her sketching eyes
          and flowers in her notebook while speaking on the telephone. Watching
          animated movies and cartoons are my favorite hobby. By flicking
          through my portfolio, you’ll see how it reflects in my art style.
          Sometimes I get inspired by my culture, like using the Persian
          alphabet and representing the Iranian lifestyle. It would be critical
          sometimes!
        </p>
        <div className="flex flex-col -mr-6 pb-4 text-dark-500 font-normal">
          <p>Selected clients and partners :</p>
          <div className="flex items-center pt-2 sm:pt-0">
            {expriences.map(({ link, image }, key) => {
              return (
                <Link key={key} href={link} target="blank" className="pr-6">
                  <Image
                    src={image}
                    width={200}
                    height={50}
                    alt="experiences"
                  />
                </Link>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col -mr-6 pb-12 text-dark-500 font-normal">
          <p>Medias :</p>
          <div className="flex items-center pt-2 sm:pt-4">
            {medias.map(({ link, image }, key) => {
              return (
                <Link key={key} href={link} target="blank" className="pr-6">
                  <Image src={image} width={40} height={40} alt="experiences" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Gorbe;
