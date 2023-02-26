import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useUser } from "../context/userContext";

export default function Navbar() {
  const { logout } = useUser();

  return (
    <Nav
      className="gap-3 justify-content-between p-3"
      onSelect={(selectedKey) => setKey(selectedKey)}
    >
      <div className="d-flex flex-row gap-4 ">
        <Nav.Item>
          <Nav.Link as={Link} to="/foods/browse">
            Browse
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/foods/add">
            Add
          </Nav.Link>
        </Nav.Item>
      </div>
      <div>
        <Nav.Item onClick={logout}>
          <Nav.Link className="text-danger">Logout</Nav.Link>
        </Nav.Item>
      </div>
    </Nav>
  );
}
