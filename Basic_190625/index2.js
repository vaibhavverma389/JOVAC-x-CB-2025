 // Higher Order Function
 
const arr1 = [1,2,3,4]

const arr2 = [5,6,7,8]

const squre = function (a){
    let result = [];
    for (let i=0; i<a.length;i++){
        result.push(a[i]*a[i]);
    }
    return result;
}

console.log(squre(arr1));
console.log(squre(arr2));


const half = function (b){
    let result =[]
    for (let i = 0; i<b.length;i++){
        result.push(b[i]/2);
    }
    return result;
}

console.log(half(arr1));
console.log(half(arr2));