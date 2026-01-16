import * as React from "react";

function Skeleton({ className, ...props }) {
  return (
    <div 
      className={`skeleton ${className || ""}`} 
      {...props} 
    />
  );
}

export { Skeleton };