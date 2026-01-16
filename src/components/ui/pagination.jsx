import * as React from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

const Pagination = ({ className, ...props }) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={`pagination-root ${className || ""}`}
    {...props}
  />
);

const PaginationContent = React.forwardRef(({ className, ...props }, ref) => (
  <ul ref={ref} className={`pagination-content ${className || ""}`} {...props} />
));

const PaginationItem = React.forwardRef(({ className, ...props }, ref) => (
  <li ref={ref} className={className} {...props} />
));

const PaginationLink = ({ className, isActive, size = "icon", ...props }) => (
  <a
    aria-current={isActive ? "page" : undefined}
    className={`pagination-link ${isActive ? "active" : ""} ${
      size === "icon" ? "size-icon" : ""
    } ${className || ""}`}
    {...props}
  />
);

const PaginationPrevious = ({ className, ...props }) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="default"
    className={`gap-1 pl-2.5 ${className || ""}`}
    style={{ display: "flex", gap: "0.25rem" }}
    {...props}
  >
    <ChevronLeft size={16} />
    <span>Previous</span>
  </PaginationLink>
);

const PaginationNext = ({ className, ...props }) => (
  <PaginationLink
    aria-label="Go to next page"
    size="default"
    className={`gap-1 pr-2.5 ${className || ""}`}
    style={{ display: "flex", gap: "0.25rem" }}
    {...props}
  >
    <span>Next</span>
    <ChevronRight size={16} />
  </PaginationLink>
);

const PaginationEllipsis = ({ className, ...props }) => (
  <span className={`pagination-ellipsis ${className || ""}`} {...props}>
    <MoreHorizontal size={16} />
    <span className="sr-only">More pages</span>
  </span>
);

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
};