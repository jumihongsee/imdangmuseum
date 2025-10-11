"use client";

import SubLayoutWrapper from "./SubLayoutWrapper.js";

export default function RootLayout({ children }) {
  return (
    <>
      <SubLayoutWrapper>{children}</SubLayoutWrapper>
    </>
  );
}
