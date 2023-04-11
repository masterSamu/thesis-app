import PageLayout from "../../../components/layouts/PageLayout";
import FoodForm from "./FoodForm";
import { useNavigate } from "react-router-dom";
import { useFood } from "../../../context/foodContext";
import { useUser } from "../../../context/userContext";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../../firebase-config";

export default function AddFood() {
  const { saveFood } = useFood();
  const { user } = useUser();
  const navigate = useNavigate();

  const handleSave = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const description = e.target.description.value;
    const photo = e.target.photo.files[0];

    // Save image file to storage
    const fileRef = ref(storage, name);
    const uploadTask = uploadBytesResumable(fileRef, photo);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
      },
      (error) => {
        console.error(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          console.log("File available at", downloadURL);
          // Save to database
          saveFood({ name, description, photo: downloadURL, uid: user })
            .then(() => {
              navigate("/foods/browse");
            })
            .catch((error) => console.error(error));
        });
      }
    );
  };

  return (
    <PageLayout>
      <h1>Add Food</h1>
      <FoodForm handleSubmit={handleSave} />
    </PageLayout>
  );
}
