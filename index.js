
// ======================== Step 1 ===========================================================

// import { ethers, Wallet } from 'ethers';
// import { MSF } from '@peaq-network/msf';
// import 'dotenv/config';


// const provider = new ethers.JsonRpcProvider(process.env.HTTPS_BASE_URL);
// const adminWallet = new Wallet(process.env.MACHINE_STATION_ADMIN_KEY, provider);
// const stationManagerWallet = new Wallet(process.env.MACHINE_STATION_MANAGER_KEY, provider);


// const msf_sdk = await MSF.createInstance({
//     baseUrl: process.env.HTTPS_BASE_URL,
//     machineStationAddress: process.env.MACHINE_STATION_ADDRESS,
//     stationAdmin: adminWallet,
//     stationManager: stationManagerWallet
// });
// console.log(msf_sdk);

// =============================================== Step 2 =========================================================

// import 'dotenv/config';
// import { Sdk } from '@peaq-network/sdk';

// const peaq_sdk = await Sdk.createInstance({
//     baseUrl: process.env.HTTPS_BASE_URL,
//     chainType: Sdk.ChainType.EVM
// });

// ================================================== Step 3 ==================================================
// -------------------------- To Update Congig _------------------------------

// import 'dotenv/config';
// import { ethers, Wallet } from 'ethers';
// import { MSF, MachineStationConfigKeys, ConfirmationMode } from '@peaq-network/msf';

// async function main() {
// 	// 1. Setup admin and station manager wallets
//   const provider = new ethers.JsonRpcProvider(process.env.HTTPS_BASE_URL);
//   const stationAdmin = new Wallet(process.env.MACHINE_STATION_ADMIN_KEY, provider);
//   const stationManager = new Wallet(process.env.MACHINE_STATION_MANAGER_KEY, provider);

//   // 2. Initialize MSF sdk
//   const msf_sdk = await MSF.createInstance({
//     baseUrl: process.env.HTTPS_BASE_URL,
//     machineStationAddress: process.env.MACHINE_STATION_ADDRESS,
//     stationAdmin,
//     stationManager,
//   });

//   // 3a. Send the tx
//   const { txHash, receipt } = await msf_sdk.updateConfigs(
//     {
//       key:   MachineStationConfigKeys.FUNDING_AMOUNT_KEY,
//       value: ethers.parseUnits('0.5', 18),  // 0.5 tokens
//     },
//     status => console.log('Tx status:', status),
//     { mode: ConfirmationMode.FAST }
//   );

//   console.log('txHash:', txHash);
//   console.log('Receipt:', await receipt);
// }

// main().catch(console.error);


// ========================== To deploy MAchine Smart Account ==============================

// import 'dotenv/config';
// import { ethers, Wallet } from 'ethers';
// import { MSF, ConfirmationMode } from '@peaq-network/msf';

// async function main() {
// 	// 1. Setup admin and station manager wallets
//   const provider = new ethers.JsonRpcProvider(process.env.HTTPS_BASE_URL);
//   const stationAdmin = new Wallet(process.env.MACHINE_STATION_ADMIN_KEY, provider);
//   const stationManager = new Wallet(process.env.MACHINE_STATION_MANAGER_KEY, provider);

//   // 2. Initialize MSF sdk
//   const msf_sdk = await MSF.createInstance({
//     baseUrl: process.env.HTTPS_BASE_URL,
//     machineStationAddress: process.env.MACHINE_STATION_ADDRESS,
//     stationAdmin,
//     stationManager,
//   });
  
//   // 3. Prepare owner address & nonce
//   const ownerAddr = process.env.MACHINE_ACCOUNT_OWNER_ADDRESS;
//   const nonce = BigInt(crypto.getRandomValues(new Uint32Array(1))[0]);

//   // 4. Generate the signature
//   const signature = await msf_sdk.adminSignDeployMachineSmartAccount({
//     machineOwnerAddress: ownerAddr,
//     nonce: nonce
//   });
//   console.log('Signature:', signature);
  
