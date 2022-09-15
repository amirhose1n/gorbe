import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import Style from "./style";
import ViewComponent from "./view";
import LikeComponent from "./like";

function WorkRenderer({ data }: any) {
  console.log({ data });
  return (
    <Style>
      <div className="w-full desktop:gap-x-6 desktop:gap-y-8 gap-y-4 grid tablet:gird-cols-2 desktop:grid-cols-3  grid-cols-1 desktop:px-0">
        {data &&
          data.map(
            ({
              covers: { max_808_webp },
              name,
              url,
              stats: { views, appreciations },
            }: any) => {
              return (
                <div key={name} className="flex flex-col">
                  <div
                    className={classNames(
                      "flex flex-col relative items-center justify-center w-max max-w-full"
                    )}
                  >
                    <Link href={url}>
                      <a target={"_blank"} className="card w-full">
                        <Image
                          src={max_808_webp}
                          width={400}
                          height={250}
                          layout="fixed"
                          objectFit={"cover"}
                          alt="project"
                          className="transition transition-transform duration-500"
                        />
                        <div className="absolute top-0 bottom-0 right-0 left-0 overflow-hidden">
                          <div
                            className="
                          h-1/2 max-h-1/2 absolute right-0 left-0 -bottom-32  
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
                      </a>
                    </Link>
                  </div>
                </div>
              );
            }
          )}
      </div>
    </Style>
  );
}

export default WorkRenderer;
