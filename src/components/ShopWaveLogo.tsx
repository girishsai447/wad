
import type { SVGProps } from 'react';

export function ShopWaveLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 180 40"
      width="180"
      height="40"
      aria-label="ShopWave logo"
      {...props}
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: 'hsl(var(--accent))', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <style>
        {`
          .sw-text {
            font-family: var(--font-geist-sans, Arial, sans-serif);
            font-size: 30px;
            font-weight: bold;
            fill: url(#logoGradient);
          }
          .sw-wave {
            fill: hsl(var(--primary));
            opacity: 0.7;
          }
        `}
      </style>
      <path
        className="sw-wave"
        d="M 5 25 Q 15 15, 25 25 T 45 25 Q 55 15, 65 25 T 85 25 Q 95 15, 105 25 T 125 25 Q 135 15, 145 25 T 165 25 L 175 25 L 175 30 L 5 30 Z"
      />
      <text x="5" y="30" className="sw-text">
        ShopWave
      </text>
    </svg>
  );
}
