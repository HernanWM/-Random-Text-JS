// let dollarToEuro = function(dollarValue){
// 	return dollarValue * 0.89;
// }
// let euroToYen = function(euroValue){
// 	return euroValue * 124.15;
// }
// //***** YOUR CODE BELOW ↓ ******///


// console.log(euroToYen(dollarToEuro(137)));



// Your code goes here:
// const renderPerson = (name, fecha, color, edad, genero) =>{
//     return String(name + ' is a ' + edad + ' years old ' + genero + ' born in ' + fecha + ' with ' + color + ' ayes ');
//    }
   
     ///*** Do not edit below this line ****/
    //  console.log(renderPerson('Bob', '05/22/1983', 'green', 23, 'male'));



//     var arr = ['80', '9', '700', 40, 1, 5, 200];
// function comparar(a, b) {
//   return a - b;
// }
// console.log('original:', arr.join());
// console.log('ordenado sin función:', arr.sort());
// console.log('ordenado con función:', arr.sort(comparar));

let names = ['John', 'Kenny', 'Tom', "Bob", 'Dilan'];
function  sortNames (a, b) { 
    return a.localeCompare(b);
});
// items.sort(function (a, b) {
//     return a.localeCompare(b);
//   });
console.log(sortNames(names));
