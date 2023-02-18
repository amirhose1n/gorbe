import Link from "next/link";
import LikeComponent from "./like";
import Style from "./style";
import ViewComponent from "./view";

function WorkRenderer({ data }: any) {
  console.log({ data });
  return (
    <Style>
      <div className="max-w-max desktop:gap-x-6 desktop:gap-y-8 gap-y-4 grid grid-cols-1 desktop:grid-cols-3 tablet:gap-x-4 tablet:grid-cols-2 desktop:px-0">
        {data &&
          data.map(
            ({ covers, name, url, stats: { views, appreciations } }: any) => {
              console.log({ url });
              return (
                <Link href={url} key={name}>
                  <a target={"_blank"}>
                    <div className="card relative items-center justify-center rounded-md overflow-hidden flex flex-col max-w-max">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={covers["404_webp"]}
                        alt="project"
                        className="transition-transform duration-500 object-cover max-w-full w-full h-full"
                      />
                      <div className="absolute top-0 bottom-0 right-0 left-0 overflow-hidden">
                        <div
                          className="
                          h-full absolute right-0 top-0 left-0 bottom-0 
                          card-cover text-white
                          p-4
                          flex items-end
                        "
                        >
                          <div className="w-full">
                            <h1 className="text-white font-semibold desktop:text-md text-md ">
                              {name
                                .replace(" - Illustration", "")
                                .replace(" - Graffiti", "")}
                            </h1>
                            <div className="flex font-medium justify-between items-center">
                              <span className="text-sm">Open in behance</span>
                              <span className="flex items-center gap-x-2">
                                <div className="flex items-center gap-x-1">
                                  <span className="text-sm">
                                    {appreciations}
                                  </span>
                                  <LikeComponent fill="white" />
                                </div>
                                <div className="flex items-center gap-x-1">
                                  <span className="text-sm">{views}</span>
                                  <ViewComponent fill="white" />
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </Link>
              );
            }
          )}
      </div>
    </Style>
  );
}

export default WorkRenderer;
