// Parte I
let nombre = "what Andy giveth, Bill taketh away"
let edad = 1/137
let puedoConducir = false

console.log(nombre)
console.log(edad)
console.log(puedoConducir)

//Parte II
{
const numero1 = 20;
const numero2 = 40;

console.log(numero1 + numero2)
console.log(numero1 - numero2)
console.log(numero1 * numero2)
console.log(numero1 / numero2)
console.log(numero1 % numero2)
}

//parte III
{
const numero1 = 15;
const numero2 = 20;
const numero3 = '25';

console.log(numero1 >= numero2)
console.log(numero1 <= numero2)
console.log(numero1 < numero3)
console.log(numero1 > numero3)
console.log(numero1 != numero3)
console.log(numero1 === numero2)
}

//parte IV

const numero1 = 10;
const numero2 = 20;
const numero3 = 30;

let tmp1;
let tmp2;
if(numero1 > numero2) {
    if(numero1 > numero3) {
        tmp1 = numero2
        tmp2 = numero3
        console.log(numero1)
    }else {
        tmp1 = numero1
        tmp2 = numero2
        console.log(numero3)
    }
}else if(numero2 > numero3) {
    tmp1 = numero1
    tmp2 = numero3
    console.log(numero2)
}else {
    tmp1 = numero1
    tmp2 = numero2
    console.log(numero3)
}
if(tmp1 > tmp2) {
    console.log(tmp1)
}else {
    console.log(tmp2)
}

console.log("numero1 es:")
if(numero1 % 2 == 0) {
    console.log("par")
}else {
    console.log("impar")
}
console.log("numero2 es:")
if(numero2 % 2 == 0) {
    console.log("par")
}else {
    console.log("impar")
}
console.log("numero3 es:")
if(numero3 % 2 == 0) {
    console.log("par")
}else {
    console.log("impar")
}

console.log("numero1 es:")
if(numero1 % 5 == 0) {
    console.log("   multiplo de 5")
}else {
    console.log("   no es multiplo de 5")
}
console.log("numero2 es:")
if(numero2 % 5 == 0) {
    console.log("   multiplo de 5")
}else {
    console.log("   no es multiplo de 5")
}
console.log("numero3 es:")
if(numero3 % 5 == 0) {
    console.log("   multiplo de 5")
}else {
    console.log("   no es multiplo de 5")
}
//Parte V
console.log("1 al 10:")
for(let i = 1; i <= 10; i++) {
    console.log(i)
}
console.log("10 al 1:")
for(let i = 10; i >= 1; i--) {
    console.log(i)
}
console.log("1 al 10 pero solo los pares:")
for(let i = 1; i <= 10; i++) {
    if(i % 2 == 0) {
        console.log(i)
    }
}
console.log("1 al 10 pero solo los impares:")
for(let i = 1; i <= 10; i++) {
    if(i % 2 == 1) {
        console.log(i)
    }
}
console.log("1 al 10 pero solo los multiplos de 3:")
for(let i = 1; i <= 10; i++) {
    if(i % 3 == 0) {
        console.log(i)
    }
}
console.log("1 al 10 pero solo los multiplos de 5:")
for(let i = 1; i <= 10; i++) {
    if(i % 5 == 0) {
        console.log(i)
    }
}
console.log("1 al 10 pero solo los multiplos de 5 y 3:")
for(let i = 1; i <= 10; i++) {
    if(i % 5 == 0 && i % 3 == 0) {
        console.log(i)
    }
}
console.log("1 al 10 pero solo los multiplos de 5 o 3:")
for(let i = 1; i <= 10; i++) {
    if(i % 5 == 0 || i % 3 == 0) {
        console.log(i)
    }
}
//Parte VI
function una(input) {
    let output = input.toUpperCase()
    return output
}
function dos(input) {
    let c;
    let output = ""
    for(let i = 0; i < input.length; i++) {
        c = input.charCodeAt(i)
        if(c < 91 && c > 64) {
            c = String.fromCharCode(c + 32)
            output += c
        }else {
            c = String.fromCharCode(c)
            output += c;
        }
    }
    return output
}
console.log(una("Import Solution as sol"))
console.log(dos("ReinventAR La Rueda"))

function resta(A, B) {
    return A-B
}
console.log(resta(1,2));
function div(A, B) {
    return A/B
}
console.log(div(1,2));
function mul(A, B) {
    return A * B
}
console.log(mul(1,2));
function strlen(input) {
    return input.length
}
console.log(strlen("hola"));

//Parte VII
function serie(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}
arr = [1,2,3,4,5]
console.log(serie(arr))
function avg(arr) {
    let sum = serie(arr)
    return sum/arr.length;
}
console.log(avg(arr))
function min_arr(arr) {
    let newarr = []

    for(let i = 0; i < arr.length; i++) {
        newarr.push(arr[i].toUpperCase());
    }
    return newarr
}
console.log(min_arr(["HOLA", "SALUDOS"]))

function solo_par(arr) {
    let newarr = []
    let tmp; 
    for(let i = 0; i < arr.length; i++) {
        tmp = arr[i]
        if(tmp % 2 == 0) {
            newarr.push(tmp)
        }
    }
    return newarr
}
console.log(solo_par(arr))

const persona = {
    nombre: "Devora",
    genero: "hombres",
    raza: "Tilapi",
    edad: 195
}
console.log(persona)
const caja = {
    cuadernos: 100,
    lapices: 10,
    papel: 137,
    fotografias: 1/137,
    buen_estado: false
}
console.log(caja)
console.log("test")
let list = Object.keys(caja)
for(let i = 0; i < list.length; i++) {
    console.log(caja[list[i]])
    console.log(typeof caja[list[i]])
}