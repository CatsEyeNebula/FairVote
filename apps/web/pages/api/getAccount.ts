/*
 * @Author: Nicodemus nicodemusdu@gmail.com
 * @Date: 2022-12-31 22:58:22
 * @LastEditors: Nicodemus nicodemusdu@gmail.com
 * @LastEditTime: 2023-01-01 11:06:07
 * @FilePath: /FairVote-Fullstack/apps/web/pages/api/getAccount.ts
 * @Description:
 *
 * Copyright (c) 2022 by Nicodemus nicodemusdu@gmail.com, All Rights Reserved.
 */
import { faker } from '@faker-js/faker';
import type { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';
import IAccount from '../../types/IAccount';
import IDAOInfo from '../../types/IDAOInfo';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { address } = req.body;
    try {
        // 这里给的是faker数据, 需要替换为从服务器获取的真实数据
        const account: IAccount = {
            address: address as string,
            avatar: faker.internet.avatar(),
            daos: Array.from(
                { length: 21 },
                () =>
                    ({
                        _id: uuidv4(),
                        name: faker.internet.userName(),
                        icon: faker.internet.avatar(),
                        description: faker.commerce.product(),
                    } as IDAOInfo),
            ),
        } as IAccount;
        res.status(200).json(account);
    } catch (error: any) {
        console.error(error);

        res.status(500).end();
    }
}