//   // 5a. Auto-send the deployment transaction
//   const { txHash, receipt, deployedAddress } = await msf_sdk.deployMachineSmartAccount(
//     {
//       machineOwnerAddress: ownerAddr,
//       nonce: nonce,
//       stationManagerSignature: signature
//     }, 
//       status => console.log('Deployment status:', status),
//     { mode: ConfirmationMode.FAST });
  
//   console.log('txHash:', txHash);
//   console.log('Receipt:', await receipt);
//   console.log('Deployed Address:', deployedAddress);

// }

// main().catch(console.error);

// ============================= To transferMachineStationBalance  balance to a new MSF ============================= 

// import 'dotenv/config';
// import { ethers, Wallet } from 'ethers';
// import { MSF, ConfirmationMode } from '@peaq-network/msf';

// async function main() {
// 	// 1. Setup admin and station manager wallets
//   const provider = new ethers.JsonRpcProvider(process.env.HTTPS_BASE_URL);
//   const stationAdmin = new Wallet(process.env.MACHINE_STATION_ADMIN_KEY, provider);
//   const stationManager = new Wallet(process.env.MACHINE_STATION_MANAGER_KEY, provider);

//   // 2. Initialize MSF sdk
//   const msf_sdk = await MSF.createInstance({
//     baseUrl: process.env.HTTPS_BASE_URL,
//     machineStationAddress: process.env.MACHINE_STATION_ADDRESS,
//     stationAdmin,
//     stationManager,
//   });
  
//   // 3. Prepare new MSF address address & nonce
//   const newMSF = process.env.NEW_MACHINE_STATION_ADDRESS;
//   const nonce = BigInt(crypto.getRandomValues(new Uint32Array(1))[0]);

//   // 4. Generate the signature
//   const signature = await msf_sdk.adminSignTransferMachineStationBalance({
//     newMachineStationAddress: newMSF,
//     nonce: nonce
//   });
//   console.log('Signature:', signature);
  
//   // 5a. Auto-send the transfer transaction
//   const { txHash, receipt } = await msf_sdk.transferMachineStationBalance(
//     {
//       newMachineStationAddress: newMSF,
//       nonce: nonce,
//       stationAdminSignature: signature
//     },
//       status => console.log('Deployment status:', status),
//     { mode: ConfirmationMode.FAST });
  
//   console.log('txHash:', txHash);
//   console.log('Receipt:', await receipt);

// }

// main().catch(console.error);



// ==================================== To executeTransaction =========================================

// import 'dotenv/config';
// import { ethers, Wallet } from 'ethers';
// import { Sdk } from '@peaq-network/sdk';
// import { MSF, ConfirmationMode } from '@peaq-network/msf';

// async function main() {
// 	// 1. Setup admin and station manager wallets
//   const provider = new ethers.JsonRpcProvider(process.env.HTTPS_BASE_URL);
//   const stationAdmin = new Wallet(process.env.MACHINE_STATION_ADMIN_KEY, provider);
//   const stationManager = new Wallet(process.env.MACHINE_STATION_MANAGER_KEY, provider);

//   // 2. Initialize MSF sdk
//   const msf_sdk = await MSF.createInstance({
//     baseUrl: process.env.HTTPS_BASE_URL,
//     machineStationAddress: process.env.MACHINE_STATION_ADDRESS,
//     stationAdmin,
//     stationManager,
//   });
  
//   // 3. Initialize peaq sdk for tx building
// 	const peaq_sdk = await Sdk.createInstance({
//     baseUrl: process.env.HTTPS_BASE_URL,
//     chainType: Sdk.ChainType.EVM
// 	});
	
// 	// 4. Prepare data to send with unique nonce
// 	const storage = await peaq_sdk.storage.addItem({ itemType: 'foo', item: 'bar' });
//   const nonce = BigInt(crypto.getRandomValues(new Uint32Array(1))[0]);

