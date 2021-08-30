import { collection, addDoc } from "firebase/firestore";

async function AddProductToDB(newName, newCalories, newProteins, newCarbs, newFats) {
    try {
        const docRef = await addDoc(collection(db, "products"), {
            name: newName,
            calories: newCalories,
            proteins: newProteins,
            carbs: newCarbs,
            fates: newFats,
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}
