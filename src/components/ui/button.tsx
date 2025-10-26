import * as React from "react";
import { Slot } from "@radix-ui/react-slot@1.1.2";
import { cva, type VariantProps } from "class-variance-authority@0.7.1";

import { cn } from "./utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background text-foreground hover-gradient-soft hover:text-white hover:border-white btn-icon-white-hover dark:bg-input/30 dark:border-input",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  const { onPointerDown, ...restProps } = props as {
    onPointerDown?: React.PointerEventHandler<HTMLElement>;
  } & Record<string, unknown>;

  const handlePointerDown: React.PointerEventHandler<HTMLElement> = (event) => {
    // Call user handler first
    if (onPointerDown) onPointerDown(event);
    if (event.defaultPrevented) return;

    const target = event.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    const diameter = Math.max(rect.width, rect.height) * 2.4;
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const isLightVariant = variant === "outline" || variant === "ghost" || variant === "link";
    const rippleColor = isLightVariant ? "rgba(0,0,0,0.35)" : "rgba(255,255,255,0.35)";

    const ripple = document.createElement("span");
    ripple.className = "ripple-element";
    ripple.style.width = `${diameter}px`;
    ripple.style.height = `${diameter}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.style.background = rippleColor;

    target.appendChild(ripple);
    ripple.addEventListener("animationend", () => ripple.remove());
  };

  return (
    <Comp
      data-slot="button"
      className={cn(
        buttonVariants({ variant, size, className }),
        "relative overflow-hidden select-none",
      )}
      onPointerDown={handlePointerDown}
      {...(restProps as any)}
    />
  );
}

export { Button, buttonVariants };
