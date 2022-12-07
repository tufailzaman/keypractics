// const marks = [45,67,43,56,12,09,76,54]
// const l = marks.indexOf(100);
// console.log(l);
// const f = marks.indexOf(105);
//  if ( r == -1){
//     marks.push (100)
//  }
//  console.log(marks)
// if (f == -1){
//     marks.push(105)
// }
// console.log(marks)

// const marks = [1,23,34,21]
// const remain = [2,3,9,18]
// const full = marks.concat(remain);
// console.log(full)

// list = [10,10,40]
// list.every (10)
// console.log(list)

// const marks = [1,23,4,65,9]
// const remain = [2,3,4,5,6]
// const join = marks.concat (remain);
// console.log(join)
//  ////// method of destruction
// const names = ["Tufail" , "Zaman", "Amjad", "Rashid"];
// const name = names[0];
// const name1 = names[1];
// const name2 = names[2];
// const name3 = names[3];
// console.log(name);
// console.log(name1)
// console.log(name2)
// console.log(name3)
//    /////// 2nd Method
//    const[numb, numb1, numb2,numb3 ] = names;
// console.log(name1);

// const student = {
//     name: "Tufail Zaman",
//     age: 23,
//     isPass: true,
//     friends: ["Amjad", "Rashid", "Hasin", "Habib"],
//     address: {
//         city: "charssada",
//         village: "Rajjar"
//     }
// }
// const[name,address] = student;
// console.log(name);

// const str = "hello"
// const str1 = " World"
// const str3 = str + str1 ;
// console.log (~ ${str}${str1}~);
// console.log(str2);
// console.log(str3);
// const str = "THis is new Line"
// const l = str.indexOf("new");
// console.log(l);
// const l1 = str.replace("new" , "old");
// console.log(l1);
// const str = "My country is Pakistan"
// const Country = str.slice(10,17);
// console.log(Country);
// const key = "Pakistan"
// const country = (str.slice.indexOf(key),indexOf(key) + key.length);
// console.log(country)
// const str = ("1, Tufail, Charsadda, 3.5, 6th, ICUP")
// const [id, name, address, GPA, Semester, University ] = Str.split(",")
// console.log(name)
// //// End of Lecture No 04 *********

// //////// default arguements
// const fun(name) => {
//     console.log(~Hello $ {name}~)
// }
// fun ();
//  const test = 3.8;
//  const test1 = 23;
// console.log(typeof(test))
// console.log(typeof(test1))
// const str = test.toString(); // explicit Convesion
// console.log(typeof(str))
// const str1 = test1 + " "; // Emplicit Conversion
// console.log(typeof(str1)) 
// const text = 12.4444444443
// const numb = text.toFixed(2) 
// const numb1 = text.toPrecision(3)
// console.log(numb) 
// console.log(numb1) 
// const num2 = Math.ceil(text)
// const num3 = Math.floor(text)
// console.log(num2)
// console.log(num3)
// const fs = require('fs');
// fs.writeFileSync("test.txt","Tufail Zaman")
// JSON.parse(fs.readFileSync("test.txt"))
//  const r = Math.random();
//  console.log(r)
//  console.log(Math.ceil(r*100))
// for(let i = 0; i < 10; i++ ){
// const dice = Math.floor(Math.random()*(7-1)+1)
// console.log(dice)
// if (dice == 7 || dice == 0){
//     break;
// }
// }
// function randomIntFromInterval(max,min){
//     return Math.floor(Math.random()*(max-min + 1)+min)
// }
// for ( let i = 0; i < 10; i++){
//     console.log(randomIntFromInterval(1,6))
// }
// const d = new Date();
// console.log(d.getDate())
// console.log(d.getFullYear())
// console.log(d.getYear())
// console.log(d.getHours())
// console.log(d.getDay())
// console.log(d.getMinutes())
// console.log(d.getMonth())
// console.log(d.getSeconds())
// console.log(d.getMilliseconds())
// console.log(d.getTime())
// console.log(d.getTimezoneOffset())
// console.log(d.getUTCDate())
// const list = [2,21,3,75,6,13,45]
// const max = Math.max(...list)
// const min = Math.min(...list)
// console.log(max)
// console.log(min)

// const obj = {
//     id: 1,
//     name: "Tufail Zaman",
//     age: 22,
//     marks: 30,
//     gpa: 3.5,
// }
// const keys = Object.keys(obj)
// console.log(keys)
// const str = "Pakistan"
// for (j of str){
//    console.log(j)
// }
// const obj =[ {
//     id: 1,
//     name: "Tufail Zaman",
//     age: 22,
//     marks: 30,
//     gpa: 3.5,
// },
// ]
// for (o in obj){
//     console.log(obj[0].name);
// }
// const s = new Set([1,2,3,4,5,6,7,8,9,10])
// s.add(10)
// console.log(s)
// s.add(11)
// console.log(s)
// s.add(0)
// console.log(s)

// ////// End of Lecture No 06
