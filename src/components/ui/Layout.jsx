import React from "react";
import "./Layout.css";

import Navbar from "../nav/Navbar";
import Footer from "../Footer/Footer";

function Layout({ children }) {
  return (
    <div className="layout">
      <header className="header-cont">
        <nav>
          <Navbar />
        </nav>
      </header>
      <main className="main-cont">{children}</main>
      <footer className="footer-cont">
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
