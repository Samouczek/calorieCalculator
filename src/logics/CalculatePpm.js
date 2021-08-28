
export default function CalculatePpm(sex, bodyWeight, bodyGrowth, bodyAge){
        if (sex === 0){
            return (655.1 + (9.563 * bodyWeight) + (1.85 * bodyGrowth) - (4.676 * bodyAge)).toFixed(0);
        } else {
            return (66.47 + (13.75 * bodyWeight) + (5.0 * bodyGrowth) - (6.76 * bodyAge)).toFixed(0);
        }
}