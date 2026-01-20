import { NavLink } from "react-router-dom";
import "./style.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <strong>Card App</strong>
      <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/cards">Cards</NavLink>
        <NavLink to="/cards/new">Add Card</NavLink>
      </nav>
    </header>
  );
}
