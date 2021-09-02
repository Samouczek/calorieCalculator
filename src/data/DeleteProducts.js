import {db} from "../components/firebase";

function DeleteProducts(user,productName) {
                console.log(user);
        const productToRemove = db.collection("users")
            .doc(user)
            .collection("products")
            .where("name", "==", productName);
        console.log(productToRemove);
        productToRemove.get().then((snapshot) => {
                console.log(snapshot.size);
                console.log(snapshot.query);
                console.log(snapshot.docs);

                snapshot.forEach((doc) => {
                        console.log(doc);
                        doc.ref.delete().then(() => console.log("Product deleted"))
                        console.log("Remove: " + doc.id);
                })
        })
}

export default DeleteProducts;