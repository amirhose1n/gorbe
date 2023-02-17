import dynamic from "next/dynamic";
import Head from "next/head";
import PageHeader from "../../pageHeader";
import WorkRenderer from "./workRenderer";

const ReactPhotoSphereViewer = dynamic(
  () =>
    import("react-photo-sphere-viewer").then(
      (mod) => mod.ReactPhotoSphereViewer
    ),
  {
    ssr: false,
  }
);
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
          <div className="w-full pb-24">
            <div className="relative rounded-md overflow-hidden">
              <ReactPhotoSphereViewer
                src="/images/3d.jpg"
                height={"400px"}
                width={"100%"}
                container="kire khar"
                panorama={true}
                caption="kire khar"
                description="kire gav"
                sphereCorrection={{
                  pan: 0,
                  tilt: 0,
                  roll: 0,
                }}
                fishEye={false}
              ></ReactPhotoSphereViewer>
              <h1 className="text-white font-semibold desktop:text-md text-md absolute top-5 left-5">
                Robo Gorbe - TBK - Tehran Under Ground - 2023
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Graffiti;
