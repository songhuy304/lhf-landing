import Image from "next/image";
import React from "react";

const Logo = ({
  className,
  width,
  height,
}: {
  className?: string;
  width?: number;
  height?: number;
}) => {
  return (
    <Image
      src="/logo.svg"
      alt="logo"
      width={width || 100}
      height={height || 60}
      priority
      fetchPriority="high"
      className={className}
    />
  );
};

export default Logo;
