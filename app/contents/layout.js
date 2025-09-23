"use client";

import SubLayoutWrapper from "./SubLayoutWrapper";

export default function RootLayout({ children }) {
  return (
    <>
      <SubLayoutWrapper>{children}</SubLayoutWrapper>
    </>
  );
}
