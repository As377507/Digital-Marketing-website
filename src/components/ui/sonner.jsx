import * as React from "react";
import { useTheme } from "next-themes";
import { Toaster as Sonner, toast } from "sonner";

const Toaster = ({ ...props }) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast: "toast",
          description: "group-[.toast]:muted-foreground",
          actionButton: "group-[.toast]:primary",
          cancelButton: "group-[.toast]:muted",
        },
      }}
      {...props}
    />
  );
};

export { Toaster, toast };