import { useEffect, useState } from "react";
import { useFood } from "../../../context/foodContext";
import { Card } from "react-bootstrap";

export default function FoodCard({ food }) {
  const { loadPhoto } = useFood();
  const [photo, setPhoto] = useState("");
  useEffect(() => {
    if (food) {
      loadPhoto(food.name).then((data) => {
        setPhoto(data);
      });
    }
  }, [food]);

  return (
    <Card key={food.id}>
      <Card.Img src={photo} />
      <Card.ImgOverlay>
        <Card.Body className="bg-dark bg-gradient text-white bg-opacity-50 rounded-2">
          <Card.Title>{food.name}</Card.Title>
          <Card.Text>{food.description}</Card.Text>
        </Card.Body>
      </Card.ImgOverlay>
    </Card>
  );
}
