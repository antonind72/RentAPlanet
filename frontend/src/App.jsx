import { Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Creation from "./pages/Creation";
import Profil from "./pages/Profil";
import Error from "./pages/Error";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./Style/App.css";

function App() {
  const { pathname } = useLocation();

  const [myCreation, setCreation] = useState([]);
  return (
    <div className="App">
      {pathname !== "/" && <Navbar />}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/shop" element={<Shop />} />

        <Route
          exact
          path="/creation"
          element={
            <Creation myCreation={myCreation} setCreation={setCreation} />
          }
        />

        <Route
          exact
          path="/profil"
          element={<Profil myCreation={myCreation} />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
