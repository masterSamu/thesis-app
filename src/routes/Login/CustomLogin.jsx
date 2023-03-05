import { useUser } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/LoginForm";
import { useEffect } from "react";

export default function CustomLogin() {
  const { user, login } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate("/foods/browse");
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (email && password) {
      login({ email, password });
    }
  };

  return (
    <>
      <h2>Custom Login Form</h2>
      <LoginForm handleSubmit={handleSubmit} submitText="Login" />
    </>
  );
}
