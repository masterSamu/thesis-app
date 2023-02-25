import { useContext } from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AppContext } from "../context/appContext";

export default function Navbar() {
  const { logout } = useContext(AppContext);

  return (
    <Nav>
      <Nav.Item as={Link} to="/recipes">
        Browse
      </Nav.Item>
      <Nav.Item as={Link} to="/recipes/add">
        Add
      </Nav.Item>
      <div>
        <Nav.Item onClick={logout}>Logout</Nav.Item>
      </div>
    </Nav>
  );
}
