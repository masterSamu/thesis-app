import FoodCard from "./FoodCard";

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
        return <FoodCard food={food} />;
      })}
    </div>
  );
}
