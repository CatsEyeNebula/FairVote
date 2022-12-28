/*
 * @Author: Nicodemus nicodemusdu@gmail.com
 * @Date: 2022-12-28 09:36:48
 * @LastEditors: Nicodemus nicodemusdu@gmail.com
 * @LastEditTime: 2022-12-28 14:23:20
 * @FilePath: /FairVote-Fullstack/apps/web/app/layout.tsx
 * @Description:
 *
 * Copyright (c) 2022 by Nicodemus nicodemusdu@gmail.com, All Rights Reserved.
 */
import { FC, PropsWithChildren } from "react"
import FlowbiteContext from "../context/FlowbiteContext"
import "../styles/globals.css"

const RootLayout: FC<PropsWithChildren> = function ({ children }) {
    return (
        <html lang="en">
            <body>
                <FlowbiteContext>{children}</FlowbiteContext>
            </body>
        </html>
    )
}

export default RootLayout
