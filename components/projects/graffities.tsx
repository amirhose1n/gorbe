import Image from "next/image";
import WorkRenderer from "./workRenderer";

function Graffiti({ data }: any) {
  console.log({ data });

  return (
    <div className="bg-dark-100 font-bold min-h-screen">
      <div className="layout layout--center">
        <div className="desktop:py-16 py-6">
          <div>
            <Image
              src="/images/texts/Graffiti.png"
              width={210}
              height={50}
              alt="graffitie"
              quality={100}
            />
          </div>
          <div className="desktop:py-12 py-6">
            <WorkRenderer data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Graffiti;
