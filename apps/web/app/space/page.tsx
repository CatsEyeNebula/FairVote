/*
 * @Author: Nicodemus nicodemusdu@gmail.com
 * @Date: 2022-12-28 18:17:25
 * @LastEditors: Nicodemus nicodemusdu@gmail.com
 * @LastEditTime: 2022-12-31 17:34:39
 * @FilePath: /FairVote-Fullstack/apps/web/app/space/page.tsx
 * @Description:
 *
 * Copyright (c) 2022 by Nicodemus nicodemusdu@gmail.com, All Rights Reserved.
 */
'use client';
import { Button } from 'flowbite-react';
import { useState } from 'react';
export default function Index(): JSX.Element {
    const [logs, setLogs] = useState('');
    return (
        <div className='flex dark:bg-gray-900'>
            <main className='order-1 mx-4 mt-4 mb-24 flex-[1_0_16rem]'>
                <Button
                    color='gray'
                    onClick={async () => {
                        const { status } = await fetch('api/createpoll', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                pollId: 6,
                                merkleTreeDepth: 20,
                            }),
                        });

                        if (status === 200) {
                            setLogs('success');
                        } else {
                            setLogs('failed');
                        }
                    }}
                >
                    Test CreatePull
                </Button>
            </main>
            <div className='order-2'>log: {logs}</div>
        </div>
    );
}
