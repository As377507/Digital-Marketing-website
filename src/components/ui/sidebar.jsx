import * as React from "react";
import { PanelLeft } from "lucide-react";
import { Sheet, SheetContent } from "./Sheet"; // Use the Sheet we made earlier

const SidebarContext = React.createContext(null);

export const SidebarProvider = ({ defaultOpen = true, children, className }) => {
  const [open, setOpen] = React.useState(defaultOpen);
  const [openMobile, setOpenMobile] = React.useState(false);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const toggleSidebar = React.useCallback(() => {
    isMobile ? setOpenMobile(prev => !prev) : setOpen(prev => !prev);
  }, [isMobile]);

  const state = open ? "expanded" : "collapsed";

  return (
    <SidebarContext.Provider value={{ state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar }}>
      <div className={`sidebar-wrapper ${className || ""}`}>
        {children}
      </div>
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => React.useContext(SidebarContext);

export const Sidebar = React.forwardRef(({ variant = "sidebar", collapsible = "icon", children, className }, ref) => {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar();

  if (isMobile) {
    return (
      <Sheet open={openMobile} onOpenChange={setOpenMobile}>
        <SheetContent side="left" className="sidebar-mobile-content">
          {children}
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <div 
      className={`sidebar-container ${className || ""}`}
      data-state={state}
      data-variant={variant}
      data-collapsible={collapsible}
      ref={ref}
    >
      <div className="sidebar-inner">
        {children}
      </div>
    </div>
  );
});

export const SidebarTrigger = () => {
  const { toggleSidebar } = useSidebar();
  return (
    <button className="sidebar-trigger-btn" onClick={toggleSidebar}>
      <PanelLeft size={18} />
    </button>
  );
};

export const SidebarContent = ({ children }) => <div className="sidebar-content">{children}</div>;
export const SidebarGroup = ({ children }) => <div className="sidebar-group">{children}</div>;
export const SidebarMenu = ({ children }) => <ul className="sidebar-menu">{children}</ul>;

export const SidebarMenuButton = ({ children, isActive, ...props }) => (
  <button 
    className="sidebar-menu-button" 
    data-active={isActive}
    {...props}
  >
    {children}
  </button>
);