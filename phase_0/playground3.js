function mineblock(blocknum){
    return new Promise(resolve => {
        setTimeout(()=> resolve(`⛏️ Block ${blocknum} mined!`),1500);
    });
}
async function  runblockchain() {
    console.log("🚀 Starting mining...");
    const block1 = await  (mineblock(1));
    console.log(block1);
    const block2 = await(mineblock(2));
    console.log(block2);
}
runblockchain();