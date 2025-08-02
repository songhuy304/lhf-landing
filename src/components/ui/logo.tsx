import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className="">
      <Image src="/logo.png" alt="logo" width={160} height={100} />
    </div>
  );
};

export default Logo;
