import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";

const Toggle = React.forwardRef(({ className, variant = "default", size = "default", ...props }, ref) => {
  // Construct classes manually to replace CVA
  const variantClass = `toggle-${variant}`;
  const sizeClass = `toggle-size-${size}`;
  
  return (
    <TogglePrimitive.Root
      ref={ref}
      className={`toggle-root ${variantClass} ${sizeClass} ${className || ""}`}
      {...props}
    />
  );
});

Toggle.displayName = "Toggle";

export { Toggle };