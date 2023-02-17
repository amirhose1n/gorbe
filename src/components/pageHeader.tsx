import Image from "next/image";
import Link from "next/link";
import useIsMobile from "../hooks/useIsMobile";

function PageHeader({
  img,
  width = 240,
  height = 50,
}: {
  img?: string;
  width?: number;
  height?: number;
}) {
  const isMobile = useIsMobile();
  return (
    <div className="relative pt-12 pb-6 sm:py-12 sm:px-0 min-w-full">
      {isMobile && (
        <div className="absolute top-8 left-0 text-bold text-white text-xl hover:text-dark-50 cursor-pointer">
          <Link href="/">
            <Image
              src={"/images/Back.png"}
              width={!isMobile ? 45 : 35}
              height={!isMobile ? 32 : 25}
              alt="Home"
            />
          </Link>
        </div>
      )}
      <div className="flex w-full sm:justify-between items-center justify-center">
        {!isMobile && (
          <div className="hover:scale-105 cursor-pointer transition ease-out">
            <Link href="/" className="relative text-bold text-white text-xl">
              <div>
                <Image
                  src={"/images/Back.png"}
                  width={!isMobile ? 45 : 35}
                  height={!isMobile ? 32 : 25}
                  alt="Home"
                  quality={100}
                />
              </div>
            </Link>
          </div>
        )}
        {img && (
          <Image
            src={img}
            width={width}
            height={height}
            alt="Menu"
            quality={100}
          />
        )}
      </div>
    </div>
  );
}

export default PageHeader;
