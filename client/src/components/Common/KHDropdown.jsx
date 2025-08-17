// src/components/KHDropdown.jsx
import React, { useRef } from "react";
import { TieredMenu } from "primereact/tieredmenu";
import { Button } from "primereact/button";

/**
 * KamHaza unified dropdown (pill trigger + rounded panel)
 *
 * Props:
 *  - label: string
 *  - model: PrimeReact TieredMenu model
 *  - size: "sm" | "md" | "lg"
 *  - variant: "primary" | "outline" | "ghost"
 *  - align: "left" | "right"
 *  - theme: "light" | "dark"
 *  - hoverOpen: boolean (default true)
 *  - className, buttonClassName, menuClassName: optional extra classes
 */
export default function KHDropdown({
  label = "Menu",
  model = [],
  size = "md",
  variant = "primary",
  align = "left",
  theme = "light",
  hoverOpen = true,
  className = "",
  buttonClassName = "",
  menuClassName = "",
}) {
  const menuRef = useRef(null);

  const handleClick = (event) => {
    menuRef.current?.toggle(event);
  };

  const handleMouseEnter = (event) => {
    if (!hoverOpen) return;
    const isOpen = !!menuRef.current?.container?.offsetParent;
    if (!isOpen) menuRef.current?.show(event);
  };

  // Build classes
  const panelClasses = [
    "kh-menu",
    align === "right" ? "kh-menu--right" : "kh-menu--left",
    theme === "dark" ? "kh-menu--dark" : "kh-menu--light",
    menuClassName,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={`kh-dropdown ${className}`}>
      <TieredMenu popup ref={menuRef} model={model} className={panelClasses} />
      <Button
        type="button"
        label={label}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        className={`pill pill--${variant} pill--${size} kh-dropdown-trigger ${buttonClassName}`}
      />
    </div>
  );
}