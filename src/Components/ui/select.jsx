"use client";

import React from "react";

export function Select({ children }) {
  return <div>{children}</div>;
}

export function SelectTrigger({ children }) {
  return <button className="border px-4 py-2 rounded">{children}</button>;
}

export function SelectValue({ placeholder }) {
  return <span>{placeholder}</span>;
}

export function SelectContent({ children }) {
  return <div className="border mt-2 p-2">{children}</div>;
}

export function SelectItem({ value, children }) {
  return <div data-value={value}>{children}</div>;
}
