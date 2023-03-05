import { Button, Form } from "react-bootstrap";

export default function LoginForm({ handleSubmit, submitText }) {
  return (
    <Form className="d-flex flex-column gap-3" onSubmit={handleSubmit}>
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
      <Button type="submit">{submitText}</Button>
    </Form>
  );
}
