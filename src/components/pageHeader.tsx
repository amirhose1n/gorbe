import Image from "next/image";
import Link from "next/link";
import useIsMobile from "../hooks/useIsMobile";

function PageHeader({
  img,
  width = 240,
  height = 50,
}: {
  img: string;
  width: number;
  height: number;
}) {
  const isMobile = useIsMobile();
  return (
    <div className="flex sm:justify-between items-center pt-12 pb-6 md:py-12 md:px-0 relative justify-center">
      <Link
        href="/"
        className="absolute sm:relative top-8 left-0 cursor-pointer text-bold text-white text-xl transition-all duration-150 hover:text-dark-50"
      >
        <Image
          src={"/images/Back.png"}
          width={!isMobile ? 45 : 35}
          height={!isMobile ? 32 : 25}
          alt="Home"
          quality={100}
        />
      </Link>
      <Image
        src={img}
        width={width}
        height={height}
        alt="Illustorator"
        quality={100}
      />
    </div>
  );
}

export default PageHeader;
