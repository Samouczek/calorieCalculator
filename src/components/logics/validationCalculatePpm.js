
function validationCalculatePpm(bodyWeight, bodyGrowth, bodyAge){
    if (!isNaN(bodyWeight) && bodyWeight < 2){
        return "Podaj poprawną wagę"
    }
    if (!isNaN(bodyGrowth) && bodyGrowth < 2){
        return "Podaj poprawny wzrost"
    }
    if (!isNaN(bodyAge) && bodyAge < 1){
        return "Podaj poprawny wiek"
    }
    return 0;
}