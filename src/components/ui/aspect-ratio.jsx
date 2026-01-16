import * as React from "react";
import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";

const AspectRatio = React.forwardRef(({ className, ratio = 1, ...props }, ref) => (
  <AspectRatioPrimitive.Root
    ref={ref}
    ratio={ratio}
    className={`aspect-ratio-container ${className || ""}`}
    {...props}
  />
));

AspectRatio.displayName = "AspectRatio";

export { AspectRatio };