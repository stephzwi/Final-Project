import React from "react";
import Navbar from "./Navbar";
import Layout from "./Layout";

function Home() {
  return (
    <body className="splash">
      <body>
        <div className="blue"></div>
        <Layout currentPage={Home} />
      </body>

      <div className="Welcome">
        <h1>Welcome to the home page</h1>
      </div>
    </body>
  );
}

export default Home;
