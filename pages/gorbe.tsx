/* eslint-disable react/jsx-no-comment-textnodes */
import classNames from "classnames";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import PageHeader from "../src/components/pageHeader";
const expriences = [
  {
    image: "/images/ZenCats_Icon.png",
    link: "https://www.zencats.io",
  },
  {
    image: "/images/Takhteh_Icon.png",
    link: "https://www.takhtehsnowboards.com/",
  },
  {
    image: "/images/Stickerbomb_icon.png",
    link: "https://www.stickerbombworld.com/",
  },
  {
    image: "/images/Sotoon.png",
    link: "https://sotoon.ir/",
  },
  {
    image: "/images/Azadegan_Icon.png",
    link: "https://azadeganbeton.ir/azadegan-beton-introduction/",
  },
  {
    image: "/images/Boardflip_Icon.png",
    link: "https://boardflipwood.com/",
  },
  {
    image: "/images/Tsixty_Icon.png",
    link: "https://www.tsixty.com/",
  },
];

const medias = [
  {
    image: "/images/Youtube.png",
    link: "https://www.youtube.com/@everythingbygorbe4753",
  },
  { image: "/images/Insta.png", link: "www.instagram.com/everythingbygorbe" },
  {
    image: "/images/Behance.png",
    link: "https://www.behance.net/Everythingbygorbe",
  },
];

function Gorbe() {
  const [sprayAnimation, setSprayAnimation] = useState(false);
  const [catAnimation, setCatAnimation] = useState(false);
  const [catAudio, setCatAudio] = useState<HTMLAudioElement | undefined>();
  const [audio, setAudio] = useState<HTMLAudioElement | undefined>();
  const [computerOn, setComputerOn] = useState(false);

  useEffect(() => {
    setAudio(new Audio("/spray.mp3"));
    setCatAudio(new Audio("/cat.mp3"));
  }, []);

  const handleSetComputerOn = useCallback(() => {
    setComputerOn(!computerOn);
  }, [computerOn]);

  const handleSprayAnimation = useCallback(() => {
    if (!sprayAnimation) {
      setSprayAnimation(true);
      setTimeout(() => {
        setSprayAnimation(false);
      }, 1500);
    }
  }, [sprayAnimation]);

  const startSpray = () => {
    if (audio?.play) {
      audio.play();
      handleSprayAnimation();
    }
  };

  const handleCatAnimation = useCallback(() => {
    if (!catAnimation) {
      setCatAnimation(true);
      setTimeout(() => {
        setCatAnimation(false);
      }, 1500);
    }
  }, [catAnimation]);

  const startCat = () => {
    if (catAudio?.play) {
      catAudio.play();
      handleCatAnimation();
    }
  };

  return (
    <div className="bg-dark-400 font-bold min-h-screen">
      <Head>
        <title>Everythingbygorbe | gorbe</title>
      </Head>
      <div className="layout layout--center">
        <PageHeader width={157} height={75} img="/images/Gorbe.png" />
        <div className="relative">
          <Image
            src="/images/ContactBackground.jpg"
            alt="Gorbe"
            className="rounded-md"
            width={5504}
            height={3200}
          />
          <div className="absolute spray-parent left-[28%] bottom-[4%] max-w-[4%] flex justify-center items-center">
            <Image
              onClick={startSpray}
              src="/images/Spray.png"
              alt="Spray"
              className={classNames(
                "cursor-grab overflow-visible",
                sprayAnimation && "spray"
              )}
              width={50}
              height={127}
            />
          </div>
          <div className="absolute spray-parent max-w-[5%] right-[18.5%] top-[26%] flex justify-center items-center">
            <Image
              onClick={startCat}
              src="/images/littleCat.png"
              alt="Spray"
              className={classNames(
                "cursor-pointer overflow-visible",
                catAnimation && "jump"
              )}
              width={60}
              height={69}
            />
          </div>
          <div className="absolute spray-parent right-[14.8%] bottom-[3.6%] max-w-[14%] flex justify-center items-center">
            <Image
              src="/images/screen1.png"
              alt="ScreenOne"
              className={classNames(
                computerOn ? "opacity-100" : "opacity-0 delay-500",
                "transition-all duration-1000"
              )}
              width={500}
              height={413}
            />
          </div>
          <div className="absolute opac spray-parent right-[1.8%] bottom-[19.6%] max-w-[22%] flex justify-center items-center">
            <Image
              src="/images/screen2.png"
              alt="ScreenTwo"
              className={classNames(
                computerOn ? "opacity-100 delay-500" : "opacity-0",
                "transition-all duration-1000"
              )}
              width={1190}
              height={1074}
            />
          </div>
          <div
            onClick={handleSetComputerOn}
            className="w-4 h-4 cursor-pointer rounded-full right-[16.2%] bottom-[7%] absolute"
          ></div>
          <div
            onClick={handleSetComputerOn}
            className="w-3 h-3 cursor-pointer rounded-full right-[19.2%] bottom-[2%] absolute"
          ></div>
        </div>
        <div className="flex flex-col pt-6 pb-6">
          <div className="mb-1">
            <Image
              src="/images/GORBE_logo.png"
              width={100}
              height={43}
              alt="gorbe"
            />
          </div>
          <p className="font-normal text-md sm:text-lg text-dark-500 text-justify">
            I’m 26, born, and raised in Mashhad, Iran. I ride my skateboard
            sometimes but painting is my passion because I LOVE being creative!
            My mother inspired me to start painting as I watched her sketching
            eyes and flowers in her notebook while speaking on the telephone.
            Watching animated movies and cartoons are my favorite hobby. By
            flicking through my portfolio, you’ll see how it reflects in my art
            style. Sometimes I get inspired by my culture, like using the
            Persian alphabet and representing the Iranian lifestyle. It would be
            critical sometimes!
          </p>
        </div>

        <div className="flex flex-col -mr-6 pb-4 text-dark-500 font-normal">
          <p>Selected clients and partners :</p>
          <div className="grid grid-cols-3 md:grid-cols-7 items-center pt-2 sm:pt-0">
            {expriences.map(({ link, image }, key) => {
              return (
                <div
                  className="mr-6 mt-6 cursor-pointer hover:scale-110 transition ease-out"
                  key={key}
                >
                  <Link href={link} target="_blank" className="pr-6">
                    <Image
                      src={image}
                      width={140}
                      height={100}
                      alt="experiences"
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col -mr-6 pb-12 text-dark-500 font-normal">
          <p>Medias :</p>
          <div className="flex items-center pt-2 sm:pt-4">
            {medias.map(({ link, image }, key) => {
              return (
                <div
                  key={key}
                  className="mr-2 hover:scale-110 cursor-pointer transition ease-out"
                >
                  <Link href={link} target="_blank">
                    <Image
                      src={image}
                      width={40}
                      height={40}
                      alt="experiences"
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Gorbe;
