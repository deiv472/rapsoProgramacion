//1.- IF
function getZodiacSign(d, m) {
    if ((m == 1 && d <= 20) || (m == 12 && d >= 22)) {
        return "Capricornio";
    }
    else if ((m == 1 && d >= 21) || (m == 2 && d <= 18)) {
        return "aquarius";
    }
    else if ((m == 2 && d >= 19) || (m == 3 && d <= 20)) {
        return "piscis";
    }
    else if ((m == 3 && d >= 21) || (m == 4 && d <= 20)) {
        return "aries";
    }
    else if ((m == 4 && d >= 21) || (m == 5 && d <= 20)) {
        return "tauro";
    }
    else if ((m == 5 && d >= 21) || (m == 6 && d <= 20)) {
        return "geminis";
    }
    else if ((m == 6 && d >= 22) || (m == 7 && d <= 22)) {
        return "cancer";
    }
    else if ((m == 7 && d >= 23) || (m == 8 && d <= 23)) {
        return "leo";
    }
    else if ((m == 8 && d >= 24) || (m == 9 && d <= 23)) {
        return "virgo";
    }
    else if ((m == 9 && d >= 24) || (m == 10 && d <= 23)) {
        return "libra";
    }
    else if ((m == 10 && d >= 24) || (m == 11 && d <= 22)) {
        return "escorpio";
    }
    else if ((m == 11 && d >= 23) || (m == 12 && d <= 21)) {
        return "sagitario";
    }
}
console.log(getZodiacSign(17, 1));
/***************************************************************************************** */
//2.- IF
function continente(name) {
    if (name == "España" || name == "Francia" || name == "Italia" || name == "Portugal" || name == "Alemania") {
        return ("Europa");
    }
    else if (name == "Perú" || name == "EEUU" || name == "Ecuador" || name == "Canadá" || name == "Mexico") {
        return ("America");
    }
    else if (name == "Australia" || name == "Nueva Zelanda") {
        return ("Oceania");
    }
    else if (name == "Marruecos" || name == "Guinea Ecuatorial" || name == "Argelia" || name == "Nigeria") {
        return ("Africa");
    }
    else if (name == "China" || name == "India" || name == "Korea" || name == "Indonesia") {
        return ("Asia");
    }
    else {
        return ("no has introducido ningún pais");
    }
}
console.log(continente("China"));
/****************************************************************************** */
//9.- IF
function esPar(num) {
    if (num % 2 == 0) {
        return "El numero es par";
    }
    else {
        return "El numero es impar";
    }
}
console.log(esPar(5));
/******************************************************************************* */ 
