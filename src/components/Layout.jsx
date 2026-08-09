import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header.jsx";
import Drawer from "./Drawer.jsx";
import { useReveal } from "../hooks/useReveal.js";

export default function Layout() {
  const { pathname } = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);

  // The home hero is dark, so the nav sits over it in light-on-dark mode.
  const overDark = pathname === "/";

  useReveal();

  // Close the drawer and jump to the top on every navigation.
  useEffect(() => {
    setDrawerOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  // Lock body scroll while the drawer is open.
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  // Escape closes the drawer.
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setDrawerOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <Header
        overDark={overDark}
        drawerOpen={drawerOpen}
        onToggleDrawer={() => setDrawerOpen((v) => !v)}
      />
      <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
      <main id="main">
        <Outlet />
      </main>
    </>
  );
}
