function TransactionSim(counter){
    return new Promise((resolve,reject)=>{
       
        setTimeout(()=>{
        if (counter) resolve("✅ Transaction confirmed!");
        else reject("❌ Transaction reverted!");
    },2000);});
}
let succ = Math.random()>0.5;
async function run(){
    console.log("⏳ Sending transaction...");
    try{
        const name = await TransactionSim(succ);
        console.log(name);

    } catch(error){
        console.error(error);
    }
    
}
run();
