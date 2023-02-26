import PageLayout from "../../../components/layouts/PageLayout";
import FoodsList from "./FoodsList";
import { useFood } from "../../../context/foodContext";

export default function BrowseFoods() {
  const { foods } = useFood();

  return (
    <PageLayout>
      <h1>Browse Foods</h1>
      <FoodsList foods={foods} />
    </PageLayout>
  );
}
