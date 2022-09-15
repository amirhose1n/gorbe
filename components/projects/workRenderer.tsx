import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import Style from "./style";
import useIsMobile from "../../src/hooks/useIsMobile";

function WorkRenderer({ data }: any) {
  const isMobile = useIsMobile();

  return (
    <Style>
      <div className="w-full desktop:gap-x-6 desktop:gap-y-8 gap-y-4 grid desktop:grid-cols-3 grid-cols-1 desktop:px-0">
        {data &&
          data.map(({ covers: { max_808_webp }, name, url }: any) => {
            return (
              <div key={name} className="flex flex-col">
                <div
                  className={classNames(
                    "flex flex-col relative items-center justify-center"
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
                          <h1 className="text-white font-semibold desktop:text-md text-md ">
                            {name
                              .replace(" - Illustration", "")
                              .replace(" - Graffiti", "")}
                          </h1>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            );
          })}
      </div>
    </Style>
  );
}

export default WorkRenderer;
