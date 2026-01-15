//primitive datatype

//7 datatype:- string,number,boolean,BigInt,null,undefined,symbol

const score=100
const scoreValue=100.3
//console.log(typeof score)

const isLoggedIn =false //bool
const outsideTemp=null //null
let useremail; //undefined
const id=Symbol('123')
const anotherId=Symbol('123')

//console.log(id===anotherId); false

const bigNumber=2234567234567234567n
//console.log(typeof bigNumber) //undefined
//n lga diya bigint  bn gya

//refernces(Non primitive datatpe)

//array,objects,function

const heros=["pg,","hbsxhj"];
let myObj={
    name:"kashish",
    age:20,
}
const myFunction=function(){
    console.log("hello");
}
console.log(typeof myFunction) //function

/*Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object */


//stack(primitive)  ,heap(non primitive)
//stack copy krta hai //heap hamesha reference deta
let myYoutubename="kahsishdotcom"
let anothername=myYoutubename
anothername="kashu"


console.log(myYoutubename) //kahsishdotcom
console.log(anothername)  //kashu

let userOne={
    email:"user@google.com",
    upi:"user@abl"
}

let userTwo= userOne

userTwo.email="kas@gmail.com"

console.log(userOne.email); //kas@gmail.com
console.log(userTwo.email); //kas@gmail.com
//same emailbecuse change original mai hota jabki 
// stack mai copy hoti or copy mai change hota 