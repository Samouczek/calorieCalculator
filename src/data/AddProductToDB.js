import { collection, addDoc } from "firebase/firestore";
import {db} from "../components/firebase";


async function AddProductToDB(newName, newCalories, newProteins, newCarbs, newFats) {
    try {
        let product = {
            name: newName,
            calories: newCalories,
            proteins: newProteins,
            carbs: newCarbs,
            fats: newFats
        }
            await db.collection("users")
                .doc("Kasia")
                .collection("products")
                .add(product)
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}
export default AddProductToDB;