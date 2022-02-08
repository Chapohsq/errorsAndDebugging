"use script";

let pippo = "ciao";
console.log("🚀 ~ file: script.js ~ line 4 ~  pippo ",  pippo )

let pluto = 4;
console.log("🚀 ~ file: script.js ~ line 6 ~  pluto",  pluto)





let stud1 = {name:"andrea", age:"22"}
let stud2 = {name:"andrea", age:"22"}
let stud3 = {name:"andrea", age:"22"}
let stud4 = {name:"andrea", age:"22"}

let array2= {stud1,stud2,stud3, stud4}


console.table(array2)


function checkIfIsEven(NumberToCheck) {
    return NumberToCheck % 2 === 0;
}

function check(n) {
    return n % 2 === 0;
}



let player = {name: "andrea", surname: "asioli", school: "leopardi", game: "space invader"}
// console.log("🚀 ~ file: script.js ~ line 19 ~ player", player)
// console.log("🚀 ~ file: script.js ~ line 36 ~ player", player)
player.score = 200;

function parseStringToNumber(string) {
    let stringNumber = string
    if (string.includes(",")) {
        stringNumber = string.replace(",", ".")
    }
    const number = parseFloat(stringNumber)
    if (isNan(number)) {
        throw new Error ("stringa non valida")
    }
    return number;
}

let age = parseStringToNumber("13");

if (isNan(age)) {
    console.log("non sono riuscito a convertire");
}else{
console.log("age:", age);

}

// console.log(parseStringToNumber("2"));
// console.log(parseStringToNumber("2.1"));
// console.log(parseStringToNumber("2,1"));
// console.log(parseStringToNumber("2pippo"));
// console.log(parseStringToNumber("pippo2"));
// console.log(parseStringToNumber("pippo"));