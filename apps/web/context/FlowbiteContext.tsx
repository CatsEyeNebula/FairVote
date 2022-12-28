/*
 * @Author: Nicodemus nicodemusdu@gmail.com
 * @Date: 2022-12-28 09:36:48
 * @LastEditors: Nicodemus nicodemusdu@gmail.com
 * @LastEditTime: 2022-12-28 14:24:04
 * @FilePath: /FairVote-Fullstack/apps/web/context/FlowbiteContext.tsx
 * @Description:
 *
 * Copyright (c) 2022 by Nicodemus nicodemusdu@gmail.com, All Rights Reserved.
 */
"use client"

import { Flowbite } from "flowbite-react"
import { FC, PropsWithChildren } from "react"
import { flowbiteTheme as theme } from "../styles/theme"

const FlowbiteContext: FC<PropsWithChildren> = function ({ children }) {
    return <Flowbite theme={{ theme }}>{children}</Flowbite>
}

export default FlowbiteContext
