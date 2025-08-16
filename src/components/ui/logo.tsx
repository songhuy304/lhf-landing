import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <Image
      src="/logo.svg"
      alt="logo"
      width={100}
      height={60}
      priority
      fetchPriority="high"
    />
  );
};

export default Logo;
