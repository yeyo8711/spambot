require('dotenv').config()

const { ethers } = require("ethers");

const ABI = require("./abi.json");
const ABI2 = require("./abi2.json");
const ABI3 = require("./abi3.json");
const ABI4 = require("./abi4.json");

const RPC = "https://rpc.ankr.com/bsc";
// contract address
const address = "0x55d398326f99059fF775485246999027B3197955";
// Replace Addresses with correct ones!!!
const address2 = "0x55d398326f99059fF775485246999027B3197955";
const address3 = "0x55d398326f99059fF775485246999027B3197955";
const address4 = "0x55d398326f99059fF775485246999027B3197955";

const provider = new ethers.providers.JsonRpcProvider(RPC);
// Make sure to change PKs in ENV file
const signer = new ethers.Wallet(process.env.PK, provider);


// create contract object using address, abi, and the signer
const contract = new ethers.Contract(address, ABI, signer);
const contract2 = new ethers.Contract(address2, ABI2, signer);
const contract3 = new ethers.Contract(address3, ABI3, signer);
const contract4 = new ethers.Contract(address4, ABI4, signer);


//To create attach another contract just create the contract object 

const main = async () => {
  setInterval(async () => {

    // replace with the function you need to call

    const call1 = await contract.getOwner();
    const call2 = await contract2.getOwner();
    const call3 = await contract3.getOwner();

    console.log("call 1:", call1)
    console.log("call 2:", call2)
    console.log("call 3:", call3)




    
    // 1000 = 1 seconds
  }, 4000);
};

main();
