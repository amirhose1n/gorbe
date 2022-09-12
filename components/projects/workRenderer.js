import Image from "next/image";
import Link from "next/link";
const WorkRenderer = ({ data }) => {
  return (
    <div className="w-full desktop:gap-4 gap-2 grid desktop:grid-cols-3 grid-cols-1">
      {data &&
        data.map(({ covers: { max_808_webp }, name, url }) => {
          return (
            <div key={name}>
              <Link href={url}>
                <a target={"_blank"}>
                  <Image src={max_808_webp} width={500} height={300} />
                  <h1 className="text-dark-200">{name}</h1>
                </a>
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default WorkRenderer;
