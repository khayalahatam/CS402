//---------------------------------------------------------//

let fullName = 'Khayala Hatamova Zahir';

console.log(fullName.split(''));//1

let array= fullName.split(' ');//2

let tmp = array[0];
array[0]=array[1];
array[1]=tmp;

console.log(array);

let newFullName=array.join(' ');//3
console.log(newFullName);

//---------------------------------------------------------//

let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7];

 let count = arr.filter(num => num === 5).length;

console.log(count);//4

 //-------------------------------------------------------//

let sum = arr.reduce((acc,curr)=>acc+curr,0);
console.log(sum);//5

//-------------------------------------------------------//

let arr0 = arr.filter((num, index) => index===0||index<arr.length && num === arr[index]).sort((a, b) => a - b);
console.log(arr0);//6

//------------------------------------------------------//

let maxNumberCount=arr.filter(num=>num===Math.max(...arr)).length;
console.log(maxNumberCount);//7

//-----------------------------------------------------//

let fullName1 = 'Khayala Hatamova Zahir';
let array1= fullName1.split(' ');
let result = arr.filter(num => num === array1[0].length);
console.log(result);//8

//----------------------------------------------------//

let firstEqualElement = arr.find(num=>num%3===2);
let firstEqualElementIndex = arr.findIndex(num=>num%3===2);
console.log('number: '+firstEqualElement,'index: '+firstEqualElementIndex);//9

//---------------------------------------------------//

let maxNumberIndex=arr.findIndex(num=>num===Math.max(...arr));
console.log(maxNumberIndex);//10

//--------------------------------------------------//

let findIndexOf4 = arr.map((num,index)=>{
    if(num===4){
    return index;
    }
});

console.log(findIndexOf4);//11

//-------------------------------------------------//

let maxIndex = 0;
let minIndex=maxIndex;

        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === 5) {
                if (j > maxIndex) {
                    maxIndex = j;
                }
                if (j<minIndex) {
                    minIndex = j;
                }
            }
        }

console.log('max: ' + maxIndex, 'min: ' + minIndex);//12?

//-------------------------------------------------//

let res = arr.filter((num=>num>2));
console.log(arr.length-res.length);//13

//------------------------------------------------//

let Sum=0;
let SumOfIndexes=arr.reduce((acc,curr,index)=>{
    if(curr===7){
        return acc+index;
    }
    return acc;
},Sum);
console.log(SumOfIndexes);//14

//-------------------------------------------------//

let arr2 = [
    {
        name: 'test',
        key: 1
    },
    {
        name: 'task',
        key: 2
    },
    {
        name: 'tanqo',
        key: 3
    },
    {
        name: 'like',
        key: 4
    },
    {
        name: 'task',
        key: 5
    },
    {
        name: 'trust',
        key: 6
    },
    {
        name: 'test',
        key: 7
    },
    {
        name: 'last',
        key: 8
    },
    {
        name: 'tanqo',
        key: 9
    },
    {
        name: 'elephant',
        key: 10
    },
    {
        name: 'love',
        key: 11
    },
    {
        name: 'small',
        key: 12
    },
    {
        name: 'little',
        key: 13
    },
]

function findT(array){

let newArray=[];

array.map(item=> {

if(item.name.startsWith('t')){
    newArray.push(item.name);
}

});

return newArray;

}

let newArray = findT(arr2);
console.log(newArray);//16

//------------------------------------------------//

function countWordsT(array) {

let count =0;

array.map(item=>{

if(item.name.startsWith('t')&&item.name.endsWith('t')){
    count++;
}

});

return count;

}

let wordCount=countWordsT(arr2);
console.log(wordCount);//17

//------------------------------------------------//

function sumOfKeys(array) {

    let sum = 0;
    
    array.map(item=>{
    
    if(item.name.startsWith('t')&&item.name.endsWith('t')){
        sum+=item.key;
    }
    
    });
    
    return sum;
    
    }

    let keySum=sumOfKeys(arr2);
    console.log(keySum);//18

//------------------------------------------------//
/*
function changingValue(array) {
    
   return array.map(item=>{
    
    if(item.name.endsWith('e')){
        item.name='SuperDev';
    }

    return item;

    });

    }
    
let superDev=changingValue(arr2);
console.log(superDev);//19
*/
//------------------------------------------------//

function LongestWordKey(array){



    let maxWordLength = array[0].name.length;
    let maxKey=0;
    let i=1;

    while(i<array.length){
        if(array[i].name.length>maxWordLength){
            maxWordLength=array[i].name.length;
            maxKey=array[i].key;
        }
        i++;
    }
     
    return maxKey;
}

let longestWordKey=LongestWordKey(arr2);
console.log(longestWordKey);//20

//------------------------------------------------//

function longestWordIndex(array) {
    let longestWordIndex = 0;
    let maxLength = array[0].name.length;

    for (let i = 1; i < array.length; i++) {
        if (array[i].name.length > maxLength) {
            maxLength = array[i].name.length;
            longestWordIndex = i;
        }
    }

    return Math.pow(longestWordIndex, 2);
}

let LongestWordIndex = longestWordIndex(arr2);
console.log(LongestWordIndex);//21

//------------------------------------------------//

function comparing(array){
    let newArray=[];
array.map(item=>{
    if(item.name.length===4){
    newArray.push(item.name);
    }
});
 return newArray;
}

let newArr=comparing(arr2);
console.log(newArr);//22

//------------------------------------------------//

function maxKeyName(array) {
    let maxKey = array[0].key;
    let maxName = array[0].name;

    for (let i = 1; i < array.length; i++) {
        if (array[i].key > maxKey) {
            maxKey = array[i].key;
            maxName = array[i].name;
        }
    }

    return maxName;
}

let MaxKeyName = maxKeyName(arr2);
console.log(MaxKeyName);//23

//------------------------------------------------//

function findIndexL(array) {
    return array.map((item, index) => {
        let lCount=0;
        for (let i=0;i<item.name.length;i++) {
            if (item.name[i] === 'l') {
                lCount++;
                if (lCount === 2) {
                    return index;
                }
            }
        }
    });
}

let resultL = findIndexL(arr2);
console.log(resultL);//24

//------------------------------------------------//

function findKeyT(array){
return array.map(item=>{
    let TCount = 0;
    for(let i=0;i<item.name.length;i++){
        if(item.name[i] === 't'){
           TCount++;
           if(TCount === 2){
             return item.key;
           }
        }
    }
});

}

let resultT = findKeyT(arr2);
console.log(resultT);//25

//------------------------------------------------//

