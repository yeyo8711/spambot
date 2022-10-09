require('dotenv').config()

const { ethers } = require("ethers");
const ABI = require("./abi.json");
const RPC = "https://rpc.ankr.com/bsc";
// contract address
const address = "0x55d398326f99059fF775485246999027B3197955";
const provider = new ethers.providers.JsonRpcProvider(RPC);
// Make sure to change PKs in ENV file
const signer = new ethers.Wallet(process.env.PK, provider);


// create contract object using address, abi, and the provider
const contract = new ethers.Contract(address, ABI, signer);



//To create attach another contract just create the contract object 

const main = async () => {
  setInterval(async () => {
    // replace with the function you need to call

    const owner = await contract.getOwner();
    console.log(owner);


    
    // 3000 = 3 seconds
  }, 3000);
};

main();
