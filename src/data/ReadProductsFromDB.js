import {db} from "../components/firebase";

class Product {
    constructor(name, calories, proteins, carbs, fats) {
        this.name = name;
        this.calories = calories;
        this.proteins = proteins;
        this.carbs = carbs;
        this.fats = fats;
    }
    toString(){
        return `${this.name} ${this.calories} ${this.proteins} ${this.carbs} ${this.fats}`
    }
}

const productConverter = {
    toFirestore: function (product){
        return {
            name: product.name,
            calories: product.calories,
            proteins: product.proteins,
            carbs: product.carbs,
            fats: product.fats
        };
    },
    fromFirestore: function (snapshot, options){
        const data = snapshot.data(options);
        return new Product(data.name, data.calories, data.proteins, data.carbs, data.fats);
    }
};

function ReadProductsFromDB(user) {
    const productsCollection = [];
    const rows = [];
    const docRef = db.collection("users").doc(user).collection("products");

    docRef.withConverter(productConverter).get().then((products)=> {
        products.forEach((product) => {
            productsCollection.push(product.data());
        })
        productsCollection.forEach((product) => {
            rows.push(createData(product.name, product.calories, product.proteins, product.carbs, product.fats));
        })
   }).catch(error => console.log('Problem z pobraniem danych ' + error));
    return rows;
}

function createData(name, calories, proteins, carbs, fats) {
    return { name, calories,proteins, carbs,  fats };
}

export default ReadProductsFromDB;