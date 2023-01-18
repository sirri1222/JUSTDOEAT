import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import IdPwFind from "./pages/IdPwFind";
import Login from "./pages/Login";
import Header from "./components/home_p/Header";
import Footer from "./components/Footer";

import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import About from "./pages/About";
import Detail from "./pages/Detail";
import Password from "./pages/Password";

import Buy from "./pages/Buy";

import ShoppingBag from "./pages/ShoppingBag";



function App() {


  return (
    <Router>
      <div>
     
        <Header />

        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />

        </Routes>
        <div className="max-w-6xl mx-auto ">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/idpwfind" element={<IdPwFind />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/password" element={<Password />} />
            <Route path="/shoppingbag" element={<ShoppingBag />} />

            <Route path="/buy" element={<Buy />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
