import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  des?: string;
}

const TitleHeading: React.FC<Props> = ({ children, des }) => {
  return (
    <div className="max-w-xl mx-auto text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-6">
        {children}
      </h2>
      {des && <p className="text-gray-600 leading-relaxed">{des}</p>}
    </div>
  );
};

export { TitleHeading };
