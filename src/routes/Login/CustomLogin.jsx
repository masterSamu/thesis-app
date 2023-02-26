import { Button, Form } from "react-bootstrap";
import { useUser } from "../../context/userContext";
import { useNavigate } from "react-router-dom";

export default function CustomLogin() {
  const { login } = useUser();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (email && password) {
      login({ email, password });
      navigate("/foods/browse");
    }
  };

  return (
    <Form className="d-flex flex-column gap-3" onSubmit={handleSubmit}>
      <h3>Custom Login Form</h3>
      <Form.Group>
        <Form.FloatingLabel label="email">
          <Form.Control type="email" name="email" />
        </Form.FloatingLabel>
      </Form.Group>
      <Form.Group>
        <Form.FloatingLabel label="password">
          <Form.Control type="password" name="password" />
        </Form.FloatingLabel>
      </Form.Group>
      <Button type="submit">Login</Button>
    </Form>
  );
}
