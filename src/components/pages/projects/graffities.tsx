import Head from "next/head";
import PageHeader from "../../pageHeader";
import WorkRenderer from "./workRenderer";

function Graffiti({ data }: any) {
  return (
    <div className="bg-dark-400 font-bold min-h-screen">
      <Head>
        <title>Everythingbygorbe | graffities</title>
      </Head>
      <div className="layout layout--center  flex flex-col items-center">
        <div className="relative">
          <PageHeader width={199.5} height={60} img="/images/Graffiti.png" />
          <div className="desktop:py-12 py-6 tablet:py-8">
            <WorkRenderer data={data} />
          </div>
          <div className="pb-12">
            <div className="relative rounded-md overflow-hidden">
              <iframe
                className="w-full h-[416px]"
                src="https://seekbeak.com/v/60qZ4kv0zrB"
                title="description"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Graffiti;
