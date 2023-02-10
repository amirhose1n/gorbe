import Head from "next/head";
import Image from "next/image";
import PageHeader from "../src/components/pageHeader";
function NotFound() {
  return (
    <div className="bg-dark-400 font-bold min-h-screen">
      <div className="layout layout--center">
        <PageHeader width={157} height={75} />
      </div>
      <div className=" flex justify-center items-center">
        <Head>
          <title>Everythingbygorbe | 404</title>
        </Head>
        <Image
          src="/images/Error_404.png"
          alt="404"
          width={1000}
          height={687}
        />
        <div className="absolute top-64 text-white opacity-60 ">
          <h1 className="text-9xl">404</h1>
          <p className="-mt-3 flex justify-between px-2">
            <span>Page</span>
            <span>not</span>
            <span>found</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
