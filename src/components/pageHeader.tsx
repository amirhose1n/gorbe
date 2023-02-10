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
    <div className="relative pt-12 pb-6 sm:py-12 sm:px-0">
      {isMobile && (
        <div className="absolute top-8 left-0 text-bold text-white text-xl transition-all duration-150 hover:text-dark-50">
          <Link href="/">
            <div>
              <Image
                src={"/images/Back.png"}
                width={!isMobile ? 45 : 35}
                height={!isMobile ? 32 : 25}
                alt="Home"
                quality={100}
                className="cursor-pointer"
              />
            </div>
          </Link>
        </div>
      )}
      <div className="flex w-full sm:justify-between items-center justify-center">
        {!isMobile && (
          <Link
            href="/"
            className="relative text-bold text-white text-xl transition-all duration-150 hover:text-dark-50"
          >
            <div>
              <Image
                src={"/images/Back.png"}
                width={!isMobile ? 45 : 35}
                height={!isMobile ? 32 : 25}
                alt="Home"
                quality={100}
                className="cursor-pointer"
              />
            </div>
          </Link>
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
