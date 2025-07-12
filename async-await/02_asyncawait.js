const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise Resolved value")
    },5000)
})
const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise Resolved value")
    },10000)
})


//async await method to resolve promise

async function handlePromise(){

    console.log("hello world");
    
    const val = await p1
    console.log("Namaste Javascript");
    console.log(val);

    const val2 = await p2
    console.log("Namaste Javascript");
    console.log(val2);
    
    
}

handlePromise()

// function getData(){
//     // Js Engine was not waiting for promise to resolve
//     p.then((res)=>console.log(res))
//     console.log("Namaste Javascript");
    
// }

// getData()


