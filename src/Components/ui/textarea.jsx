"use client";

import React from "react";

export function Textarea({ value, onChange, placeholder }) {
  return (
    <textarea
      className="border rounded p-2 w-full min-h-[100px]"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
    />
  );
}
