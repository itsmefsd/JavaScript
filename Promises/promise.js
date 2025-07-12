// const cart = ["Juta", "pents", "kurta", "tshirt"]

// createOrder(cart,function(){
//  proceedToPayment(orderId)
// })  


// const promise = createOrder(cart)

// promise.then(function(){
//  proceedToPayment(orderId)
// })

const GITHUB_API = "https://api.github.com/users/rai64521"

const user = fetch(GITHUB_API)

console.log(user);
