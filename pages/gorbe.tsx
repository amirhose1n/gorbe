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
          className="rounded-md md:h-96 sm:h-64 h-46"
        ></iframe>
      </div>
    </div>
  );
}
export default Gorbe;
