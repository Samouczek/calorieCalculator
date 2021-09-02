
export default function CreateDataFromApi(database){

    let names = "";
    if (typeof database.products !== 'undefined'){
        names = database.products.map((product, index) => database.products[index].product_name_pl);
    } else {
        console.log("API: No name");
    }

    let energy = "";
    if (typeof database.products !== 'undefined'){
        energy = database.products.map((product, index) => database.products[index].nutriments["energy-kcal_100g"]);
    } else {
        console.log("API: No energy-kcal_100g");
    }

    let protein = "";
    if (typeof database.products !== 'undefined'){
        protein = database.products.map((product, index) => database.products[index].nutriments.proteins_100g);
    } else {
        console.log("API: No proteins_100g");
    }

    let carbs = "";
    if (typeof database.products !== 'undefined'){
        carbs = database.products.map((product, index) => database.products[index].nutriments.carbohydrates_100g);
    } else {
        console.log("API: No carbohydrates_100g");
    }

    let fats = "";
    if (typeof database.products !== 'undefined'){
        fats = database.products.map((product, index) => database.products[index].nutriments.fat_100g);
    } else {
        console.log("API: No fat_100g");
    }

    let rows = [];
    for (let i = 0; i < names.length; i++) {
        if ( typeof names[i] !== 'undefined' && names[i].length>1) {
            if (typeof energy[i] !== 'undefined'){
                energy[i] = parseFloat(energy[i]).toFixed(1)
            } else {
                energy[i] = "brak"
            }
            if (typeof protein[i] !== 'undefined'){
                protein[i] = parseFloat(protein[i]).toFixed(1)
            } else {
                protein[i] = "brak"
            }
            if (typeof carbs[i] !== 'undefined'){
                carbs[i] = parseFloat(carbs[i]).toFixed(1)
            } else {
                carbs[i] = "brak";
            }
            if (typeof fats[i] !== 'undefined'){
                fats[i] = parseFloat(fats[i]).toFixed(1)
            } else {
                fats[i] = "brak";
            }
            rows.push(createData(names[i],energy[i],protein[i],carbs[i],fats[i]))
        }
    }
    return rows;
}

function createData(name, calories, proteins, carbs, fats) {
    return { name, calories,proteins, carbs,  fats };
}
