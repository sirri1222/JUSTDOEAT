import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import IdPwFind from "./pages/IdPwFind";
import Login from "./pages/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import About from "./pages/About";
import Detail from "./pages/Detail";
<<<<<<< HEAD
import Buy from "./pages/Buy";
=======
import ListMenu from "./components/ListMenu";
>>>>>>> 0c1fbe8802a9ac8d6906012583ba0c0b13a0288b

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/idpwfind" element={<IdPwFind />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
<<<<<<< HEAD
          <Route path="/buy" element={<Buy />} />
          <Route path="*" element={<NotFound />} />
=======
          <Route path="/listMenu" element={<ListMenu />} />
          <Route path="*" element={<Home />} />
>>>>>>> 0c1fbe8802a9ac8d6906012583ba0c0b13a0288b
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
