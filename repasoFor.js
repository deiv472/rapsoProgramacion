//3.- FOR
function imparNumbers(num) {
    console.log(`Los impares del 0 al ${num} son: `);
    let res;
    for (let i = 1; i < num; i = i + 2) {
        res += i + "\n";
    }
    return res;
}
console.log(imparNumbers(50));
/********************************************************************** */
//4.- FOR
function arrayReverse(arr) {
    let longitudDelArr = arr.length;
    for (let i = 0; i < longitudDelArr / 2; i++) { //recorremos array hasta la mitad
        // guardo el valor actual
        let temporal = arr[i];
        // Calcular el índice contrario, es decir, el del otro lado de la mitad; el cual irá descendiendo
        let indiceContrario = longitudDelArr - i - 1;
        // En el actual ahora está el del otro lado
        arr[i] = arr[indiceContrario];
        // Y en el otro lado, el que estaba originalmente en el actual
        arr[indiceContrario] = temporal;
    }
    return arr;
}
console.log(arrayReverse([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// let array=[1,2,3,4,5,6,7,8,9];
// console.log(array.reverse())
/************************************************************** */
//5.- FOR ----------------------- *tsc repasoFor -t ES2017* para poder utilizar metodo includes
function arrayColors(colores) {
    let arcoiris = ["rojo", "amarillo", "naranja", "verde", "azul", "indigo", "violeta"];
    for (let i = 0; i <= colores.length; i++) {
        if (arcoiris.includes(colores[i])) {
            console.log("El color " + colores[i] + " esta incluido en el arcoiris.");
        }
    }
}
console.log(arrayColors(["marron", "amarillo", "rosa", "rojo"]));
/***************************************************************************************** */
//7.- 
function compareWord(arr) {
    let boolean = true;
    let i = 0;
    while (i < arr.length) {
        if (arr[i][0] !== "M") {
            console.log(boolean);
            i = arr.length;
        }
        i++;
        console.log(boolean);
    }
}
console.log(compareWord(["Marta", "Javier", "Luis"]));
//console.log(compareWord(["Marta","Mario","Manolo"]));
// function filterItems(arr:string[], element:string) {
//     return arr.filter(function(el) {
//         return el.indexOf(element) !== -1
//     })
//   }
//   //let names = ["Maria", "Pablo", "Manuel", "Sonia", "Marta"]
//   console.log(filterItems(["Maria", "Pablo", "Manuel", "Sonia", "Marta"], "M"))
/********************************************************************************* */
//8.- FOR
function sumCaract(arr) {
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
        suma += arr[i].length;
    }
    return suma;
}
console.log("La suma de los caracteres del array es: " + sumCaract(["Mario", "Paco"]));
/*********************************************************************************** */ 
