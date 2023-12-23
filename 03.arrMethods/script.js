const people = [
    {
        id: 1,
        name: 'Khayala',
        surname: 'Hatamova',
        age: 18,
        address: {
            street: 'Nizami 22',
            city: 'Baku',
            country: 'Azerbaijan'
        }
    },
    {
        id: 2,
        name: 'Khayal',
        surname: 'Hatamov',
        age: 45,
        address: {
            street: 'Nizami 23',
            city: 'Baku',
            country: 'Azerbaijan'
        }
    }, {
        id: 3,
        name: 'Khay',
        surname: 'Hatam',
        age: 38,
        address: {
            street: 'Nizami 24',
            city: 'Baku',
            country: 'Azerbaijan'
        },
    },
]

let result = people.reduce((acc, curr, index) => acc + index, 0);
console.log(result);

people.sort((a, b) => a.age - b.age);
people.sort((a, b) => b.age - a.age);

people.reverse();
console.log(people);

let result1 = people.filter((person) => person.name.length >= 6);
console.log(result1);

let result2 = people.find((person) => person.age > 35);
console.log(result2);

let result3 = people.map(person => 'myAge ' + person.age);
console.log(result3);


let user='ulfat';

let res1=user.slice(1,-1).toUpperCase()+user.slice(-1).toUpperCase();
console.log(res1);

let res2=user.slice(0,2).toLowerCase()+user.slice(2,3).toUpperCase()+user.slice(-2).toLowerCase();
console.log(res2);

let res3=user.slice(0,-1).toLowerCase()+user.slice(-1).toUpperCase();
console.log(res3);

let user1='ulfat zakirli';

let res4=user1.slice(0,1).toUpperCase()+user.slice(1,5).toLowerCase()+" "+user.slice(6,7).toUpperCase()+user.slice(7)
console.log(res4);

console.log(user1.split('l'));
console.log(user1.split(','));
console.log(user1.split(''));
console.log(user1.split(' '));

const studentArr=['Yusif','Reshad','Nihad','Nezire','Metin','Heyder','Rafiq','Eli','Nizam','Xeyale','Abbas','Anar','Ulfat'];

let res = studentArr.map(student => 'name: ' + student);
console.log(res);

const studentsText = res.join(', ');
console.log(studentsText);