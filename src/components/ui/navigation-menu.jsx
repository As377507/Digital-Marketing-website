import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { ChevronDown } from "lucide-react";

const NavigationMenu = React.forwardRef(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={`nav-menu-root ${className || ""}`}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
));

const NavigationMenuList = React.forwardRef(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={`nav-menu-list ${className || ""}`}
    {...props}
  />
));

const NavigationMenuItem = NavigationMenuPrimitive.Item;

const NavigationMenuTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={`nav-menu-trigger ${className || ""}`}
    {...props}
  >
    {children}
    <ChevronDown aria-hidden="true" />
  </NavigationMenuPrimitive.Trigger>
));

const NavigationMenuContent = React.forwardRef(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={`nav-menu-content ${className || ""}`}
    {...props}
  />
));

const NavigationMenuViewport = React.forwardRef(({ className, ...props }, ref) => (
  <div className="nav-menu-viewport-wrapper">
    <NavigationMenuPrimitive.Viewport
      ref={ref}
      className={`nav-menu-viewport ${className || ""}`}
      {...props}
    />
  </div>
));

const NavigationMenuLink = NavigationMenuPrimitive.Link;

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuViewport,
};