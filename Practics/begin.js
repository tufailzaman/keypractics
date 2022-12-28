// const students = [
//    {
//       rollno: 201168,
//       stdname: "Tufail Zaman",
//       gpa: 3.8,
//       ispass: true,
//       departnment: "Software Engineering",
//       semester: "5th"
//    },
//    {
//       rollno: 201167,
//       stdname: "Habib ur Rehman",
//       gpa: 3.4,
//       ispass: true,
//       departnment: "Software Engineering",
//       semester: "5th"
//    },
//    {
//       rollno: 201187,
//       stdname: "Amjad Khan",
//       gpa: 2.8,
//       ispass: false,
//       departnment: "Software Engineering",
//       semester: "5th"
//    },
//    {
//       rollno: 201196,
//       stdname: "Rashid Minhas",
//       gpa: 1.8,
//       ispass: false,
//       departnment: "Software Engineering",
//       semester: "5th"
//    },
//    {
//       rollno: 201214,
//       stdname: "Hasin Ullah",
//       gpa: 3.1,
//       ispass: true,
//       departnment: "Software Engineering",
//       semester: "5th"
//    },
// ]
// const list = [1, 4, 3, 2, 5, 4, 7, 2, 3, 6, 9, 09, 76, 43, 23, 67, 98]
// for (let i = 0; i < students.length; i++ ){
//       if(students[i].ispass == false){
//     console.log("Name :", students[i].stdname)
//     console.log("Roll No :", students[i].rollno)
//     console.log("GPA :", students[i].gpa,"Call to dad")
//       }
//     }

//     for ( let i = 445; i < 500; i++){
//         if(i%2 == 0){
//             console.log(i)
//             console.log("Even")
//         }
//         else{
//             console.log(i)
//             console.log("Odd")
//         }
//     }
//     for ( let i = 0; i < students.length;i++){
//         if(students[i].gpa >= 2 && students[i].ispass){
//          //   console.log(students[i].stdname,students[i].rollno)
//             console.log(students[i].stdname,"is Pass")
//         }

//     else{
//     //    console.log(students[i].stdname,students[i].rollno)
//         console.log(students[i].stdname,"is Fail")
//     }
// }
// for ( let i = 0; i < students.length;i++){
//     if(students[i].gpa >= 2 || students[i].ispass){
//         console.log(students[i].stdname,students[i].rollno)
//     }

// else{
//     console.log(students[i].stdname,students[i].rollno)
// }
// // }
// const a = list.length
// console.log(a)
// console.log(typeof(list))
// console.log(typeof(students))
// console.log(list.length)
// console.log(students.length)
// //// Higher order Array
// list.forEach((v,i)=> console.log(v,i))
// students.forEach((v,i) => {
//    return console.log (v,i)
// })
// list.forEach((v,i) => {
//      console.log(v,i)
// })

// console.log(list.sort())
// console.log(list.sort((a,b) => a-b))
// console.log(list.sort((a,b) => b-a))
// const sort = sort((a,b) => {
//           a-b
// })
// console.log(sort)

// console.log(list.filter(v => v > 50))


// //// Question no 2
// const index = list.indexOf(76)
// const array = list.filter((v,i)=> i >= index)
// console.log(array)
// console.log(list.filter(i => i >= index))
// console.log(list.filter(i => i >= index))
// list[3] = ("tufail")
// console.log(list)

// console.log(list.map(v => v+5))
// // Question 3
// const map = list.map((v,i) => {
//   if( i == 3){ 
//  //  return  v = "Tufail Zaman"
//    return  v = v+"Tufail Zaman"
// }
// else{ return v}
// })
// console.log(map) 



// console.log(students.map(v => v.rollno + 1))
// const mapp = (students.map(v => v.rollno + 1))
// console.log(mapp)

// console.log(list.reduce((a, b) => a + b, 0))
// const sum = list.reduce((c, p) => c + p, 0)
// console.log(sum)

// ///// chaining
// console.log(list.sort((a, b) => a - b)
//    .map(v => v + 5)
//    .filter(v => v >= 30)
//    .reduce((c, p) => c + p, 0))


//    var search = 201168;
// console.log(students.filter(v => v.rollno == search))
