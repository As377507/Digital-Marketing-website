import * as React from "react";
import { Drawer as DrawerPrimitive } from "vaul";

const Drawer = ({ shouldScaleBackground = true, ...props }) => (
  <DrawerPrimitive.Root shouldScaleBackground={shouldScaleBackground} {...props} />
);
Drawer.displayName = "Drawer";

const DrawerTrigger = DrawerPrimitive.Trigger;
const DrawerPortal = DrawerPrimitive.Portal;
const DrawerClose = DrawerPrimitive.Close;

const DrawerOverlay = React.forwardRef(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay
    ref={ref}
    className={`drawer-overlay ${className || ""}`}
    {...props}
  />
));

const DrawerContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerPrimitive.Content
      ref={ref}
      className={`drawer-content ${className || ""}`}
      {...props}
    >
      <div className="drawer-handle" />
      {children}
    </DrawerPrimitive.Content>
  </DrawerPortal>
));

const DrawerHeader = ({ className, ...props }) => (
  <div className={`drawer-header ${className || ""}`} {...props} />
);

const DrawerFooter = ({ className, ...props }) => (
  <div className={`drawer-footer ${className || ""}`} {...props} />
);

const DrawerTitle = React.forwardRef(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title
    ref={ref}
    className={`drawer-title ${className || ""}`}
    {...props}
  />
));

const DrawerDescription = React.forwardRef(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description
    ref={ref}
    className={`drawer-description ${className || ""}`}
    {...props}
  />
));

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
};