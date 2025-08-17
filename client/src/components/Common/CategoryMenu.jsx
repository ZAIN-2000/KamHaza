import React, { useMemo, useRef } from "react";
import { Button } from "primereact/button";
import { TieredMenu } from "primereact/tieredmenu";

/**
 * Props:
 * - categories: array like [{ name, icon?, sub?: [string] }]
 * - onSelect: (categoryName: string, subName?: string) => void
 * - activeLabel?: string (text to show on the trigger)
 */
export default function CategoryMenu({ categories = [], onSelect, activeLabel = "All Categories" }) {
  const menuRef = useRef(null);

  const model = useMemo(() => {
    return categories.map((cat) => {
      const base = {
        label: cat.name,
        icon: cat.icon, // e.g. "pi pi-mobile" (optional)
        command: () => onSelect?.(cat.name),
      };
      if (Array.isArray(cat.sub) && cat.sub.length) {
        base.items = cat.sub.map((s) => ({
          label: s,
          command: () => onSelect?.(cat.name, s),
        }));
      }
      return base;
    });
  }, [categories, onSelect]);

  return (
    <div className="categorybar">
      <Button
        label={activeLabel}
        icon="pi pi-list"
        className="btn-primary category-trigger"
        onClick={(e) => menuRef.current?.toggle(e)}
      />
      <TieredMenu
        model={model}
        popup
        ref={menuRef}
        breakpoint="960px"
        className="category-menu"
      />
    </div>
  );
}