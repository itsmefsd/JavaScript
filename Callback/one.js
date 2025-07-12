console.log("Namaste");


setTimeout(function(){
    console.log("Javascript");
    
},5000)
// console.log("JavaScript");

console.log("Seasion 2");


const cart = ["shoes", "pants", "kurta"]

api.createOrder(cart,function(){
    api.proceedToPayment(function(){
        api.showOrderSummary(function(){                             // Callback Hell
            api.updateWallet()
        })
    })
})