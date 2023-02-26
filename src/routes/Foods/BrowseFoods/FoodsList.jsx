import { Card } from "react-bootstrap";

/**
 *
 * @param {{foods: [import("../../../context/userContext").TFood]}} props
 * @returns
 */
export default function FoodsList({ foods }) {
  if (foods.length === 0) return <p>Could not find foods.</p>;

  return (
    <div className="d-flex flex-md-row flex-column gap-3 flex-wrap">
      {foods.map((food) => {
        return (
          <Card key={food.id}>
            <Card.Img src={food.photo} />
            <Card.ImgOverlay>
              <Card.Body className="bg-dark bg-gradient text-white bg-opacity-50 rounded-2">
                <Card.Title>{food.name}</Card.Title>
                <Card.Text>{food.description}</Card.Text>
              </Card.Body>
            </Card.ImgOverlay>
          </Card>
        );
      })}
    </div>
  );
}
