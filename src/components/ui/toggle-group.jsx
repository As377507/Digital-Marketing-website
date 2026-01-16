import * as React from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";

const ToggleGroupContext = React.createContext({
  size: "default",
  variant: "default",
});

const ToggleGroup = React.forwardRef(({ className, variant = "default", size = "default", children, ...props }, ref) => (
  <ToggleGroupPrimitive.Root 
    ref={ref} 
    className={`toggle-group ${className || ""}`} 
    {...props}
  >
    <ToggleGroupContext.Provider value={{ variant, size }}>
      {children}
    </ToggleGroupContext.Provider>
  </ToggleGroupPrimitive.Root>
));

const ToggleGroupItem = React.forwardRef(({ className, children, variant, size, ...props }, ref) => {
  const context = React.useContext(ToggleGroupContext);
  
  // Item props override Group props
  const itemVariant = variant || context.variant;
  const itemSize = size || context.size;

  const combinedClasses = [
    "toggle-item",
    `toggle-item-${itemVariant}`,
    `toggle-item-${itemSize}`,
    className
  ].filter(Boolean).join(" ");

  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={combinedClasses}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  );
});

ToggleGroup.displayName = "ToggleGroup";
ToggleGroupItem.displayName = "ToggleGroupItem";

export { ToggleGroup, ToggleGroupItem };