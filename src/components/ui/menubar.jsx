import * as React from "react";
import * as MenubarPrimitive from "@radix-ui/react-menubar";
import { Check, ChevronRight, Circle } from "lucide-react";

const MenubarMenu = MenubarPrimitive.Menu;
const MenubarGroup = MenubarPrimitive.Group;
const MenubarPortal = MenubarPrimitive.Portal;
const MenubarSub = MenubarPrimitive.Sub;
const MenubarRadioGroup = MenubarPrimitive.RadioGroup;

const Menubar = React.forwardRef(({ className, ...props }, ref) => (
  <MenubarPrimitive.Root
    ref={ref}
    className={`menubar-root ${className || ""}`}
    {...props}
  />
));

const MenubarTrigger = React.forwardRef(({ className, ...props }, ref) => (
  <MenubarPrimitive.Trigger
    ref={ref}
    className={`menubar-trigger ${className || ""}`}
    {...props}
  />
));

const MenubarSubTrigger = React.forwardRef(({ className, inset, children, ...props }, ref) => (
  <MenubarPrimitive.SubTrigger
    ref={ref}
    className={`menubar-item ${inset ? "menubar-inset" : ""} ${className || ""}`}
    {...props}
  >
    {children}
    <ChevronRight style={{ marginLeft: "auto", width: "1rem", height: "1rem" }} />
  </MenubarPrimitive.SubTrigger>
));

const MenubarContent = React.forwardRef(({ className, align = "start", alignOffset = -4, sideOffset = 8, ...props }, ref) => (
  <MenubarPrimitive.Portal>
    <MenubarPrimitive.Content
      ref={ref}
      align={align}
      alignOffset={alignOffset}
      sideOffset={sideOffset}
      className={`menubar-content ${className || ""}`}
      {...props}
    />
  </MenubarPrimitive.Portal>
));

const MenubarItem = React.forwardRef(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Item
    ref={ref}
    className={`menubar-item ${inset ? "menubar-inset" : ""} ${className || ""}`}
    {...props}
  />
));

const MenubarCheckboxItem = React.forwardRef(({ className, children, checked, ...props }, ref) => (
  <MenubarPrimitive.CheckboxItem
    ref={ref}
    className={`menubar-item menubar-inset ${className || ""}`}
    checked={checked}
    {...props}
  >
    <span className="menubar-indicator">
      <MenubarPrimitive.ItemIndicator>
        <Check style={{ width: "1rem", height: "1rem" }} />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.CheckboxItem>
));

const MenubarRadioItem = React.forwardRef(({ className, children, ...props }, ref) => (
  <MenubarPrimitive.RadioItem
    ref={ref}
    className={`menubar-item menubar-inset ${className || ""}`}
    {...props}
  >
    <span className="menubar-indicator">
      <MenubarPrimitive.ItemIndicator>
        <Circle style={{ width: "0.5rem", height: "0.5rem", fill: "currentColor" }} />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.RadioItem>
));

const MenubarSeparator = React.forwardRef(({ className, ...props }, ref) => (
  <MenubarPrimitive.Separator 
    ref={ref} 
    className={`menubar-separator ${className || ""}`} 
    {...props} 
  />
));

const MenubarShortcut = ({ className, ...props }) => (
  <span className={`menubar-shortcut ${className || ""}`} {...props} />
);

export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubTrigger,
  MenubarShortcut,
  // ... rest of exports
};