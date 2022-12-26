/*
 * @Author: Nicodemus nicodemusdu@gmail.com
 * @Date: 2022-12-17 14:38:17
 * @LastEditors: Nicodemus nicodemusdu@gmail.com
 * @LastEditTime: 2022-12-26 16:47:29
 * @FilePath: /test-semaphore-main/apps/contracts/hardhat.config.ts
 * @Description:
 *
 * Copyright (c) 2022 by Nicodemus nicodemusdu@gmail.com, All Rights Reserved.
 */
import "@nomiclabs/hardhat-ethers"
import "@nomicfoundation/hardhat-chai-matchers"
import "@semaphore-protocol/hardhat"
import "@typechain/hardhat"
import { config as dotenvConfig } from "dotenv"
import "hardhat-gas-reporter"
import { HardhatUserConfig } from "hardhat/config"
import { NetworksUserConfig } from "hardhat/types"
import { resolve } from "path"
import "solidity-coverage"
import { config } from "./package.json"
import "./tasks/deploy"

dotenvConfig({ path: resolve(__dirname, "../../.env") })

function getNetworks(): NetworksUserConfig {
    if (process.env.ETHEREUM_URL && process.env.ETHEREUM_PRIVATE_KEY) {
        const accounts = [`0x${process.env.ETHEREUM_PRIVATE_KEY}`]

        return {
            goerli: {
                url: process.env.ETHEREUM_URL,
                chainId: 5,
                accounts
            }
        }
    }

    return {}
}

const hardhatConfig: HardhatUserConfig = {
    solidity: config.solidity,
    paths: {
        sources: config.paths.contracts,
        tests: config.paths.tests,
        cache: config.paths.cache,
        artifacts: config.paths.build.contracts
    },
    networks: {
        hardhat: {
            chainId: 1337
        },
        ...getNetworks()
    },
    gasReporter: {
        currency: "USD",
        enabled: process.env.REPORT_GAS === "true",
        coinmarketcap: process.env.COINMARKETCAP_API_KEY
    },
    typechain: {
        outDir: config.paths.build.typechain,
        target: "ethers-v5"
    }
}

export default hardhatConfig
