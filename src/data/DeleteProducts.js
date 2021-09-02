import {db} from "../components/firebase";

function DeleteProducts(user,productName) {
        const productToRemove = db.collection("users")
            .doc(user)
            .collection("product")
            .where("name", "==", productName);

        productToRemove.get().then((snapshot) => {
                snapshot.forEach((doc) => {
                        doc.ref.delete();
                        console.log("Remove: " + doc.id);
                })
        })
}