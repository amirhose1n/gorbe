import PageHeader from "../../pageHeader";
import WorkRenderer from "./workRenderer";

function Illustrators({ data }: any) {
  return (
    <div className="bg-dark-100 font-bold min-h-screen">
      <div className="layout layout--center flex flex-col items-center desktop:py-16 desktop:px-0 tablet:px-16 px-6 py-6">
        <div className="relative">
          <PageHeader img="/images/texts/Illustration.png" />
          <div className="desktop:py-12 py-6 tablet:py-8">
            <WorkRenderer data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Illustrators;
