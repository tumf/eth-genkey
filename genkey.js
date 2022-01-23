const ethWallet = require("ethereumjs-wallet").default;
let addressData = ethWallet.generate();
console.log(`Private key = ${addressData.getPrivateKeyString()}`);
console.log(`Address = ${addressData.getAddressString()}`);
