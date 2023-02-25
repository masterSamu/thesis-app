import { useState } from "react";
import PageLayout from "../../components/layouts/PageLayout";
import CustomLogin from "./CustomLogin";
import PrebuiltLogin from "./PreBuiltLogin";
import { Button } from "react-bootstrap";

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
    </PageLayout>
  );
}
