"use client";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { useState, useEffect } from "react";

export default function LayoutWrapper({ children }) {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > 100 && currentY < lastScrollY) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }

      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <Header isFixed={isFixed} />
      <main style={{ paddingTop: isFixed ? "100px" : "0" }}>{children}</main>
      <Footer />
    </>
  );
}
