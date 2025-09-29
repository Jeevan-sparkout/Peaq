const { ethers } = require("hardhat");
require("dotenv").config();
const { BASE_URL_AGUNG, DEPLOYER_PRIVATE_KEY, ADMIN_ADDRESS, STATION_MANAGER_ADDRESS, TX_REFUND_AMOUNT } = process.env;

async function main() {
    console.log("Starting MachineStationFactory deployment...");

    // Get environment variables (following foundry script pattern)
    const deployerPrivateKey = process.env.DEPLOYER_PRIVATE_KEY;
    let adminAddress = process.env.ADMIN_ADDRESS; // Changed to let
    let stationManager = process.env.STATION_MANAGER_ADDRESS; // Changed to let
    const txRefundAmount = process.env.TX_REFUND_AMOUNT;

    // Validate environment variables
    if (!deployerPrivateKey) {
        throw new Error("DEPLOYER_PRIVATE_KEY environment variable is required");
    }
    if (!adminAddress) {
        throw new Error("ADMIN_ADDRESS environment variable is required");
    }
    if (!stationManager) {
        throw new Error("STATION_MANAGER_ADDRESS environment variable is required");
    }
    if (!txRefundAmount) {
        throw new Error("TX_REFUND_AMOUNT environment variable is required");
    }

    // =================================================================
    //  THE FIX: Validate and checksum the address strings before use
    // =================================================================
    console.log("Validating addresses to prevent ENS lookup...");
    adminAddress = ethers.getAddress(adminAddress);
    stationManager = ethers.getAddress(stationManager);
    console.log("✅ Validated Admin Address:", adminAddress);
    console.log("✅ Validated Station Manager Address:", stationManager);
    // =================================================================

    // Create deployer signer from private key
    const { JsonRpcProvider, Wallet } = require("ethers");
    const provider = new JsonRpcProvider(process.env.BASE_URL_AGUNG);
    const deployerWallet = new Wallet(deployerPrivateKey, provider);
    console.log("Deploying with account:", deployerWallet.address);

    // Get account balance
    const balance = await provider.getBalance(deployerWallet.address);
    console.log("Account balance:", ethers.formatEther(balance), "Native Token");

    try {
        // Get the contract factory
        const MachineStationFactory = await ethers.getContractFactory(
            "MachineStationFactory",
            deployerWallet // pass the wallet with YOUR provider
        );

        // Deploy the contract with the validated addresses
        console.log("Deploying MachineStationFactory...");
        const factory = await MachineStationFactory.deploy(
            adminAddress,
            stationManager,
            txRefundAmount
        );

        // Wait for deployment
        await factory.waitForDeployment();
        const factoryAddress = await factory.getAddress();

        console.log("MachineStationFactory deployed to:", factoryAddress);
        console.log("Admin address:", adminAddress);
        console.log("Station Manager address:", stationManager);

        return factory;

    } catch (error) {
        console.error("❌ Deployment failed:", error.message);
        throw error;
    }
}

// Execute deployment
if (require.main === module) {
    main()
        .then(() => {
            console.log("🎉 Deployment completed successfully!");
            process.exit(0);
        })
        .catch((error) => {
            console.error("💥 Deployment failed:", error);
            process.exit(1);
        });
}

module.exports = main;