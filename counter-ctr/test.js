const abi = require('./contracts_Counter_sol_Counter.json');
const ethers = require('ethers');

const CONTRACT = '0xC2Bf5F29a4384b1aB0C063e1c666f02121B6084a';
const secret = '0x99B3C12287537E38C90A9219D4CB074A89A16E9CDB20BF85728EBD97C343E342';
const provider = new ethers.providers.JsonRpcProvider('http://localhost:9933');
const contract = (async () => {
    const wallet = await new ethers.Wallet(secret, provider);
    const contract = new ethers.Contract(CONTRACT, abi, wallet);

    let ctr = await contract.current();
    console.log(ctr);
    ctr = await contract.increment();
    console.log(ctr);
    await ctr.wait();
    ctr = await contract.current();
    console.log(ctr);
})()
