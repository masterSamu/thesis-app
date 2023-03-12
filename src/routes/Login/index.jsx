import PageLayout from "../../components/layouts/PageLayout";
import CustomLogin from "./CustomLogin";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <PageLayout>
      <div className="d-flex flex-column gap-3">
        <CustomLogin />
      </div>
      <div className="d-flex flex-row justify-content-center align-items-center flex-wrap gap-3">
        <span>Dont't have an account yet?</span>
        <Link to="join">
          <Button variant="outline-primary">Join</Button>
        </Link>
      </div>
    </PageLayout>
  );
}
