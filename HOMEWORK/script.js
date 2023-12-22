//TASK1
/*
//1.
let a=8,b=12;
console.log(a*b);
*/
/*
//2.
let x=10/2;
console.log(x);
*/
/*
//3.
let num1=20,num2=17;
console.log(num1+num2);
*/
/*
//4.
const info = {
name:'Khayala',
surname:'Hatamova',
birthYear:2005
}
console.log(info);
*/
/*
//5.
let a=17%12;
console.log(a);
*/
/*
//6.
let cityName = 'Baku';
cityName='Ganja';

console.log(cityName);
*/
/*
//TASK2
 let a = 1, b = 1;
 let c = ++a;
 let d = b++;
 console.log(c); //2 since we increment the value before the operation
 console.log(d); //1 since we increment the value after the operation
 console.log(b); //2 since we incremented value before after the operation it will be 2
*/
/*
//TASK3
let a = 2;
let x = 1 + (a *= 2);// it means a=a*2
console.log(x); // ,so the answer is 5 
*/
/*
 //TASK4
//
 let a = 2;
 let x = 1 + (a *= 2);
 console.log(x); // 5


 console.log('test1', test); // it will show an error,since we have not defined the variable "test" yet;
 {
     let test = "something"
     console.log('test2', test); // it will show us the result "test2 something"
 }
 console.log('test3', test);  // it will show an error, since the variable "test" out of scope
 */
/*
 //TASK5

 let name = "Ulfat"// string
 let surname = Zakirli// string(but it must be with "")
 let year = 2000// number
 year = "2000"// string
 let city;// undefined
 let qualification = null// null
 let obj = { name: 'ulfat' }// object
 let arr = ['a', 'b', 'c']// array(object)

 */
/*
//TASK6
const arr1 = [9, 1, 5, 8, 9, 9, 3, 22, 11, 12, 32, 8]
//1.
let sum=arr1[0]+arr1[1]+arr1[2]+arr1[3]+arr1[4]+arr1[5]+arr1[6]+arr1[7]+arr1[8]+arr1[9]+arr1[10]+arr1[11];
//2.
arr1.push(10,88);
//3.
arr1.shift(arr1[0],arr1[1]);
//4.
arr1.unshift(0,9,11);
//5.
arr1.shift();
arr1.shift();
arr1.shift();
arr1.shift();

console.log(sum);
console.log(arr1);
*/
/*
//TASK7

const arr2 = ["Murad", "Anar", "Rufet", 'Anar', 'Gulshen', 'Nermin', "Ilkin", "Fuad", "Anar"]

console.log(arr2[2],arr2[3],arr2[4],arr2[5],arr2[6],arr2[7]);//1.
arr2[4]="Rovshen";//2.
arr2.map((name)=>console.log(name));//3.
const result=arr2.filter((name)=>name==='Anar');//4.
console.log(result);
//5.
arr2[1]="Perviz";
arr2[3]="Perviz";
arr2[8]="Perviz";
console.log(arr2);
//6.
arr2.shift();
console.log(arr2);
//7.
console.log(arr2.length);
*/
/*
//TASK8
const arr3 = ["9", 10, 100, 11, 'true', 'undefined', true, null, 'something', false]

let result1 = arr3.filter((item) => typeof item === 'number');
console.log(result1);

let result2 = arr3.filter((item) => typeof item === 'boolean'&&item===true);
console.log(result2);

let result3= arr3.filter((item) => typeof item === 'boolean'&&item===false);
console.log(result3);

let result4 = arr3.filter((item) => typeof item === 'string');
console.log(result4);
*/
/*
TASK8

const numbers = [1, 2, 4, 5, 3, 2, 5, 7, 8, 9, 11, 12, 22, 24, 25]

let result1 = numbers.filter((item) => item%2===0);
console.log(result1);

let result2 = numbers.filter((item) => item%2!=0);
console.log(result2);
*/
/*
//TASK9

const arr4 = [10, "29", 10, 100, 11, 'true', false, 'undefined', true, null, 'something', false]

let result=arr4.map((item)=>{
if(typeof item==='number'){
    return item+10;
}else if(typeof item==='string'){
    return item+' is string';
}else if(!item){
    return item+' is falsy';
}
return item;
})

console.log(result);

let sum=0;

let findSum=arr4.map((item)=>{
   if(typeof item==='number'){
       sum+=item;
}

})

console.log(sum);

let countTrue =0;

let findTrue=arr4.map((item)=>{
    if(typeof item==='boolean'&&item===true){
        countTrue++;
    }
})

console.log(countTrue);

let countFalse=0;

let findFalse=arr4.map((item)=>{
    if(typeof item==='boolean'&&item===false){
        countFalse++;
    }
})

console.log(countFalse);

let countString=0;

let findString=arr4.map((item)=>{
    if(typeof item==='string'){
      countString++;
    }
})

console.log(countString);
*/
/*
//TASK10

const obj1={
    name:'Khayala',
    surname:'Hatamova',
    age:18,
    city:Baku
}
obj1.name='John';

console.log(obj1);


const obj = {
    email: 'ulfat@gmail.com',
    info: {
        gender: 'Male',
        loc: {
            city: "Baku",
            street: 'Nizami 22',
            education: {
                "uni name": "ADNSU",
            }
        }
    }
}

console.log(obj.info.gender);
console.log(obj.info.loc.city);
console.log(obj.info.loc.education);
*/
