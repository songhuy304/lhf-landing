import React from "react";

interface IconProps {
  className?: string;
  size?: number;
}

export const InstagramIcon: React.FC<IconProps> = ({
  className = "",
  size = 24,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`lucide lucide-instagram ${className}`}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
    </svg>
  );
};

export const FacebookIcon: React.FC<IconProps> = ({
  className = "",
  size = 24,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`lucide lucide-facebook ${className}`}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
  );
};

export const LineIcon: React.FC<IconProps> = ({
  className = "",
  size = 24,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 236.271 236.271"
      fill="currentColor"
      className={className}
    >
      <g>
        <path d="M118.136,5.265C52.996,5.265,0,49.399,0,103.647c0,52.985,46.003,95.193,107.008,98.178   c4.137,0.189,7.655-2.987,7.858-7.124c0.202-4.137-2.987-7.655-7.125-7.858C54.87,184.256,15,148.49,15,103.647   c0-45.977,46.267-83.383,103.136-83.383s103.136,37.405,103.136,83.383c0,42.787-54.628,89.229-108.59,112.994   c-3.791,1.67-5.511,6.096-3.841,9.886c1.236,2.808,3.985,4.479,6.868,4.479c1.01,0,2.036-0.205,3.019-0.638   c28.936-12.743,57.466-31.556,78.277-51.616c25.689-24.764,39.268-50.734,39.268-75.105   C236.271,49.399,183.276,5.265,118.136,5.265z" />
        <path d="M60.082,79.668c-1.19-1.485-2.841-2.276-4.765-2.276c-1.923,0-3.564,0.806-4.747,2.331   c-1.084,1.409-1.609,3.338-1.609,5.902v39.135c0,2.742,0.563,4.741,1.723,6.111c1.232,1.457,3.14,2.196,5.67,2.196h21.267   c2.016,0,3.609-0.595,4.735-1.77c1.114-1.134,1.687-2.626,1.687-4.416c0-1.732-0.587-3.263-1.698-4.427   c-1.119-1.21-2.715-1.835-4.725-1.835H61.758V85.624C61.758,83.006,61.209,81.058,60.082,79.668z" />
        <path d="M93.756,77.392c-1.904,0-3.539,0.803-4.729,2.324c-1.083,1.386-1.633,3.374-1.633,5.909v40.041   c0,2.584,0.547,4.528,1.671,5.941c1.181,1.52,2.808,2.331,4.69,2.331c1.922,0,3.575-0.799,4.778-2.312   c1.114-1.413,1.677-3.417,1.677-5.961V85.624c0-2.561-0.567-4.563-1.685-5.951C97.314,78.179,95.666,77.392,93.756,77.392z" />
        <path d="M119.625,103.962l12.767,22.89c0.01,0.018,0.02,0.035,0.03,0.053c0.301,0.503,0.603,1.001,0.902,1.493l0.537,0.886   c0.602,0.973,1.195,1.749,1.824,2.392c0.744,0.768,1.535,1.327,2.411,1.704c0.934,0.381,1.881,0.559,2.93,0.559   c2.518,0,6.742-1.129,6.742-8.694v-39.96c0-2.431-0.483-4.268-1.479-5.615c-1.111-1.492-2.703-2.277-4.608-2.277   c-1.858,0-3.424,0.786-4.53,2.272c-0.997,1.375-1.475,3.207-1.475,5.621v22.619l-13.188-23.328l-0.678-1.245l-0.687-1.262   c-0.559-0.988-1.057-1.729-1.54-2.297c-0.574-0.703-1.27-1.275-2.069-1.7c-0.833-0.454-1.811-0.68-2.969-0.68   c-1.463,0-2.821,0.469-4.034,1.395c-1.171,0.875-2.03,2.038-2.539,3.444c-0.006,0.018-0.012,0.035-0.018,0.053   c-0.384,1.161-0.571,2.651-0.571,4.555v39.213c0,2.32,0.502,4.189,1.491,5.556c0.01,0.014,0.02,0.027,0.03,0.04   c1.144,1.499,2.733,2.29,4.597,2.29c1.835,0,3.409-0.783,4.551-2.265c1.044-1.361,1.572-3.251,1.572-5.622V103.962z" />
        <path d="M185.284,90.181c1.958,0,3.498-0.572,4.575-1.7c1.046-1.1,1.575-2.538,1.575-4.276c0-1.726-0.532-3.154-1.58-4.245   c-1.059-1.127-2.601-1.707-4.57-1.707h-23.262c-1.556,0-2.903,0.294-4.005,0.875c-1.221,0.659-2.117,1.686-2.68,3.061   c-0.478,1.162-0.71,2.595-0.71,4.378v38.193c0,2.745,0.57,4.746,1.743,6.118c1.215,1.448,3.121,2.189,5.653,2.189h23.941   c1.96,0,3.507-0.591,4.601-1.757c1.051-1.136,1.579-2.575,1.579-4.288c0-1.769-0.528-3.237-1.568-4.363   c-1.122-1.18-2.667-1.767-4.611-1.767h-18.524v-10.467h16.262c1.962,0,3.482-0.586,4.52-1.743c0.989-1.111,1.488-2.509,1.488-4.162   c0-1.686-0.518-3.086-1.538-4.163c-1.013-1.109-2.525-1.685-4.469-1.685h-16.262v-8.493H185.284z" />
      </g>
    </svg>
  );
};

export const HotPepperIcon: React.FC<IconProps> = ({
  className = "",
  size = 24,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 50 50"
      fill="none"
    >
      <rect width="50" height="50" fill="url(#pattern0_2024_2)" />
      <defs>
        <pattern
          id="pattern0_2024_2"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_2024_2" transform="scale(0.02)" />
        </pattern>
        <image
          id="image0_2024_2"
          width="50"
          height="50"
          preserveAspectRatio="none"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};
