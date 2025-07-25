import { DEFAULT_ICON_SIZES, VIEWBOX } from '@/lib/constants';

interface XIconProps {
  size?: number;
  className?: string;
}

export default function XIcon({ size = DEFAULT_ICON_SIZES.social, className = '' }: XIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox={VIEWBOX.square}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="X icon"
      className={className}
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
