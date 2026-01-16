import * as React from "react";

function Badge({ className, variant = "default", ...props }) {
  // Mapping the variant prop to our CSS classes
  const variantClasses = {
    default: "badge-default",
    secondary: "badge-secondary",
    destructive: "badge-destructive",
    outline: "badge-outline",
  };

  const variantClass = variantClasses[variant] || variantClasses.default;

  return (
    <div 
      className={`badge ${variantClass} ${className || ""}`} 
      {...props} 
    />
  );
}

export { Badge };