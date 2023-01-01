/*
 * @Author: Nicodemus nicodemusdu@gmail.com
 * @Date: 2022-12-31 23:03:45
 * @LastEditors: Nicodemus nicodemusdu@gmail.com
 * @LastEditTime: 2022-12-31 23:04:22
 * @FilePath: /FairVote-Fullstack/apps/web/types/IAccount.ts
 * @Description:
 *
 * Copyright (c) 2022 by Nicodemus nicodemusdu@gmail.com, All Rights Reserved.
 */
import IDAOInfo from './IDAOInfo';
export default interface IAccount {
    address: string;
    avatar: string;
    daos: IDAOInfo[];
}
