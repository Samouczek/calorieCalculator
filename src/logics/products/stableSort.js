export default function stableSort(array, comparator) {

    const newArray = []
    for (let i = 0; i< array.length; i++){
        let product = new Product(array[i].name,
            parseFloat(array[i].calories),
            parseFloat(array[i].proteins),
            parseFloat(array[i].carbs),
            parseFloat(array[i].fats));
        newArray.push(product);
    }
    console.log(newArray);
    const stabilizedThis = newArray.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

class Product {
    constructor(name, calories, proteins, carbs, fats) {
        this.name = name;
        this.calories = calories;
        this.proteins = proteins;
        this.carbs = carbs;
        this.fats = fats;
    }
}