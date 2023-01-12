import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="flex flex-row">
      <Link to="/home">Home</Link>|<Link to="/about">about</Link>|
      <Link to="/detail">detail</Link>|<Link to="/idpwfind">idpwfind</Link>|
      <Link to="/login">login</Link>|<Link to="/notfound">notfound</Link>|
      <Link to="/signup">signup</Link>
    </div>
  );
};

export default Header;
