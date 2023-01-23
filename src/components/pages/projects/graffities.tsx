import Head from "next/head";
import PageHeader from "../../pageHeader";
import WorkRenderer from "./workRenderer";

function Graffiti({ data }: any) {
  return (
    <div className="bg-dark-100 font-bold min-h-screen">
      <Head>
        <title>Everythingbygorbe | graffities</title>
      </Head>
      <div className="layout layout--center  flex flex-col items-center">
        <div className="relative">
          <PageHeader width={150} height={60} img="/images/Graffiti.png" />
          <div className="desktop:py-12 py-6 tablet:py-8">
            <WorkRenderer data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Graffiti;
