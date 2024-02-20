import React from 'react';

export const ChevronDownIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#111111"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-chevron-down"
    {...props}
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);
