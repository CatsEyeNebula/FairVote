/*
 * @Author: Nicodemus nicodemusdu@gmail.com
 * @Date: 2022-12-17 14:38:17
 * @LastEditors: Nicodemus nicodemusdu@gmail.com
 * @LastEditTime: 2022-12-26 17:10:48
 * @FilePath: /test-semaphore-main/apps/contracts/tasks/deploy.ts
 * @Description:
 *
 * Copyright (c) 2022 by Nicodemus nicodemusdu@gmail.com, All Rights Reserved.
 */
import { task, types } from "hardhat/config"
import { poseidon_gencontract as poseidonContract } from "circomlibjs"
import { Contract } from "ethers"

task("deploy", "Deploy a SemaphoreVoting contract")
    .addOptionalParam<boolean>("logs", "Print the logs", true, types.boolean)
    .addParam("verifiers", "Tree depths and verifier addresses", null, types.json)
    .setAction(async ({ logs, verifiers }, { ethers }): Promise<Contract> => {
        const poseidonABI = poseidonContract.generateABI(2)
        const poseidonBytecode = poseidonContract.createCode(2)

        const [signer] = await ethers.getSigners()

        const PoseidonLibFactory = new ethers.ContractFactory(poseidonABI, poseidonBytecode, signer)
        const poseidonLib = await PoseidonLibFactory.deploy()

        await poseidonLib.deployed()

        if (logs) {
            console.info(`Poseidon library has been deployed to: ${poseidonLib.address}`)
        }

        const IncrementalBinaryTreeLibFactory = await ethers.getContractFactory("IncrementalBinaryTree", {
            libraries: {
                PoseidonT3: poseidonLib.address
            }
        })
        const incrementalBinaryTreeLib = await IncrementalBinaryTreeLibFactory.deploy()

        await incrementalBinaryTreeLib.deployed()

        if (logs) {
            console.info(`IncrementalBinaryTree library has been deployed to: ${incrementalBinaryTreeLib.address}`)
        }

        const ContractFactory = await ethers.getContractFactory("SemaphoreVoting", {
            libraries: {
                IncrementalBinaryTree: incrementalBinaryTreeLib.address
            }
        })

        const contract = await ContractFactory.deploy(verifiers)

        await contract.deployed()

        if (logs) {
            console.info(`SemaphoreVoting contract has been deployed to: ${contract.address}`)
        }

        return contract
    })
