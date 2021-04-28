//Main

/********************************************************************* */
//1.- IF

function getZodiacSign(d:number, m:number):string {

    
    
    if((m == 1 && d <= 20) || (m == 12 && d >=22)) {
      return "Capricornio";
    } 
    else if ((m == 1 && d >= 21) || (m == 2 && d <= 18)) {
      return "aquarius";
    } 
    else if((m == 2 && d >= 19) || (m == 3 && d <= 20)) {
      return "piscis";
    } 
    else if((m== 3 && d >= 21) || (m == 4 && d <= 20)) {
      return "aries";
    } 
    else if((m == 4 && d >= 21) || (m == 5 && d <= 20)) {
      return "tauro";
    } 
    else if((m == 5 && d >= 21) || (m == 6 && d <= 20)) {
      return "geminis";
    } 
    else if((m == 6 && d >= 22) || (m == 7 && d <= 22)) {
      return "cancer";
    } 
    else if((m == 7 && d >= 23) || (m == 8 && d <= 23)) {
      return "leo";
    } 
    else if((m == 8 && d >= 24) || (m == 9 && d <= 23)) {
      return "virgo";
    } 
    else if((m == 9 && d >= 24) || (m == 10 && d <= 23)) {
      return "libra";
    } 
    else if((m == 10 && d >= 24) || (m == 11 && d <= 22)) {
      return "escorpio";
    } 
    else if((m == 11 && d >= 23) || (m == 12 && d <= 21)) {
      return "sagitario";
    }
  }

console.log(getZodiacSign(17,1));

/************************************************************************** */

//2.- IF

function continente (name:string):string{

    

    if (name == "España"||"Francia"||"Italia"||"Portugal"||"Alemania"){
        return("Europa");
    }else if (name == "Perú"||"EEUU"||"Ecuador"||"Canadá"||"Mexico"){
        return("America");
    }else if (name == "Australia"||"Nueva Zelanda"){
        return("Oceania");
    }else if (name == "Marruecos"||"Guinea Ecuatorial"||"Argelia"||"Nigeria"){
        return("Africa");
    }else if (name == "China"||"India"||"Korea"||"Indonesia"){
        return("Asia");
    }else {
        return("no has introducido ningún pais");
    }
        

    
}

console.log(continente("España"));

/************************************************************************** */

//3.- FOR

function imparNumbers (num:number):number{

    
    console.log(`Los impares del 0 al ${num} son: `)
    let res;
    for (let i = 1; i < num; i=i+2) { 
        
        res+=i + "\n"
}return res;
}

console.log(imparNumbers(50));

/************************************************************* */

//4.- FOR

 function arrayReverse(arr:number[]){


let longitudDelArr = arr.length;

for (let i = 0; i < longitudDelArr / 2; i++) {//recorremos array hasta la mitad
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
console.log(arrayReverse([1,2,3,4,5,6,7,8,9]))


// let array=[1,2,3,4,5,6,7,8,9];
// console.log(array.reverse())

/*********************************************************************** */

//5.- DON´T WORK

// function arrayColors(colores:string[]){

    
//     let arcoiris = ["rojo", "amarillo", "naranja", "verde","azul","indigo","violeta"];
    
//     for (i = 0; i <= arcoiris.length; i++) {
//         if (arcoiris[i]==colores[i].inc)  {
//             console.log(i);
//         }
    
//     }
// }




// console.log(arrayColors(["marron","amarillo","rosa","rojo"]));

/***************************************************************************************** */


//6.- WHILE



function numPares(arr:number[]) {

    console.log("El primer numero par es: ")
    let i = 0;
    let p;
    while (p !== 0) {
        p = arr[i] % 2;
        console.log(arr[i]);
        i++
    }

}
console.log(numPares([1,5,9,68,3,2]));



/******************************************************************************* */

//7.- 
// function searchWord(arr:string[],word:string){

//   let arrayWord = [];
  
  
//   for (let i = 0; i < arr.length; i++) {
      
//       if (word = "M") {
//           arrayWord.push(word)
//       }
//   }return arrayWord;
  
//   }
  
//   console.log(["Marta","Javier","Luis"],"M");

function filterItems(arr:string[], element:string) {
  return arr.filter(function(el) {
      return el.indexOf(element) !== -1
  })
}

//let names = ["Maria", "Pablo", "Manuel", "Sonia", "Marta"]

console.log(filterItems(["Maria", "Pablo", "Manuel", "Sonia", "Marta"], "M"))


/********************************************************************************* */

//8.- FOR
function sumCaract(arr:string[]):number{
    let suma=0;
    for (let i = 0; i < arr.length; i++){
        suma+=arr[i].length;
    }return suma;
}

console.log("La suma de los caracteres del array es: "+sumCaract(["Mario","Paco"]));



/*********************************************************************************** */


//9.- IF


    function esPar(num:number) {
        if(num % 2 == 0) {
          return "El numero es par";
        }
        else {
          return "El numero es impar";
        }
      }

      console.log(esPar(5));

    /********************************************************************* */

    //10.- 

    console.log(esPar(sumCaract(["Casa","Coche","Ciudad","Cesta"])))
    console.log(esPar(sumCaract(["Barco","Baca","Bicicleta","Balon","Bisiesto","Brasil"])))
    console.log(esPar(sumCaract(["Venezuela","Veneno","Voltage"])))

   
/************************************************************************************ */
   








