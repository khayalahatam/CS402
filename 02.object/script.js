// const obj2 = {
//     id: 1112,
//     firstName: 'Khayala',
//     lastName: 'Hatamova',
//     age: 18,
//     address: {
//         street: 'Vasarhelyi',
//         city: 'Budapest',
//     },
//     position: 'student',
//     info: {
//         uni: 'BME',
//         qualification: 'CSE',
//         isAdmin: true,
//     }
// }

// obj2.firstName = 'Khayal';
// obj2.lastName = 'Hatam';
// obj2.age = 20;
// obj2.address.street = 'Nizami';
// obj2.address.city = 'Baku';
// obj2.position = 'MERN stack';
// obj2.info.uni = 'ADA';
// obj2.info.qualification = 'CS';
// obj2.info.isAdmin = false;

// delete obj2.isAdmin;
// delete obj2.address;

// console.log(obj2);
// console.log(obj2.id + obj2.age);
// console.log(obj2.age * obj2.id);

// //array
// const array = [7, true, 'XH', undefined, null];
// console.log(array[1], array[array.length - 2]);
// console.log(array.at(-2));
// console.log(array.at(-4));

// array.push(null, undefined);
// array.pop(array);
// array.unshift(false, 'Khayala', 18, true);
// array.shift(array);
// array.shift(array);


// console.log(array);

// const students = [
// {  
//     id: 1,
//     name: 'Khayala',
//     surname: 'Hatamova',
//     age: 18
// },
// {
//     id:5,
//     name: 'Khayala',
//     surname: 'Hatam',
//     age: 20

// },
// {
//     id: 2,
//     name: 'Abbas',
//     surname:'Jafarov',
//     age:24
// }

// ];

// students.map((item,index)=>console.log(item.id));
// students.map((item,index)=>console.log(item.age+item.id));

// const result= students.filter(item=>item.age>=22&&item.age<=25);
// console.log(result);

// let sum =0;
// const data=students.map((item)=>sum+=item.age);
// console.log(data);
// console.log(sum);

// let mult=1;
// const id=students.map((item)=>mult*=item.id);
// console.log(mult);

// let sub=0;
// const index=students.map((item,index)=>sub-=index);
// console.log(sub);


// const res1 = students.find(item=>item.surname=='Hatamova')
// const res2 = students.findlast(item=>item.name=='Khayala')

// console.log(res1)
// console.log(res2)


/*let username  = 'Xeyale'
 
switch(username) {
    case 'Xeyale':
    console.log('Agilli ol!');
    break;

    default:
        console.log('default');
        break;


}
*/