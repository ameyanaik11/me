import { cn } from "./libs/utils";
import Link from "next/link";
import Image from "next/image";

// import LOGO from "/globe.svg";

interface LogoProps {
  className?: string;
  logoClassName?: string;
  width?: number;
  height?: number;
}

export default function Logo({
  className = "",
  logoClassName = "",
  width = 50,
  height = 50,
}: LogoProps) {
  const logoCls = cn(
    "flex items-center",
    "hover:opacity-80 transition-opacity",
    "cursor-pointer",
    "rounded-full",
    logoClassName
  );

  return (
    <Link
      href="/"
      className={cn("p-3 font-bold flex flex-row items-center", className)}
    >
      <Image
        // src={LOGO}
        src={"/globe.svg"}
        alt="Logo"
        width={width}
        height={height}
        className={logoCls}
      />
    </Link>
  );
}
