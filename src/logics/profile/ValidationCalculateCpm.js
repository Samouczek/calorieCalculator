
export default function ValidationCalculateCpm(pal, ppm ) {
    const ppmValue = parseInt(ppm);
    if (pal === false) {
        return "Wybierz wartość współczynnika aktywności fizycznej PAL"
    }
    if (Number.isNaN( ppmValue ) || ppmValue < 2) {
        return "Podaj poprawną wartość podstawowej przemiany materii"
    }
    return 0;
}