import React, { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";

interface Props {
  children: ReactNode;
  des?: string;
  subTitle?: string;
}

const TitleHeading: React.FC<Props> = ({ children, des, subTitle }) => {
  return (
    <div className="max-w-xl mx-auto text-center mb-16">
      {subTitle && (
        <div className="inline-block bg-primary/10 px-4 rounded-full mb-4">
          <span className="text-primary font-medium text-xs leading-normal">
            {subTitle}
          </span>
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-6">
        {children}
      </h2>
      {des && <p className="text-gray-600 leading-relaxed">{des}</p>}
    </div>
  );
};

export { TitleHeading };
