import { collection, getDocs } from "firebase/firestore";
import {db} from "../components/firebase";

async function GetProducts() {
    const querySnapshot = await getDocs(collection(db, "products"));
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        console.log(`${doc.id}`);
    });
}

export default GetProducts;