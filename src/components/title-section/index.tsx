import Chip from "@/components/ui/chip";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  des?: string;
  subTitle?: string;
}

const TitleHeading: React.FC<Props> = ({ children, des, subTitle }) => {
  return (
    <div className="max-w-xl mx-auto text-center mb-8 md:mb-16">
      {subTitle && <Chip data-aos="fade-up" label={subTitle} />}
      <h2
        className="text-2xl md:text-4xl font-bold text-primary mt-2 mb-6"
        data-aos="fade-up"
      >
        {children}
      </h2>
      {des && (
        <p
          className="text-gray-600 leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {des}
        </p>
      )}
    </div>
  );
};

export { TitleHeading };
