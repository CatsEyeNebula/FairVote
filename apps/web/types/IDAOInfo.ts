/*
 * @Author: Nicodemus nicodemusdu@gmail.com
 * @Date: 2022-12-30 15:41:44
 * @LastEditors: Nicodemus nicodemusdu@gmail.com
 * @LastEditTime: 2022-12-31 16:38:14
 * @FilePath: /FairVote-Fullstack/apps/web/types/IDAOInfo.ts
 * @Description:
 *
 * Copyright (c) 2022 by Nicodemus nicodemusdu@gmail.com, All Rights Reserved.
 */
export default interface IDAOInfo {
    _id: string; // 非用户填写,不显示的字段, 用于索引dao page
    name: string;
    icon: string;
    description?: string;
    official_link?: string;
    twitter?: string;
    discord?: string;
    telegram?: string;
    github?: string;
    notion?: string;
}
