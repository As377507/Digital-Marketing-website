import * as React from "react";

const Textarea = React.forwardRef(({ className = "", ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={`textarea-root ${className}`}
      {...props}
    />
  );
});

Textarea.displayName = "Textarea";

export { Textarea };