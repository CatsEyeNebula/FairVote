/*
 * @Author: Nicodemus nicodemusdu@gmail.com
 * @Date: 2022-12-28 09:36:48
 * @LastEditors: Nicodemus nicodemusdu@gmail.com
 * @LastEditTime: 2022-12-31 23:40:44
 * @FilePath: /FairVote-Fullstack/apps/web/app/layout.tsx
 * @Description:
 *
 * Copyright (c) 2022 by Nicodemus nicodemusdu@gmail.com, All Rights Reserved.
 */
'use client';
import { FC, PropsWithChildren } from 'react';
import Header from '../components/header';
import ImageSidebar from '../components/mysidebar';
import AccountContextProvider, { useAccount } from '../context/AccountContext';
import FlowbiteContext from '../context/FlowbiteContext';
import { SidebarProvider } from '../context/SidebarContext';
import '../styles/globals.css';

const RootLayout: FC<PropsWithChildren> = function ({ children }) {
    return (
        <html lang='en'>
            <body>
                <FlowbiteContext>
                    <AccountContextProvider>
                        <SidebarProvider>
                            <Header />
                            <div className='flex dark:bg-gray-900'>
                                <main className='order-2 ml-24 mr-4 mt-4 mb-24 flex-[1_0_16rem]'>{children}</main>
                                <div className='fixed order-1 h-full'>
                                    <ActualSidebar />
                                </div>
                            </div>
                        </SidebarProvider>
                    </AccountContextProvider>
                </FlowbiteContext>
            </body>
        </html>
    );
};

function ActualSidebar(): JSX.Element {
    const accountContext = useAccount();
    return <ImageSidebar daos={accountContext.daos}></ImageSidebar>;
}

export default RootLayout;
