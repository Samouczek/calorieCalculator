
export default function ValidationProductForm(name, calories, protein, carbohydrates, fats ) {
    const productCalories = parseInt(calories);
    const productProtein = parseFloat(protein);
    const productCarbo= parseFloat(carbohydrates);
    const productFats = parseFloat(fats);
    if (name.length < 2) {
        return "Nazwa powinna sie skłądać przynajmniej z dwóch znaków"
    }
    if (Number.isNaN(productCalories) || productCalories < 0) {
        return "Podaj poprawną wartość odżywczą"
    }
    if (Number.isNaN(productProtein) || productProtein < 0) {
        return "Podaj poprawną ilość białka"
    }
    if (Number.isNaN(productCarbo) || productCarbo < 0) {
        return "Podaj poprawną ilość węglowodanów"
    }
    if (Number.isNaN(productFats) || productFats < 0) {
        return "Podaj poprawną ilość tłuszczy"
    }
    return 0;
}