//   // 5. Generate the signature
//   const signature = await msf_sdk.adminSignTransaction({
//     target: storage.tx.to,
//     calldata: storage.tx.data,
//     nonce: nonce,
//     refundAmount: 0n    // optional refundOverride; 0 uses default
//   });
  
//   // 6a. Auto-send the transfer transaction
//   const { txHash, receipt } = await msf_sdk.executeTransaction({
//     target: storage.tx.to,
//     calldata: storage.tx.data,
//     nonce: nonce,
//     refundAmount: 0n,
//     machineStationOwnerSignature: signature,
//     sendTransaction: true
// },
//       status => console.log('Deployment status:', status),
//     { mode: ConfirmationMode.FAST });
  
//   console.log('txHash:', txHash);
//   console.log('Receipt:', await receipt);

// }

// main().catch(console.error)

// ================================== To execute machine transaction =============================

// import 'dotenv/config';
// import { ethers, Wallet } from 'ethers';
// import { Sdk } from '@peaq-network/sdk';
// import { MSF, ConfirmationMode } from '@peaq-network/msf';

// async function main() {
// 	// 1. Setup admin and station manager wallets
//   const provider = new ethers.JsonRpcProvider(process.env.HTTPS_BASE_URL);
//   const stationAdmin = new Wallet(process.env.MACHINE_STATION_ADMIN_KEY, provider);
//   const stationManager = new Wallet(process.env.MACHINE_STATION_MANAGER_KEY, provider);

//   // 2. Initialize MSF sdk
//   const msf_sdk = await MSF.createInstance({
//     baseUrl: process.env.HTTPS_BASE_URL,
//     machineStationAddress: process.env.MACHINE_STATION_ADDRESS,
//     stationAdmin,
//     stationManager,
//   });
  
//   // 3. Initialize peaq sdk for tx building
//   const peaq_sdk = await Sdk.createInstance({
//     baseUrl: process.env.HTTPS_BASE_URL,
//     chainType: Sdk.ChainType.EVM
//   });

// 	// 4. Create tx for a previously deployed machine address
//   const machineAddr = '0x...';
//   const storageResult = await peaq_sdk.storage.addItem({ itemType: 'foo', item: 'bar' });
//   const nonce = BigInt(crypto.getRandomValues(new Uint32Array(1))[0]);
  
//   // 5. Obtain machine owner signer (can use frontend for this step to get signer)
//   const machineOwnerWallet = new Wallet(
//     process.env.MACHINE_ACCOUNT_OWNER_PRIVATE_KEY,
//     provider
//   );

//   // 6. MachineSmartAccount owner signs
//   const machineSignature =
//     await msf_sdk.machineSignMachineTransaction({
//       machineAddress: machineAddr,
//       target: storageResult.tx.to,
//       calldata: storageResult.tx.data,
//       nonce: nonce
//     }, machineOwnerWallet);


//   // 7. Station manager signs
//   const adminSig = await msf_sdk.adminSignMachineTransaction({
//     machineAddress: machineAddr,
//     target: storageResult.tx.to,
//     calldata: storageResult.tx.data,
//     nonce: nonce,
//     refundAmount: 0n
//   });

//   // 8a. Auto-send (owner pays gas)
//   const result = await msf_sdk.executeMachineTransaction({
//     machineAddress: machineAddr,
//     target: storageResult.tx.to,
//     calldata: storageResult.tx.data,
//     nonce: nonce,
//     refundAmount: 0n,
//     machineStationOwnerSignature: adminSig,
//     machineOwnerSignature: machineSignature,
//     sendTransaction: true    // auto-send
//   },
//   status => console.log('Deployment status:', status),
//   { mode: Sdk.ConfirmationMode.FAST });  // optional callback

//   console.log(result)
//   await result.receipt
//   console.log(result.receipt)

