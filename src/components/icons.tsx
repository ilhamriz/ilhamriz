import { cn } from "@/lib/utils";

export const ArrowUpRight = ({
  size = 24,
  className = "",
  useAnimation = true,
}) => (
  <div
    className={
      useAnimation
        ? "group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
        : ""
    }
  >
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={cn("fill-foreground", className)}
      aria-hidden
    >
      <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
    </svg>
  </div>
);
export const ArrowRight = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={cn("fill-foreground", className)}
    aria-hidden
  >
    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
  </svg>
);
export const ArrowLeft = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={cn("fill-foreground", className)}
    aria-hidden
  >
    <path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path>
  </svg>
);
export const Close = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 18 18"
    fill="none"
    className={cn("stroke-foreground", className)}
    aria-hidden
  >
    <path d="M3 3L15 15M15 3L3 15" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);
export const MenuIcon = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    className={cn("stroke-foreground", className)}
    aria-hidden
  >
    <path d="M3 7H17" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M3 13H13" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);
export const FileDownload = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={cn("fill-foreground", className)}
    aria-hidden
  >
    <path d="M13 12H16L12 16L8 12H11V8H13V12ZM15 4H5V20H19V8H15V4ZM3 2.9918C3 2.44405 3.44749 2 3.9985 2H16L20.9997 7L21 20.9925C21 21.5489 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5447 3 21.0082V2.9918Z" />
  </svg>
);
