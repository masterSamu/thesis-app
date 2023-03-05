import { Form } from "react-bootstrap";
import PageLayout from "../../components/layouts/PageLayout";
import LoginForm from "../../components/LoginForm";
import { useUser } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Join() {
  const { user, createUser } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate("/foods/browse");
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUser({ email, password });
  };

  return (
    <PageLayout>
      <h1>Create account</h1>
      <LoginForm handleSubmit={handleSubmit} submitText="Create account" />
    </PageLayout>
  );
}
