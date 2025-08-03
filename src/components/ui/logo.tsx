import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className="">
      <Image src="/logo.svg" alt="logo" width={100} height={60} />
    </div>
  );
};

export default Logo;
