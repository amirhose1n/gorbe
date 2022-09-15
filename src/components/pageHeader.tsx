import Image from "next/image";
import Link from "next/link";

function PageHeader({ img }: { img: string }) {
  return (
    <div className="flex justify-between items-center">
      <Image
        src={img}
        width={240}
        height={50}
        alt="Illustorator"
        quality={100}
      />
      <Link href="/">
        <a>
          <p className="text-bold text-white text-xl transition-all duration-150 hover:text-dark-50">
            HOME
          </p>
        </a>
      </Link>
    </div>
  );
}

export default PageHeader;
