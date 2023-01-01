/*
 * @Author: Nicodemus nicodemusdu@gmail.com
 * @Date: 2022-12-31 15:09:41
 * @LastEditors: Nicodemus nicodemusdu@gmail.com
 * @LastEditTime: 2023-01-01 11:18:41
 * @FilePath: /FairVote-Fullstack/apps/web/app/dashboard/[dao]/page.tsx
 * @Description:
 *
 * Copyright (c) 2022 by Nicodemus nicodemusdu@gmail.com, All Rights Reserved.
 */
'use client';
import { Button } from 'flowbite-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import IDAOInfo from '../../../types/IDAOInfo';

const fetcher = (api: string, _id: string) =>
    fetch(api, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            _id,
        }),
    }).then((res) => res.json());

export default function DashboardPage({ params }: { params: { dao: string } }): JSX.Element {
    const router = useRouter();
    const [dao, setDAO] = useState<IDAOInfo>();
    const { data, error, isLoading } = useSWR('/api/getDAOInfo', (url) => {
        return fetcher(url, params.dao);
    });

    useEffect(() => {
        data && setDAO(data);
    }, [data]);

    if (isLoading) return <div>Lodding...</div>;
    if (error) return <div>Error:{error}</div>;

    return (
        <div className='flex flex-col	'>
            <Button
                onClick={() => {
                    router.push('/');
                }}
            >
                Back Home
            </Button>
            {/* BUG: 这里模拟的id返回经常出现不更新的问题, 实际数据应该没有这个问题 */}
            <h3>id-response: {dao?._id}</h3>
            <h3>id-input: {params.dao}</h3>
            <h3>name: {dao?.name}</h3>
            <h3>description: {dao?.description}</h3>
        </div>
    );
}
