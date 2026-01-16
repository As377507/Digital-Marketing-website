import * as React from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";

const ScrollArea = React.forwardRef(({ className, children, ...props }, ref) => (
  <ScrollAreaPrimitive.Root 
    ref={ref} 
    className={`scroll-area-root ${className || ""}`} 
    {...props}
  >
    <ScrollAreaPrimitive.Viewport className="scroll-area-viewport">
      {children}
    </ScrollAreaPrimitive.Viewport>
    <ScrollBar />
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
));

const ScrollBar = React.forwardRef(({ className, orientation = "vertical", ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={`scrollbar-track ${className || ""}`}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb className="scrollbar-thumb" />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
));

ScrollArea.displayName = "ScrollArea";
ScrollBar.displayName = "ScrollBar";

export { ScrollArea, ScrollBar };