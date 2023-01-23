import Head from "next/head";
import PageHeader from "../src/components/pageHeader";
function Gorbe() {
  return (
    <div className="bg-dark-100 font-bold min-h-screen">
      <Head>
        <title>Everythingbygorbe | gorbe</title>
      </Head>
      <div className="layout layout--center">
        <PageHeader width={157} height={75} img="/images/Gorbe.png" />
        <iframe
          width="100%"
          src="https://www.youtube.com/embed/dqPS3I_8BdY"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="rounded-md md:h-96 sm:h-64 h-52"
        ></iframe>
        <p className="font-normal text-md sm:text-lg py-12 text-white">
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
      </div>
    </div>
  );
}
export default Gorbe;
