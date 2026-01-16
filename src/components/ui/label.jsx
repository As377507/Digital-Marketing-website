import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";

const Label = React.forwardRef(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={`label-root ${className || ""}`}
    {...props}
  />
));

Label.displayName = "Label";

export { Label };