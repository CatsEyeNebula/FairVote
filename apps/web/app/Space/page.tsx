'use client';
import { Button } from 'flowbite-react';
import { useState } from 'react';
import Header from '../../components/header';
import { SidebarProvider } from '../../context/SidebarContext';
export default function Index(): JSX.Element {
    const [logs, setLogs] = useState('');
    return (
        <SidebarProvider>
            <Header />
            <div className='flex dark:bg-gray-900'>
                <main className='order-2 mx-4 mt-4 mb-24 flex-[1_0_16rem]'>
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
                <div className='order-1'>log: {logs}</div>
            </div>
        </SidebarProvider>
    );
}