// }

// main().catch(console.error); 

// ======================================== To execute machine batch transaction =============================

// import 'dotenv/config';
// import { ethers, Wallet } from 'ethers';
// import { Sdk } from '@peaq-network/sdk';
// import { MSF, ConfirmationMode } from '@peaq-network/msf';

// async function main() {
// 	// 1. Setup admin and station manager wallets
//   const provider = new ethers.JsonRpcProvider(process.env.HTTPS_BASE_URL);
//   const stationAdmin = new Wallet(process.env.MACHINE_STATION_ADMIN_KEY, provider);
//   const stationManager = new Wallet(process.env.MACHINE_STATION_MANAGER_KEY, provider);

//   // 2. Initialize MSF sdk
//   const msf_sdk = await MSF.createInstance({
//     baseUrl: process.env.HTTPS_BASE_URL,
//     machineStationAddress: process.env.MACHINE_STATION_ADDRESS,
//     stationAdmin,
//     stationManager,
//   });
  
//   // 3. Initialize peaq sdk for tx building
//   const peaq_sdk = await Sdk.createInstance({
//     baseUrl: process.env.HTTPS_BASE_URL,
//     chainType: Sdk.ChainType.EVM
//   });

// 	// 4. Prepare machines & storage calls
//   const machines = ['0x...', '0x...'];
//   const storageCalls = await Promise.all([
//     peaq_sdk.storage.addItem({ itemType: 'foo', item: '1' }),
//     peaq_sdk.storage.addItem({ itemType: 'bar', item: '2' })
//   ]);
//   const targets = storageCalls.map(r => r.tx.to);
//   const calldataList = storageCalls.map(r => r.tx.data);
//   const machineNonces = machines.map(() => BigInt(Math.floor(Math.random() * 1e9)));
  
//   // 5. Obtain machine owner signer (can use frontend for this step to get signer)
//   // assuming same signer for both accounts
//   const machineOwnerWallet = new Wallet(
//     process.env.MACHINE_ACCOUNT_OWNER_PRIVATE_KEY,
//     provider
//   );
  
//   // 6. Sign every tx that will be executed in the batch
//   const machineSigs = [];
//   for (let i = 0; i < machines.length; i++) {
//     const signature = await msf_sdk.machineSignMachineTransaction({
//       machineAddress: machines[i],
//       target: targets[i],
//       calldata: calldataList[i],
//       nonce: machineNonces[i]
//     }, machineOwnerWallet);
//     machineSigs.push(signature);
//    }
   
//   const nonce = BigInt(crypto.getRandomValues(new Uint32Array(1))[0]);

//   // 7. Station manager signs
//   const adminSig = await msf_sdk.adminSignMachineBatchTransactions({
//     machineAddresses: machines,
//     targets: targets,
//     calldataList: calldataList,
//     nonce: nonce,
//     refundAmount: 0n,
//     machineNonces: machineNonces
//   });

//   // 8a. Auto-send (owner pays gas)
//   const result = await msf_sdk.executeMachineBatchTransactions({
//     machineAddresses: machines,
//     targets: targets,
//     calldataList: calldataList,
//     nonce: nonce,
//     refundAmount: 0n,
// 		machineNonces: machineNonces,
//     machineStationOwnerSignature: adminSig,
//     machineOwnerSignatures: machineSigs,
//     sendTransaction: true    // auto-send
//   },
//   status => console.log('Deployment status:', status),
//   { mode: Sdk.ConfirmationMode.FAST });  // optional callback

//   console.log(result)
//   await result.receipt
//   console.log(result.receipt)

// }

// main().catch(console.error); 

// ================================ To machineSignTransferMachineBalance =============================

// import 'dotenv/config';
// import { ethers, Wallet } from 'ethers';
// import { Sdk } from '@peaq-network/sdk';
// import { MSF, ConfirmationMode } from '@peaq-network/msf';

