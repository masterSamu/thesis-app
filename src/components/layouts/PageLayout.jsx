import { useContext } from "react";
import { Container } from "react-bootstrap";
import { AppContext } from "../../context/appContext";
import Navbar from "../Navbar";

/**
 * Renders layout for page. Add page content as a children.
 * @param {{children: JSX.Element}} props
 * @returns {JSX.Element}
 */
export default function PageLayout({ children }) {
  const { user } = useContext(AppContext);

  return (
    <>
      {user ? <Navbar /> : null}
      <Container className="d-flex flex-column gap-4 my-3">
        {children}
      </Container>
    </>
  );
}
