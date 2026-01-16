import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

const Sheet = SheetPrimitive.Root;
const SheetTrigger = SheetPrimitive.Trigger;
const SheetClose = SheetPrimitive.Close;
const SheetPortal = SheetPrimitive.Portal;

const SheetOverlay = React.forwardRef(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={`sheet-overlay ${className || ""}`}
    {...props}
    ref={ref}
  />
));

const SheetContent = React.forwardRef(({ side = "right", className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content
      ref={ref}
      className={`sheet-content sheet-content-${side} ${className || ""}`}
      {...props}
    >
      {children}
      <SheetPrimitive.Close className="sheet-close">
        <X size={16} />
        <span className="sr-only">Close</span>
      </SheetPrimitive.Close>
    </SheetPrimitive.Content>
  </SheetPortal>
));

const SheetHeader = ({ className, ...props }) => (
  <div className={`sheet-header ${className || ""}`} {...props} />
);

const SheetFooter = ({ className, ...props }) => (
  <div className={`sheet-footer ${className || ""}`} {...props} />
);

const SheetTitle = React.forwardRef(({ className, ...props }, ref) => (
  <SheetPrimitive.Title ref={ref} className={`sheet-title ${className || ""}`} {...props} />
));

const SheetDescription = React.forwardRef(({ className, ...props }, ref) => (
  <SheetPrimitive.Description ref={ref} className={`sheet-description ${className || ""}`} {...props} />
));

export {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetOverlay,
  SheetPortal,
  SheetTitle,
  SheetTrigger,
};