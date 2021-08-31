import {API_URL} from "./constants";

export const getProductDatabase = (successCallback) => {
    fetch("https://pl.openfoodfacts.org/category/sery.json", {
        method: "GET",
       headers: {
           "User-Agent": "calorieCalculator - Linux x86_64 - Version 1.0",
       },
    })
        .then((r) => r.json())
        .then((data) => {
            if (data.error === false && typeof successCallback === "function") {
                successCallback(data.date);
                console.log(data);
            }
        })
        .catch((err) => console.log(err));
};