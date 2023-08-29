import React from "react";
import "./Layout.css";

import Navbar from "../nav/Navbar";
import Footer from "../footer/Footer";

function Layout({ children }) {
  return (
    <>
      <div className="layout">
        <Navbar />
        <main className="main-cont">{children}</main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
