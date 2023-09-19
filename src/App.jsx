// import "./index.css";
// import Home from "./Components/Home";
// import { Routes, Route, Navigate } from "react-router-dom";
// import AllProducts from "./Components/AllProducts";
// import SingleProduct from "./Components/SingleProduct";
// import Navbar from "./Components/Navbar";
// import Cart from "./Components/Cart";
// import { useEffect, useState } from "react";
// import Account from "./Components/Account";
// import Logout from "./Components/Logout";

// function App() {
//   const [user, setUser] = useState(null);
//   const [token, setToken] = useState(null);

//   return (
//     <div>
//      <Navbar token={token} setToken={setToken} handleLogout={handleLogout}>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/products" element={<AllProducts />} />
//         <Route path="/products/:id" element={<SingleProduct />} />
//         <Route
//           path="/login"
//           element={
//             <Account
//               user={user}
//               setUser={setUser}
//               token={token}
//               setToken={setToken}
//             />
//           }
//         />
//         <Route path="/cart" element={<Cart user={user} setUser={setUser} />} />
//         <Route path="/logout" element={<Logout />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;

import "./index.css";
import Home from "./Components/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import AllProducts from "./Components/AllProducts";
import SingleProduct from "./Components/SingleProduct";
import Navbar from "./Components/Navbar";
import Cart from "./Components/Cart";
import { useEffect, useState } from "react";
import Account from "./Components/Account";
import Logout from "./Components/Logout";

function App() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const handleLogout = () => {
    // Clear the token and navigate to the login page
    setToken(null);
    navigate("/");
  };

  return (
    <div>
      <Navbar token={token} setToken={setToken} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route
          path="/login"
          element={
            <Account
              user={user}
              setUser={setUser}
              token={token}
              setToken={setToken}
            />
          }
        />
        <Route path="/cart" element={<Cart user={user} setUser={setUser} />} />
        <Route path="/logout" element={<Logout setToken={setToken} />} />
      </Routes>
    </div>
  );
}

export default App;
