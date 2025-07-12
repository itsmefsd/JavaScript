const name = "Sumant Rai"

console.log(name);

async function myName(name){
   setTimeout(()=>{
     console.log(`My name is ${name}`);
   },4000)
    
}

const data = await myName("shubhangi")
console.log(data);
