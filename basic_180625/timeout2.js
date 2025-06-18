
// FORLOOP


for (var i = 0; i <= 10; i++) {
    function closuress(i) {
        setTimeout(() => {
            console.log(i); // its print numbers 0 to 10 each print after one sec
        }, i * 1000)  // setting time to delay or setouttime define
    }
    closuress(i); // calling function
}