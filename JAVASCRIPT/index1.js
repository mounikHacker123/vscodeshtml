

// console.log("this is the format");
// console.error("this is error")
// console.log(true)
// console.log(false)
// console.warn("this should not be done here")
// // console
// var x=20;
// var y=30;
// var z="40";
// console.log(x+y)
// console.log(z+x)
// console.log(+z+x)

// var n=null
// console.log(n)

// var arr=[1,2,3,4,5,"hello"]
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])

// var object={
//     name:"mounik",
//     key:"value",
//     "age":20,
//     "iam bad":"isnt it",
//     "arr":[1,2,3,"abcd"]
// }
// console.log(object.name)
// console.log(object["arr"][2])

// var dum="hello mounik,you are an excellent magician"
// console.log(dum.toUpperCase)
// console.log(dum.toLowerCase)
// console.log(dum.replace("excellent","exceptional"))
// console.log(dum.slice(0,6))

// // if we want chnge dum ,we use 
// dum=dum.replace("mounik","chinnu")
// console.log(dum)
// var c="20"
// console.log(parseInt(c))

// console.log(true && false)
// console.log(true || false)
// console.log(!true)

// // IF ELSE
// var x=20;
// var y=30;
// var z="40";
// if(x===y){
//     console.log("this is true")
// }
// else if(x>=y){
//     console.log("this is a condition")
// }
// else{
//     console.log("nothing")
// }

// // switch case
// var n1=10
// var n2=20
// var oper="*"
// switch(oper){
//     case"-":
//     console.log(n1-n2)
//     break
//     case"+":
//     console.log(n1+n2)
//     break
//     case"*":
//     console.log(n1*n2)
//     break
//     case"**":
//     console.log(n1**n2)
//     break
// }

// // FOR LOOP
// var n3=10
// var n4=30


// // ES6 JS
// var imvar="hello world"
// let imlet="hello"
// var mess="global scope"
// function greet(){
//     var mess="local variables"
//     console.log(mess)
// }
// console.log(mess)

// let simple="this is anorml string"
// let templit=`this     
// is multiline `
// console.log(simple)
// console.log(templit)
// console.log(`everyone ${simple} good`)


// var abc=[1,2,3,4,5]
// var f=abc.find(myfunc)
// function myfunc(value,index,array){
// return value>3}
// console.log(f)

// var adb=[1,2,3,4,5,6,7]
// adb.forEach(function (e){
//     console.log(e+5)    
// });

// var zz="mounik"
// var pp = zz.find(myfunction)
// function myfunction(){
//     return zz[0]=m
// }
// console.log(pp)

let concert=true
let decision=new Promise(function(resolve,reject) {
    setTimeout(() => {
        if(concert){
            resolve("he attended the meeting")
        }
        else{
            reject("he didn't attend the meeting")
        }
        
    },1000);
});
console.log(decision)



var marks=[1,3,4,5,6,7]
let newArr=marks.map(e => {
    if(e%2===0){
        return e
    }
})
console.log(newArr)




var marks=[1,3,4,5,6,7]
let arr2=marks.filter(e => {
    if(e%2===0){
        return e
    }
})
console.log(arr2)


var ar=[4,5,6,7]
let newar=ar.map((k,index)=>{return k+5})
console.log(newar)


// var ar=[4,5,6,7]
// console.log(ar.map(k) => {return (k+5)})




