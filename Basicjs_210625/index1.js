//  object in java script

const a=
[
    {
        fname :"vaibhav",
        lname : "verma",
        age: 22
    },
    {
        fname :"ayodhya",
        lname :"faizbad",
        age:21
    },
    {
        fname :"abhishek",
        lname :"verma",
        age : 19

    },
    {
        fname : "manuj",
        lname :"saxena",
        age : 23
    }

]

console.log(a[0][0]);  // it well return undefined 


// to get full name of each person we use this format

const output =a.map(user => user.fname + " " + user.lname)
console.log(output);


// to get avarage of Age of each man

// Using reduce 

let x=0
const avg1= a.reduce(function(b,c){
    b=b+c.age
    x++;
    return b
},0)
console.log(avg1/x);



// By using map


const outputFilter = a.filter (user => user.age >20)
console.log(outputFilter);

const finalResult = outputFilter.map((namee)=> namee.fname);

console.log(finalResult);
