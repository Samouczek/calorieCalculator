
export default function calculateProteinCarboFat(cpmValue,bodyWeight,palValue){
    switch (palValue) {
        case 1.4:
            return calc(cpmValue,bodyWeight,1);
        case 1.5:
            return calc(cpmValue,bodyWeight,1.1);
        case 1.6:
            return calc(cpmValue,bodyWeight,1.2);
        case 1.7:
            return calc(cpmValue,bodyWeight,1.3);
        case 1.8:
            return calc(cpmValue,bodyWeight,1.4);
        case 1.9:
            return calc(cpmValue,bodyWeight,1.5);
        case 2.0:
            return calc(cpmValue,bodyWeight,1.6);
        case 2.1:
            return calc(cpmValue,bodyWeight,1.7);
        case 2.2:
            return calc(cpmValue,bodyWeight,1.9);
        case 2.3:
            return calc(cpmValue,bodyWeight,3);
        default:
            return false; 
    }
}

const calc = (cpmValue,bodyWeight,proteinPerKg) => {
    const proteinGrams = (proteinPerKg * bodyWeight).toFixed(0);
    const proteinsKcal = (4 * proteinGrams).toFixed(0);
    const proteinsPercent = (proteinsKcal/cpmValue * 100).toFixed(0);
    const carboKcal = (0.55*cpmValue).toFixed(0);
    const carbGrams = (carboKcal/4).toFixed(0);
    const fatPercent = (100 - proteinsPercent - 55).toFixed(0);
    const fatKcal = (fatPercent/100*cpmValue).toFixed(0);
    const fatGrams = (fatKcal/9).toFixed(0);

    return [
        [proteinGrams,proteinsKcal,proteinsPercent],
        [carbGrams, carboKcal,55],
        [fatGrams, fatKcal, fatPercent]
    ]

}