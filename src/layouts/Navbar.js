import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link style={{ textDecoration: "none" }} to="/">
        Home
      </Link>
      <Link style={{ textDecoration: "none" }} to="/show">
        Show Book
      </Link>
      <Link style={{ textDecoration: "none" }} to="/add">
        Add Book
      </Link>
    </nav>
  );
};
export default Navbar;
