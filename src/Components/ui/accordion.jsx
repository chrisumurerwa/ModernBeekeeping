"use client";

import React from "react";

export function Accordion({ children }) {
  return <div>{children}</div>;
}

export function AccordionItem({ children }) {
  return <div className="border-b">{children}</div>;
}

export function AccordionTrigger({ children }) {
  return (
    <button className="w-full text-left font-medium py-2">
      {children}
    </button>
  );
}

export function AccordionContent({ children }) {
  return <div className="px-2 pb-2">{children}</div>;
}
1