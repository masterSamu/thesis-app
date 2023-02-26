import { useContext } from "react";
import { Container } from "react-bootstrap";
import { useUser } from "../../context/userContext";
import Navbar from "../Navbar";

/**
 * Renders layout for page. Add page content as a children.
 * @param {{children: JSX.Element}} props
 * @returns {JSX.Element}
 */
export default function PageLayout({ children }) {
  const { user } = useUser();

  return (
    <>
      {user ? <Navbar /> : null}
      <Container className="d-flex flex-column gap-4 my-3">
        {children}
      </Container>
    </>
  );
}
