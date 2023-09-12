import React from "react";
import Navbar from "./Navbar";

function Layout({ children, currentPage }) {
  return (
    <div>
      <Navbar currentPage={currentPage} />
      <main>{children}</main>
    </div>
  );
}

export default Layout;
