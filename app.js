require("dotenv").config();
const server = http.createServer(process.env.PORT || 8080);
const express = require("express");

const app = express();

app.set("port", PORT);

const { ethers } = require("ethers");

const ABI = require("./abi1.json");
const ABI2 = require("./abi2.json");
const ABI3 = require("./abi3.json");
const ABI4 = require("./abi4.json");
const ABI5 = require("./abi5.json");
const ABI6 = require("./abi6.json");
const ABI7 = require("./abi7.json");
const ABI8 = require("./abi8.json");
const ABI9 = require("./abi9.json");

// Replace with the correct RPC
const RPC = "https://rpc.ankr.com/bsc";
// contract address
// Replace Addresses with correct ones!!!
const address1 = "0x55d398326f99059fF775485246999027B3197955";
const address2 = "0x55d398326f99059fF775485246999027B3197955";
const address3 = "0x55d398326f99059fF775485246999027B3197955";
const address4 = "0x55d398326f99059fF775485246999027B3197955";
const address5 = "0x55d398326f99059fF775485246999027B3197955";
const address6 = "0x55d398326f99059fF775485246999027B3197955";
const address7 = "0x55d398326f99059fF775485246999027B3197955";
const address8 = "0x55d398326f99059fF775485246999027B3197955";
const address9 = "0x55d398326f99059fF775485246999027B3197955";

const provider = new ethers.providers.JsonRpcProvider(RPC);
// Make sure to change PKs in ENV file
const signer = new ethers.Wallet(process.env.PK, provider);

// create contract object using address, abi, and the signer
const contract = new ethers.Contract(address1, ABI, signer);
const contract2 = new ethers.Contract(address2, ABI2, signer);
const contract3 = new ethers.Contract(address3, ABI3, signer);
const contract4 = new ethers.Contract(address4, ABI4, signer);
const contract5 = new ethers.Contract(address5, ABI5, signer);
const contract6 = new ethers.Contract(address6, ABI6, signer);
const contract7 = new ethers.Contract(address7, ABI7, signer);
const contract8 = new ethers.Contract(address8, ABI8, signer);
const contract9 = new ethers.Contract(address9, ABI9, signer);

//To create attach another contract just create the contract object

const main = async () => {
  setInterval(async () => {
    // replace with the function you need to call

    const call1 = await contract.poke(1);
    console.log("call 1:", call1);
    /* uncomment to use */
    //const call2 = await contract2.poke(1);
    //console.log("call 2:", call2);
    //const call3 = await contract3.poke(1);
    //console.log("call 3:", call3);
    //const call4 = await contract4.poke(1);
    //console.log("call 4:", call4);
    //const call5 = await contract5.poke(1);
    //console.log("call 5:", call5);
    //const call6 = await contract6.poke(1);
    //console.log("call 6:", call6);
    //const call7 = await contract7.poke(1);
    //console.log("call 7:", call7);
    //const call8 = await contract8.poke(1);
    //console.log("call 8:", call8);
    //const call9 = await contract9.poke(1);
    //console.log("call 9:", call9);

    // 1000 = 1 seconds
  }, 4000);
};

main();
