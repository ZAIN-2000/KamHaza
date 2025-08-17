import React from "react";
import { Button } from "primereact/button";

/**
 * Usage:
 * <PillButton>Home</PillButton>
 * <PillButton variant="outline" size="sm">Login / Register</PillButton>
 * <PillButton as="a" href="/products">Products</PillButton>
 * <PillButton prime onClick={...}>PrimeReact Button</PillButton>
 */
export default function PillButton({
  children,
  variant = "primary", // 'primary' | 'outline' | 'ghost'
  size = "md",         // 'sm' | 'md' | 'lg'
  prime = false,       // use PrimeReact Button or plain <button>/<a>
  as,
  className = "",
  ...props
}) {
  const base = `pill pill--${variant} pill--${size} ${className}`.trim();

  if (prime) {
    return (
      <Button className={`pill ${base}`} label={typeof children === 'string' ? children : undefined} {...props}>
        {typeof children !== 'string' ? children : null}
      </Button>
    );
  }

  const El = as || "button";
  return (
    <El className={base} {...props}>
      {children}
    </El>
  );
}