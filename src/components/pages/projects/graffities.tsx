import WorkRenderer from "./workRenderer";
import PageHeader from "../../pageHeader";

function Graffiti({ data }: any) {
  return (
    <div className="bg-dark-100 font-bold min-h-screen">
      <div className="layout layout--center  flex flex-col items-center desktop:py-16 py-6 desktop:px-0 px-6 tablet:px-16">
        <div className="relative">
          <PageHeader img="/images/texts/Graffiti.png" />
          <div className="desktop:py-12 py-6 tablet:py-8">
            <WorkRenderer data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Graffiti;
