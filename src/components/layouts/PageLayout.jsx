import { Container } from "react-bootstrap";

/**
 * Renders layout for page. Add page content as a children.
 * @param {{children: JSX.Element}} props
 * @returns {JSX.Element}
 */
export default function PageLayout({ children }) {
  return (
    <Container className="d-flex flex-column gap-4 my-3">{children}</Container>
  );
}
