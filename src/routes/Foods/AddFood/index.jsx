import PageLayout from "../../../components/layouts/PageLayout";
import FoodForm from "./FoodForm";
import { useNavigate } from "react-router-dom";
import { useFood } from "../../../context/foodContext";
import { Storage } from "aws-amplify";

export default function AddFood() {
  const { saveFood } = useFood();
  const navigate = useNavigate();

  const handleSave = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const description = e.target.description.value;
    const photo = e.target.photo.files[0];
    try {
      // Add file to storage
      const result = await Storage.put(name, photo);
      if (result?.key) {
        saveFood({ name, description });
      }
      navigate("/foods/browse");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <PageLayout>
      <h1>Add Food</h1>
      <FoodForm handleSubmit={handleSave} />
    </PageLayout>
  );
}
