let score = "33" //33




console.log(typeof score);
console.log(typeof (score));


let valueInNumber =Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

//let score="33abc"  //NaN but type number
//let score=NULL //0
//let score=undefined  //undefined but type number 
//true=>1

let isLoggedIn="hitesh"
let  booleanIsLogged=Boolean(isLoggedIn)
console.log(booleanIsLogged)

//1=>true; 0=>false
//""=>false
//"kashish"=>true

// let someNumber=33
// let stringNumber=string(someNumber)
// console.log(stringNumber)   //33
// console.log(typeof stringNumber); //string



/*operation*/
let value=3
let negativeValue=-value
console.log(negativeValue) //-3
console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2%2)
console.log(2/2)
let str1="kashish"
let str2=" kumari"
let str3=str1+str2
console.log(str3)
console.log("1"+2) //12 first string then consider string
console.log("1"+2+3) //123 first string then consider all string
console.log(1+2+"3")//33 first number after string thats why 1+2=3 then add string
