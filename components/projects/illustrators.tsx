import Image from "next/image";
import WorkRenderer from "./workRenderer";

function Illustrators({ data }: any) {
  return (
    <div className="bg-dark-100 font-bold min-h-screen">
      <div className="layout layout--center">
        <div className="desktop:py-16 py-6">
          <div>
            <Image
              src="/images/texts/Illustration.png"
              width={240}
              height={50}
              alt="Illustorator"
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

export default Illustrators;
