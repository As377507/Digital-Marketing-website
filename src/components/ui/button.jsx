import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

const Button = React.forwardRef(({ 
  className, 
  variant = "default", 
  size = "default", 
  asChild = false, 
  ...props 
}, ref) => {
  const Comp = asChild ? Slot : "button";

  // Dynamic class mapping
  const variantClass = `btn-${variant}`;
  const sizeClass = `btn-size-${size}`;

  return (
    <Comp
      className={`btn ${variantClass} ${sizeClass} ${className || ""}`}
      ref={ref}
      {...props}
    />
  );
});

Button.displayName = "Button";

export { Button };