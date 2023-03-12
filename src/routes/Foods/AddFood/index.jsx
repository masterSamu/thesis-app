import PageLayout from "../../../components/layouts/PageLayout";
import FoodForm from "./FoodForm";
import { useNavigate } from "react-router-dom";
import { useFood } from "../../../context/foodContext";

export default function AddFood() {
  const { saveFood } = useFood();
  const navigate = useNavigate();

  const handleSave = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const description = e.target.description.value;
    const photo = e.target.photo.files[0];

    saveFood({ name, description, photo });
    navigate("/foods/browse");
  };

  return (
    <PageLayout>
      <h1>Add Food</h1>
      <FoodForm handleSubmit={handleSave} />
    </PageLayout>
  );
}
