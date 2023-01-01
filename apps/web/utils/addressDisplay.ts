/*
 * @Author: Nicodemus nicodemusdu@gmail.com
 * @Date: 2022-12-31 18:10:16
 * @LastEditors: Nicodemus nicodemusdu@gmail.com
 * @LastEditTime: 2022-12-31 18:10:20
 * @FilePath: /FairVote-Fullstack/apps/web/utils/addressDisplay.ts
 * @Description:
 *
 * Copyright (c) 2022 by Nicodemus nicodemusdu@gmail.com, All Rights Reserved.
 */
export default function getAddressDisplay(address: string): string {
    const displayStartPos = 6;
    const dispalyEndPos = 38;
    return address.replace(address.slice(displayStartPos, dispalyEndPos), '...');
}
