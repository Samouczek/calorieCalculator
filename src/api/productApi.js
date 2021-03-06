
export const getProductDatabase = (successCallback) => {
    fetch(`https://pl.openfoodfacts.org/category/sery/sery.json`, {
        method: "GET",
       headers: {
           "User-Agent": "calorieCalculator - Linux x86_64 - Version 1.0",
       },
    })
        .then((r) => r.json())
        .then((data) => {
                successCallback(data);
        })
        .catch((err) => console.log(err));
};