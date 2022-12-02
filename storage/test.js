const abi = require('./contracts_SimpleStorage_sol_SimpleStorage.json');
const ethers = require('ethers');

const CONTRACT = '0xe573BCA813c741229ffB2488F7856C6cAa841041';
const secret = '0x99B3C12287537E38C90A9219D4CB074A89A16E9CDB20BF85728EBD97C343E342';
const provider = new ethers.providers.JsonRpcProvider('http://localhost:9933');
const contract = (async () => {
    const wallet = await new ethers.Wallet(secret, provider);
    const contract = new ethers.Contract(CONTRACT, abi, wallet);

    let ctr = await contract.get();
    console.log(ctr);
    let to_set = Math.floor(Math.random() * 1000);
    ctr = await contract.set(to_set);
    console.log(ctr);
    await ctr.wait();
    ctr = await contract.get();
    console.log(ctr);
    console.log(to_set);
})()
