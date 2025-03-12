"use client"

import React from "react";

export default function Layout({ children }) {
  return (
    <div
      className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center"
    >
      {children}
    </div>
  );
}
