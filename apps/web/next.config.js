/*
 * @Author: Nicodemus nicodemusdu@gmail.com
 * @Date: 2022-12-28 09:36:45
 * @LastEditors: Nicodemus nicodemusdu@gmail.com
 * @LastEditTime: 2022-12-28 10:30:33
 * @FilePath: /FairVote-Fullstack/apps/web/next.config.js
 * @Description:
 *
 * Copyright (c) 2022 by Nicodemus nicodemusdu@gmail.com, All Rights Reserved.
 */
/** @type {import('next').NextConfig} */

const fs = require("fs")

if (!fs.existsSync("./.env")) {
    // eslint-disable-next-line global-require
    require("dotenv").config({ path: "../../.env" })
}

const nextConfig = {
    experimental: {
        appDir: true
    },
    images: {
        domains: ["flowbite.com"]
    },
    reactStrictMode: true,
    swcMinify: true,
    env: {
        ETHEREUM_URL: process.env.ETHEREUM_URL,
        ETHEREUM_PRIVATE_KEY: process.env.ETHEREUM_PRIVATE_KEY,
        CONTRACT_ADDRESS: process.env.CONTRACT_ADDRESS,
        CHAIN_ID: process.env.CHAIN_ID
    },
    publicRuntimeConfig: {
        GROUP_ID: process.env.GROUP_ID
    },
    eslint: {
        ignoreDuringBuilds: true
    }
}

module.exports = nextConfig
