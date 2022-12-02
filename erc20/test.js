const abi = require('./contracts_Token_sol_MyToken.json');
const ethers = require('ethers');

const CONTRACT = '0x50275d3F95E0F2FCb2cAb2Ec7A231aE188d7319d';
const secret = '0x99B3C12287537E38C90A9219D4CB074A89A16E9CDB20BF85728EBD97C343E342';
const provider = new ethers.providers.JsonRpcProvider('http://localhost:9933');
const contract = (async () => {
    const wallet = await new ethers.Wallet(secret, provider);
    const contract = new ethers.Contract(CONTRACT, abi, wallet);

    const sym = await contract.symbol();
    const name = await contract.name();
    const supply = await contract.totalSupply();
    console.log(`${name}: ${sym} = ${supply}`);

    const bal = await contract.balanceOf(wallet.address);
    console.log(`Balance: ${bal}`);
})()
