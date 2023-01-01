/*
 * @Author: Nicodemus nicodemusdu@gmail.com
 * @Date: 2022-12-31 23:41:28
 * @LastEditors: Nicodemus nicodemusdu@gmail.com
 * @LastEditTime: 2023-01-01 10:43:00
 * @FilePath: /FairVote-Fullstack/apps/web/pages/api/getDAOInfo.ts
 * @Description:
 *
 * Copyright (c) 2022 by Nicodemus nicodemusdu@gmail.com, All Rights Reserved.
 */
import { faker } from '@faker-js/faker';
import type { NextApiRequest, NextApiResponse } from 'next';
import IDAOInfo from '../../types/IDAOInfo';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { _id } = req.body;
    try {
        // 这里给的是faker数据, 需要替换为从服务器获取的真实数据
        const daoInfo: IDAOInfo = {
            _id,
            name: faker.commerce.productName(),
            icon: faker.image.food(),
            description: faker.commerce.productDescription(),
        };
        res.status(200).json(daoInfo);
    } catch (error: any) {
        console.error(error);

        res.status(500).end();
    }
}
