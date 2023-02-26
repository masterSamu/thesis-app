import { Button, Form } from "react-bootstrap";

export default function FoodForm({ handleSubmit }) {
  return (
    <Form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
      <Form.Group>
        <Form.FloatingLabel label="Name">
          <Form.Control type="text" name="name" placeholder="Name" />
        </Form.FloatingLabel>
      </Form.Group>
      <Form.Group>
        <Form.FloatingLabel label="Description">
          <Form.Control
            as="textarea"
            name="description"
            placeholder="Description"
            rows={3}
          />
        </Form.FloatingLabel>
      </Form.Group>
      <Form.Group>
        <Form.Label>Image</Form.Label>
        <Form.Control type="file" accept="image/*" name="photo" />
      </Form.Group>

      <div>
        <Button variant="primary" type="submit">
          Save
        </Button>
      </div>
    </Form>
  );
}
