const Web3 = require("web3");
const authContractJson = require("C:/Users/rajag/formal_project/client/src/contracts/Auth.json");
const web3 = new Web3("http://localhost:7545");

const authContract = new web3.eth.Contract(
    authContractJson.abi,
    "0x3Ed5384E30713C8b82714371C2581273dD484E3e"
);

const username = process.argv[2];
const password = process.argv[3];


authContract.methods.register(username, password).send({ from: "0x68F73dDD106896fE876B265406FB6d95Fd843e92", gas: 3000000 })
    .then(function (receipt) {
        console.log(receipt);
    });

