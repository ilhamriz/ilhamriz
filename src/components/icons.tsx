import { cn } from "@/lib/utils";

export const ArrowUpRight = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={cn("fill-foreground", className)}
  >
    <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
  </svg>
);
export const ArrowRight = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={cn("fill-foreground", className)}
  >
    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
  </svg>
);
export const Close = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    className={cn("fill-foreground", className)}
  >
    <path d="M35 14.6924L25.6924 24L35 33.3076L33.3076 35L24 25.6924L14.6924 35L13 33.3076L22.3076 24L13 14.6924L14.6924 13L24 22.3076L33.3076 13L35 14.6924Z" />
  </svg>
);
export const MenuBig = ({ width = 28, height = 18, className = "" }) => (
  <svg
    width={width}
    height={height}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 28 18"
    className={cn("fill-foreground", className)}
  >
    <rect width="28" height="4" />
    <rect y="7" width="28" height="4" />
    <rect y="14" width="28" height="4" />
  </svg>
);
export const FileDownload = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={cn("fill-foreground", className)}
  >
    <path d="M13 12H16L12 16L8 12H11V8H13V12ZM15 4H5V20H19V8H15V4ZM3 2.9918C3 2.44405 3.44749 2 3.9985 2H16L20.9997 7L21 20.9925C21 21.5489 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5447 3 21.0082V2.9918Z" />
  </svg>
);
