import * as React from "react";
import { Command as CommandPrimitive } from "cmdk";
import { Search } from "lucide-react";
import { Dialog, DialogContent } from "./Dialog"; // Using your vanilla Dialog

const Command = React.forwardRef(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={`command-root ${className || ""}`}
    {...props}
  />
));
Command.displayName = "Command";

const CommandDialog = ({ children, ...props }) => {
  return (
    <Dialog {...props}>
      <DialogContent className="overflow-hidden p-0">
        <Command>
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  );
};

const CommandInput = React.forwardRef(({ className, ...props }, ref) => (
  <div className="command-input-wrapper">
    <Search />
    <CommandPrimitive.Input
      ref={ref}
      className={`command-input ${className || ""}`}
      {...props}
    />
  </div>
));

const CommandList = React.forwardRef(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={`command-list ${className || ""}`}
    {...props}
  />
));

const CommandEmpty = React.forwardRef((props, ref) => (
  <CommandPrimitive.Empty 
    ref={ref} 
    className="command-empty" 
    {...props} 
  />
));

const CommandGroup = React.forwardRef(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={`command-group ${className || ""}`}
    {...props}
  />
));

const CommandSeparator = React.forwardRef(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator 
    ref={ref} 
    className={`command-separator ${className || ""}`} 
    {...props} 
  />
));

const CommandItem = React.forwardRef(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={`command-item ${className || ""}`}
    {...props}
  />
));

const CommandShortcut = ({ className, ...props }) => (
  <span className={`command-shortcut ${className || ""}`} {...props} />
);

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
};