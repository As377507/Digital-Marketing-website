import * as React from "react";

const Alert = React.forwardRef(({ className, variant = "default", ...props }, ref) => {
  // Map the variant prop to our CSS classes
  const variantClass = variant === "destructive" ? "alert-destructive" : "alert-default";
  
  return (
    <div
      ref={ref}
      role="alert"
      className={`alert ${variantClass} ${className || ""}`}
      {...props}
    />
  );
});
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={`alert-title ${className || ""}`}
    {...props}
  />
));
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={`alert-description ${className || ""}`}
    {...props}
  />
));
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription };