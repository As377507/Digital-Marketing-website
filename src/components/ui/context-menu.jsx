import * as React from "react";
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { Check, ChevronRight, Circle } from "lucide-react";

const ContextMenu = ContextMenuPrimitive.Root;
const ContextMenuTrigger = ContextMenuPrimitive.Trigger;
const ContextMenuGroup = ContextMenuPrimitive.Group;
const ContextMenuPortal = ContextMenuPrimitive.Portal;
const ContextMenuSub = ContextMenuPrimitive.Sub;
const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;

const ContextMenuSubTrigger = React.forwardRef(({ className, inset, children, ...props }, ref) => (
  <ContextMenuPrimitive.SubTrigger
    ref={ref}
    className={`context-sub-trigger ${inset ? "context-inset" : ""} ${className || ""}`}
    {...props}
  >
    {children}
    <ChevronRight style={{ marginLeft: "auto", width: "1rem", height: "1rem" }} />
  </ContextMenuPrimitive.SubTrigger>
));

const ContextMenuSubContent = React.forwardRef(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.SubContent
    ref={ref}
    className={`context-sub-content ${className || ""}`}
    {...props}
  />
));

const ContextMenuContent = React.forwardRef(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Portal>
    <ContextMenuPrimitive.Content
      ref={ref}
      className={`context-content ${className || ""}`}
      {...props}
    />
  </ContextMenuPrimitive.Portal>
));

const ContextMenuItem = React.forwardRef(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Item
    ref={ref}
    className={`context-item ${inset ? "context-inset" : ""} ${className || ""}`}
    {...props}
  />
));

const ContextMenuCheckboxItem = React.forwardRef(({ className, children, checked, ...props }, ref) => (
  <ContextMenuPrimitive.CheckboxItem
    ref={ref}
    className={`context-item context-inset ${className || ""}`}
    checked={checked}
    {...props}
  >
    <span className="context-indicator">
      <ContextMenuPrimitive.ItemIndicator>
        <Check style={{ width: "1rem", height: "1rem" }} />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.CheckboxItem>
));

const ContextMenuRadioItem = React.forwardRef(({ className, children, ...props }, ref) => (
  <ContextMenuPrimitive.RadioItem
    ref={ref}
    className={`context-item context-inset ${className || ""}`}
    {...props}
  >
    <span className="context-indicator">
      <ContextMenuPrimitive.ItemIndicator>
        <Circle style={{ width: "0.5rem", height: "0.5rem", fill: "currentColor" }} />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.RadioItem>
));

const ContextMenuLabel = React.forwardRef(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Label
    ref={ref}
    className={`context-label ${inset ? "context-inset" : ""} ${className || ""}`}
    {...props}
  />
));

const ContextMenuSeparator = React.forwardRef(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Separator 
    ref={ref} 
    className={`context-separator ${className || ""}`} 
    {...props} 
  />
));

const ContextMenuShortcut = ({ className, ...props }) => (
  <span className={`context-shortcut ${className || ""}`} {...props} />
);

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
};