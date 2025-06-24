// Reduce 


// normal code for adding number of arr
let arr=[7,9,8,5,5,8,9,5,0,6]

let a=0
for(let i=0;i<arr.length;i++)
{
    a+=arr[i]
}

console.log(a)

// add number of arr using function

function sum(arr) {
    let sum=0;
    for(let i=0;i<arr.length;i++)
    {
        sum+=arr[i]
    }
    return sum
    
}
console.log(sum(arr));


// add number using reduce synatx

const ans= arr.reduce(function(a,b){
    a+=b
    return a
},0)

console.log(ans);

const ans1= arr.reduce(function(a,b){
    if (a<b) {
        a=b
    }
    return a
},0)

console.log(ans1);
