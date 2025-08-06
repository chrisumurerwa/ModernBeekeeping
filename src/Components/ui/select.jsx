import React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown } from "lucide-react";

// Root Component
export const Select = SelectPrimitive.Root;

// Trigger
export const SelectTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={`flex items-center justify-between px-4 py-2 rounded-md border border-gray-300 text-sm text-gray-700 shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-amber-300 ${className}`}
    {...props}
  >
    {children}
    <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = "SelectTrigger";

// Value placeholder
export const SelectValue = SelectPrimitive.Value;

// Content (Dropdown)
export const SelectContent = React.forwardRef(({ children, className, ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={`bg-white border border-gray-300 rounded-md shadow-lg z-50 ${className}`}
      {...props}
    >
      <SelectPrimitive.Viewport className="p-1">{children}</SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = "SelectContent";

// Each Item in dropdown
export const SelectItem = React.forwardRef(({ children, className, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={`relative cursor-pointer select-none px-4 py-2 rounded-sm text-sm text-black hover:bg-amber-100 ${className}`}
    {...props}
  >
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    <SelectPrimitive.ItemIndicator className="absolute right-2 top-2">
      <Check className="h-4 w-4 text-green-600" />
    </SelectPrimitive.ItemIndicator>
  </SelectPrimitive.Item>
));
SelectItem.displayName = "SelectItem";
