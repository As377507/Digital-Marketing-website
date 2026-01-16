import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

function Calendar({ className, classNames, showOutsideDays = true, ...props }) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={`calendar-root ${className || ""}`}
      classNames={{
        months: "rdp-months",
        month: "rdp-month",
        caption: "rdp-caption",
        caption_label: "rdp-caption_label",
        nav: "rdp-nav",
        nav_button: "rdp-nav_button",
        nav_button_previous: "rdp-nav_button_previous",
        nav_button_next: "rdp-nav_button_next",
        table: "rdp-table",
        head_row: "rdp-head_row",
        head_cell: "rdp-head_cell",
        row: "rdp-row",
        cell: "rdp-cell",
        day: "rdp-day",
        day_range_end: "rdp-day-range-end",
        day_selected: "rdp-day_selected",
        day_today: "rdp-day_today",
        day_outside: "rdp-day_outside",
        day_disabled: "rdp-day_disabled",
        day_range_middle: "rdp-day_range_middle",
        day_hidden: "rdp-day_hidden",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ..._props }) => <ChevronLeft size={16} />,
        IconRight: ({ ..._props }) => <ChevronRight size={16} />,
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };