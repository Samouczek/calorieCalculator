import {API_URL} from "./constants";

export const getProductDatabase = (successCallback) => {
    fetch(`${API_URL}`, {
    })
        .then((r) => r.json())
        .then((data) => {
            if (data.error === false && typeof successCallback === "function") {
                successCallback(data.data);
            }
        })
        .catch((err) => console.log(err));
};