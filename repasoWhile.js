/***************************************************************************************** */
//6.- WHILE
function numPares(arr) {
    console.log("El primer numero par es: ");
    var i = 0;
    var p;
    while (p !== 0) {
        p = arr[i] % 2;
        console.log(arr[i]);
        i++;
    }
}
console.log(numPares([1, 5, 9, 68, 3, 2]));
/******************************************************************************* */
/***************************************************************************************** */
//7.- 
function compareWord(arr) {
    var boolean = true;
    var i = 0;
    while (i < arr.length) {
        if (arr[i][0] !== "M") {
            console.log(boolean = false);
            i += arr.length;
        }
        i++;
    }
    console.log(boolean);
}
// console.log(compareWord(["Marta","Javier","Luis"]));
console.log(compareWord(["Marta", "Mario", "Manolo"]));
/******************************************************************************** */
