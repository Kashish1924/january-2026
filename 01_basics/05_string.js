
const name="hitesh"
const gameName=new String("hitesh-hc")
const repoCount= 40
console.log(name+ repoCount);
console.log('hello my name is ${name} and my repo count is${repoCount}');
console.log(name[0]);
console.log(name.__proto__);
console.log(name.toUpperCase());


console.log(name.charAt(2));
console.log(name.indexOf('k'));

console.log(name.length);
const newString=name.substring(0,2)
console.log(newString);
const anotherString=name.slice(-2,2)
console.log(anotherString);
const newStringOne= "   kashu    "
console.log(newStringOne);
console.log(newStringOne.trim());
const url='https://hitesh.com/hitesh%20choudhary'
console.log((url.replace('%20','-')))
console.log(url.includes('sundar'));