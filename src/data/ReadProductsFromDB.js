import { collection, getDocs } from "firebase/firestore";
import {db} from "../components/firebase";

async function ReadProductsFromDB() {
    const rows = [];
    const querySnapshot = await getDocs(collection(db, "users","Kasia","products"));
    querySnapshot.forEach((doc) => {
        console.log(doc.id)
      // return   rows.push(createData(
      //       doc.data().name,
      //       parseFloat(doc.data().calories).toFixed(1),
      //       parseFloat(doc.data().proteins).toFixed(1),
      //       parseFloat(doc.data().carbs).toFixed(1),
      //       parseFloat(doc.data().fats).toFixed(1)
      //   ));
    });
    return rows;
}

function createData(name, calories, proteins, carbs, fats) {
    return { name, calories,proteins, carbs,  fats };
}

export default ReadProductsFromDB;