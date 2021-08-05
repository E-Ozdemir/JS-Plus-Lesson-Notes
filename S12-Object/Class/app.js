// let myName = new String("Matthew");

// console.log("myName :>> ", myName);
// console.log("myName.length :>> ", myName.length);
// console.log("typeof myName :>> ", typeof myName);

// const a = function () {
//   return "hello";
// };

// console.log("typeof a ==>", typeof a);
// console.log("a ==> ", a.prototype);

// // const while = 42;

// const student = {
//   x: 5,
//   y: 6,
//   ad: "Matthew",
//   "Okul Adı": "Saint Joseph",
// };

// student.dob = 2014;
// student["Baba Adi"] = "Daniel";

// delete student.ad;

// console.log("student :>> ", student);
// console.log("okul adı :>> ", student["Okul Adı"]);
// console.log("adı :>> ", student.ad);
console.log(this);

/*   */

function Person(firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
}

const myObj = {};

const matthew = new Person("Matthew", 1980);
const m2 = new Person("Matthew", 1980);

let arr = [];
const arr1 = ["a"];
let arr2 = ["x", "y", "z"];

console.log("arr :>> ", arr);
arr = arr2;
console.log("arr :>> ", arr);
console.log("arr2 :>> ", arr2);

var me = { name: "matt" };
var you = { name: "Mark" };

var he = me;
me.name = "Henry";
console.log("myName :>> ", me);
console.log("hisName :>> ", he);
console.log("yourName :>> ", you);
