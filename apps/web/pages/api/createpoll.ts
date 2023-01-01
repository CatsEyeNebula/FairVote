/*
 * @Author: Nicodemus nicodemusdu@gmail.com
 * @Date: 2022-12-28 15:06:06
 * @LastEditors: Nicodemus nicodemusdu@gmail.com
 * @LastEditTime: 2023-01-01 13:27:18
 * @FilePath: /FairVote-Fullstack/apps/web/pages/api/createpoll.ts
 * @Description:
 *
 * Copyright (c) 2022 by Nicodemus nicodemusdu@gmail.com, All Rights Reserved.
 */
import { Contract, providers, Wallet } from 'ethers';
import type { NextApiRequest, NextApiResponse } from 'next';
import SemaphoreVoting from '../../contract-artifacts/SemaphoreVoting.json';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (typeof process.env['CONTRACT_ADDRESS'] !== 'string') {
        throw new Error('Please, define CONTRACT_ADDRESS in your .env file');
    }

    if (typeof process.env['ETHEREUM_URL'] !== 'string') {
        throw new Error('Please, define ETHEREUM_URL in your .env file');
    }

    if (typeof process.env['ETHEREUM_PRIVATE_KEY'] !== 'string') {
        throw new Error('Please, define ETHEREUM_PRIVATE_KEY in your .env file');
    }

    const ethereumPrivateKey = process.env['ETHEREUM_PRIVATE_KEY'];
    const ethereumURL = process.env['ETHEREUM_URL'];
    const contractAddress = process.env['CONTRACT_ADDRESS'];

    const provider = new providers.JsonRpcProvider(ethereumURL);
    const signer = new Wallet(ethereumPrivateKey, provider);
    const contract = new Contract(contractAddress, SemaphoreVoting.abi, signer);

    const { pollId, merkleTreeDepth } = req.body;

    try {
        const vote = await contract['createPoll'](pollId, signer.address, merkleTreeDepth);

        await vote.wait();

        res.status(200).end();
    } catch (error: any) {
        console.error(error);

        res.status(500).end();
    }
}