// async function main() {
// 	// 1. Setup admin and station manager wallets
//   const provider = new ethers.JsonRpcProvider(process.env.HTTPS_BASE_URL);
//   const stationAdmin = new Wallet(process.env.MACHINE_STATION_ADMIN_KEY, provider);
//   const stationManager = new Wallet(process.env.MACHINE_STATION_MANAGER_KEY, provider);

//   // 2. Initialize MSF sdk
//   const msf_sdk = await MSF.createInstance({
//     baseUrl: process.env.HTTPS_BASE_URL,
//     machineStationAddress: process.env.MACHINE_STATION_ADDRESS,
//     stationAdmin,
//     stationManager,
//   });

// 	// 3. Get machine addresses in the tx
// 	const machineAddr = '0x...';
//   const recipient = '0x...';
//   const nonce = BigInt(crypto.getRandomValues(new Uint32Array(1))[0]);
  
//   // 4. Obtain machine owner signer
//   const machineOwnerWallet = new Wallet(
//     process.env.MACHINE_ACCOUNT_OWNER_PRIVATE_KEY,
//     provider
//   );
  
//   // 5. Machine owner signs the token transfer operation
//   const machineSignature =
//     await msf_sdk.machineSignTransferMachineBalance({
//       machineAddress: machineAddr,
//       recipientAddress: recipient,
//       nonce: nonce
//     }, machineOwnerWallet);

//   // 6. Station manager signs
//   const adminSig = await msf_sdk.adminSignTransferMachineBalance({
//       machineAddress: machineAddr,
//       recipientAddress: recipient,
//       nonce: nonce
//   });

//   // 7a. Auto-send (owner pays gas)
//   const result = await msf_sdk.executeMachineTransferBalance({
//     machineAddress: machineAddr,
//     recipientAddress: recipient,
//     nonce: nonce,
//     stationManagerSignature: adminSig,
//     machineOwnerSignature: machineSignature,
//     sendTransaction: true    // auto-send
//   },
//   status => console.log('Deployment status:', status),
//   { mode: Sdk.ConfirmationMode.FAST });  // optional callback

//   console.log(result)
//   await result.receipt
//   console.log(result.receipt)

// }

// main().catch(console.error); 


import 'dotenv/config';
import { ethers, Wallet } from 'ethers';
import { MSF, ConfirmationMode } from '@peaq-network/msf';

async function main() {
	// 1. Setup admin and station manager wallets
  const provider = new ethers.JsonRpcProvider(process.env.HTTPS_BASE_URL);
  const stationAdmin = new Wallet(process.env.MACHINE_STATION_ADMIN_KEY, provider);
  const stationManager = new Wallet(process.env.MACHINE_STATION_MANAGER_KEY, provider);

  // 2. Initialize MSF sdk
  const msf_sdk = await MSF.createInstance({
    baseUrl: process.env.HTTPS_BASE_URL,
    machineStationAddress: process.env.MACHINE_STATION_ADDRESS,
    stationAdmin,
    stationManager,
  });
  
  // 3. Prepare new MSF address address & nonce
  const newMSF = process.env.NEW_MACHINE_STATION_ADDRESS;
  const nonce = BigInt(crypto.getRandomValues(new Uint32Array(1))[0]);

  // 4. Generate the signature
  const signature = await msf_sdk.adminSignTransferMachineStationBalance({
    newMachineStationAddress: newMSF,
    nonce: nonce
  });
  console.log('Signature:', signature);
  
  // 5a. Auto-send the transfer transaction
  const { txHash, receipt } = await msf_sdk.transferMachineStationBalance(
    {
      newMachineStationAddress: newMSF,
      nonce: nonce,
      stationAdminSignature: signature
    },
      status => console.log('Deployment status:', status),
    { mode: ConfirmationMode.FAST });
  
  console.log('txHash:', txHash);
  console.log('Receipt:', await receipt);

}

main().catch(console.error);