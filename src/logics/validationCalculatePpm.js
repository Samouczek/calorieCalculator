
export default function validationCalculatePpm(bodyWeight, bodyGrowth, bodyAge) {
    const weight = parseInt(bodyWeight);
    const growth = parseInt(bodyGrowth);
    const age= parseInt(bodyAge);
    if (Number.isNaN( weight ) || bodyWeight < 2) {
        return "Podaj poprawną wagę"
    }
    if (Number.isNaN( growth ) || bodyGrowth < 2) {
        return "Podaj poprawny wzrost"
    }
    if (Number.isNaN( age ) || bodyAge < 1) {
        return "Podaj poprawny wiek"
    }
    return 0;
}