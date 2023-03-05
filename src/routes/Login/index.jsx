import { useState } from "react";
import PageLayout from "../../components/layouts/PageLayout";
import CustomLogin from "./CustomLogin";
import PrebuiltLogin from "./PreBuiltLogin";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Login() {
  const [loginMethod, setLoginMethod] = useState("");

  if (loginMethod === "custom") {
    return (
      <PageLayout>
        <CustomLogin />
      </PageLayout>
    );
  } else if (loginMethod === "prebuilt") {
    return (
      <PageLayout>
        <PrebuiltLogin />
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="d-flex flex-column gap-3">
        <h1 className="text-center">Select login method</h1>
        <Button variant="primary" onClick={() => setLoginMethod("custom")}>
          Custom Login
        </Button>
        <Button variant="dark" onClick={() => setLoginMethod("prebuilt")}>
          Prebuilt Login
        </Button>
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
