import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-full border text-sm font-medium whitespace-nowrap transition-colors outline-none select-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: "border-accent bg-accent text-bg hover:bg-accent-hover",
        secondary:
          "border-border bg-bg-2 text-text hover:border-border-2 hover:bg-bg-3",
      },
      size: {
        default: "px-6 py-3",
        sm: "px-4 py-2 gap-1.5 text-xs",
        icon: "p-3",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

type ButtonAsButton = ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    href?: undefined;
  };

type ButtonAsLink = ComponentProps<"a"> &
  VariantProps<typeof buttonVariants> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

function Button({
  className,
  variant,
  size = "default",
  ...props
}: ButtonProps) {
  if ("href" in props && props.href) {
    return (
      <a
        data-slot="button"
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  }

  const { type = "button", ...buttonProps } = props as ButtonAsButton;

  return (
    <button
      data-slot="button"
      type={type}
      className={cn(buttonVariants({ variant, size }), className)}
      {...buttonProps}
    />
  );
}

export { Button, buttonVariants };
