// Promise in java script

const a=["vaibhav","verma","ayodhya","faizabad","mathura","delhi"]



//using Call Back


// createOrder(a,function(order){
//     Payment(order,function(paymentid){
//         ordersummary(paymentid,function(){
//             updatemoney();
//         })
//     })
// })

// Using promises

// creteorder(a)
//     .than(function(orderid)
// {
//     return payment(orderid);
// })
//     .than(function(paymentid)
// {
//     return payment(paymentid);
// })
//     .than(function(paymentinfo)
// {
//     return payment(paymentinfo);
// })

// Promise-based function

function createOrder(data) {
    return new Promise((resolve, reject) => {
        if (data && data.length > 0) {
            let orderId = "1234";
            console.log("Order ID generated:", orderId);
            console.log("User data:", data);
            reject(orderId);  // success case
        } else {
            reject(new Error("No data provided"));  // error case
        }
    });
}

// Call the function and handle the Promise
const promise = createOrder(a);

promise
    .then(function (orderId) {
        console.log("Promise resolved with order ID:", orderId);
    })
    .catch(function (err) {
        console.log("Promise rejected with error:", err.message);
    });
 


