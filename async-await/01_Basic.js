const p = new Promise((resolve,reject)=>{
    resolve("Promise resolved Value")
})


async function getData(){
    return p
}

const dataPromise = getData();

// console.log(dataPromise);

dataPromise.then(res => console.log(res))

