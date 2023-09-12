import React from "react";
import Navbar from "./Navbar";
import Layout from "./Layout";

function Home() {
  return (
    <body className="splash">
      <div>
        <Layout currentPage={Home} />
        <h1>Welcome to the home Page</h1>
      </div>
    </body>
  );
}
export default Home;
