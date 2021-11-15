//learn Node

var test = require("./function/testFunction")
var a = require("./function/multiFunction")
//import { testFunction } from "./function/testFunction"

// let,var,const,static
// 1. let,var จะใข้กับตัวแปรที่เปลี่ยนค่าได้ตลอด
// 2. const   จะใช้กับตัวแปรที่เปลี่ยนค่าไม่ได้
// 3. statoc  จะใช้กับ function เป็นหลัก

//ตัวแปร
let test_string = "test"
let test_int = 0
let test_double = 1.1
let test_array = []

//เงื่อนไข
// 1. if else
//  1.1 short if
//  1.2 long if
//  1.3 if return
// 2. switch case

// long if
// let x = "test"
// if(x === "test"){
//      console.log("Example testing")
// }else{
//      console.log("Not yet input string")
//}

// short if
// let y = 1
// let checkingif = y === 1 ? "success" : "fail"
// console.log(checkingif)


let x = 1
// return if 
 if(x === 1)
 console.log("testing if")
 if(x !== 1){
    return
}else{
    console.log("logging success")

}

let y = ""
//switch case
switch(y){
    case "1" : 
    console.log("test case1")
        break;
    case "2" : 
    console.log("test case2")
    break;
    default : 
    console.log("not case in switch")
    break;
}



// function
// 1. const function
// 2. function

// function testfunction(){
//  return "test function"
// }

// console.log(testfunction)

// const test2function=()=>{
//    return "test 2 function"
// }
// console.log(test2function)

// testFunction()
test()
// mutifunction
a.a()
a.b()



// array
// default array
let intArr = [1,2,3,4]
for(var i = 0;i < intArr.length;i++){
    console.log(intArr[i])
}
intArr.forEach((res,i) => {
    console.log(res)
});
intArr.push(5)
console.log(intArr)

let teacherobj = [
    {
        id:1,
        teachername:"pensee"
    },
    {
        id:2,
        teachername:"somyot"
    }
]

let objArr =[{
    id:1,
    name:"somyot",
    lastname:"dansupakitwong",
    yearold:"30",
    teacherid:1
},
{
    id:2,
    name:"jesoo",
    lastname:"dragon",
    yearold:"40",
    teacherid:2
}
]

let friendObj = [{
    id:1,
    name:"dead pool",
    objArrid:1
},{
    id:2,
    name:"captain marvel",
    objArrid:2
}
]

console.log(objArr)
let mergeObg = objArr.map(x=>({
    ...x,
    yearold:"26"
}))
console.log(mergeObg)

//let filterOBG = objArr.filter(x=>x.yearold === "40").map(x=>({
 // ...x  
//}))

let mergeteacher = teacherobj.map(x=>({
    ...x,
    Substudent : objArr.filter(xx=>xx.teacherid === x.id).map(xx=>({
  ...xx,  
        friend:friendObj.map(xxx=>xxx.objArrid === xx.id).map(y=>({
            ...y
        }))
    }))
}))

console.log(mergeteacher) //or console.log(Json.stringify(mergeteacher))
        

        
    
