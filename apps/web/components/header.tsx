/*
 * @Author: Nicodemus nicodemusdu@gmail.com
 * @Date: 2022-12-28 09:36:48
 * @LastEditors: Nicodemus nicodemusdu@gmail.com
 * @LastEditTime: 2023-01-01 11:56:48
 * @FilePath: /FairVote-Fullstack/apps/web/components/header.tsx
 * @Description:
 *
 * Copyright (c) 2022 by Nicodemus nicodemusdu@gmail.com, All Rights Reserved.
 */
import { Avatar, Button, Dropdown, Modal, Navbar } from 'flowbite-react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { FC, Fragment, useEffect, useState } from 'react';
import { useAccount } from '../context/AccountContext';
import { useSidebarContext } from '../context/SidebarContext';
import IAccount from '../types/IAccount';
import getAddressDisplay from '../utils/addressDisplay';
import metamask from '../utils/wallet';

interface ITag {
    name: string;
    url: string;
}



// 这里定义导航栏的标签和对应的url
const tags = [
    {
        name: 'Space',
        url: '/space',
    },
    {
        name: 'Suggestion Box',
        url: '/suggestion',
    },
] as ITag[];

const Header: FC<Record<string, never>> = function () {
    const { isOpenOnSmallScreens, isPageWithSidebar, setOpenOnSmallScreens } = useSidebarContext();
    const accountContext = useAccount();
    const [openConnect, setOpenConnect] = useState(false);
    const router = useRouter();
    const [activeTag, setActiveTag] = useState('');
    const pathName = usePathname();
    // 监控pathName, 当路径不是导航栏对应的路径时, 取消导航栏的选中状态

    useEffect(() => {
        const result = tags.filter((value) => {
            return pathName?.startsWith(value.url);
        });
        if (!result.length) {
            setActiveTag('');
        }
    }, [pathName]);
    return (
        <header className='sticky top-0 z-20'>
            <Navbar fluid>
                {isPageWithSidebar && (
                    <button
                        aria-controls='sidebar'
                        aria-expanded='true'
                        className='mr-2 cursor-pointer rounded p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:bg-gray-700 dark:focus:ring-gray-700 lg:hidden'
                        onClick={() => setOpenOnSmallScreens(!isOpenOnSmallScreens)}
                    >
                        {isOpenOnSmallScreens ? (
                            <svg
                                className='h-6 w-6'
                                fill='currentColor'
                                viewBox='0 0 20 20'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    fillRule='evenodd'
                                    d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                                    clipRule='evenodd'
                                ></path>
                            </svg>
                        ) : (
                            <svg
                                className='h-6 w-6'
                                fill='currentColor'
                                viewBox='0 0 20 20'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    fillRule='evenodd'
                                    d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                                    clipRule='evenodd'
                                ></path>
                            </svg>
                        )}
                    </button>
                )}
                {/* 这里没有使用href属性, 因为href属性是link而不是router */}
                <Navbar.Brand
                    onClick={() => {
                        router.push('/');
                    }}
                    aria-hidden='true'
                    className='group'
                >
                    <Image
                        className='group-hover:cursor-pointer'
                        alt='FairVote logo'
                        height='32'
                        src='/logo.svg'
                        width='32'
                    />
                    <span className='self-center whitespace-nowrap px-3 text-xl  group-hover:cursor-pointer dark:text-white'>
                        FairVote
                    </span>
                </Navbar.Brand>
                <div className='flex md:order-2'>
                    {/* <Navbar.Toggle />
                    <DarkThemeToggle /> */}
                    {accountContext.isLogin ? (
                        //当用户登陆之后, 点击用户信息显示下拉框
                        <Dropdown
                            arrowIcon={false}
                            inline={true}
                            label={
                                <Avatar alt='User settings' img={accountContext.avatar} rounded={true}>
                                    <div className='space-y-1  dark:text-white'>
                                        <div>{getAddressDisplay(accountContext.address)}</div>
                                        <div className='text-sm text-gray-500 dark:text-gray-400'>
                                            Ethereum Goerli network
                                        </div>
                                    </div>
                                </Avatar>
                            }
                        >
                            <Dropdown.Item
                                onClick={() => {
                                    accountContext.setAddress('');
                                    accountContext.setAvatar('');
                                    accountContext.setDAOs([]);
                                    accountContext.setIsLogin(false);
                                    /* 这里写推出逻辑 */
                                }}
                            >
                                Sign out
                            </Dropdown.Item>
                        </Dropdown>
                    ) : (
                        // 当用户没有登陆的时候, 点击Connect Wallet, 弹出对话框提示用户连接钱包
                        <Fragment>
                            {/* 点击连接钱包按钮, 弹出对话框 */}
                            <Button
                                onClick={() => {
                                    !openConnect && setOpenConnect(true);
                                }}
                            >
                                Connect Wallet
                            </Button>
                            <Modal
                                show={openConnect}
                                size='md'
                                popup={true}
                                onClose={() => {
                                    setOpenConnect(false);
                                }}
                            >
                                <Modal.Header />
                                <Modal.Body>
                                    <div className='space-y-6'>
                                        <h3 className='text-center text-xl  text-gray-900 dark:text-white'>
                                            Connect Wallet
                                        </h3>
                                        <p className='text-center text-gray-600 dark:text-gray-100'>Select a wallet</p>

                                        {/* 连接MetaMask逻辑 */}
                                        <Button
                                            className='mx-auto px-16'
                                            onClick={async () => {
                                                //连接钱包，返回用户地址
                                                const address = metamask.connectWallet()
                                                //检测当前是否在正确的链上，不是则会提示换链
                                                metamask.checkIfRightChain()
                                                // 模拟返回faker数据
                                                const res = await fetch('api/getAccount', {
                                                    method: 'POST',
                                                    headers: { 'Content-Type': 'application/json' },
                                                    body: JSON.stringify({
                                                        address: address,
                                                    }),
                                                });

                                                if (address !== null) {
                                                    const result = (await res.json()) as IAccount;
                                                    accountContext.setAddress(await address);
                                                    // accountContext.setAvatar(result.avatar);
                                                    accountContext.setDAOs(result.daos);
                                                    accountContext.setIsLogin(true);
                                                    setOpenConnect(false);
                                                }
                                            }}
                                        >
                                            <Image
                                                className='absolute left-0 ml-28'
                                                alt='MetaMask logo'
                                                height='24'
                                                src='/MetaMask_Fox.svg'
                                                width='24'
                                            />
                                            MetaMask
                                        </Button>

                                        <p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
                                            {`Don't have a wallet?`}Install MetaMask{' '}
                                            <a
                                                className='text-blue-600 underline'
                                                href='https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn'
                                            >
                                                here
                                            </a>
                                            .
                                        </p>
                                        <p className='text-gray-400'>
                                            By connecting a wallet, you agree to our{' '}
                                            <strong className='text-black dark:text-white'> Terms of Service </strong>
                                            and our{' '}
                                            <strong className='text-black dark:text-white'>Privacy Policy</strong>
                                        </p>
                                    </div>
                                </Modal.Body>
                            </Modal>
                        </Fragment>
                    )}
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    {tags.map((value) => {
                        return (
                            <Navbar.Link
                                className='hover:cursor-pointer'
                                onClick={() => {
                                    router.push(value.url);
                                    setActiveTag(value.name);
                                }}
                                active={activeTag === value.name}
                                key={value.name}
                            >
                                {value.name}
                            </Navbar.Link>
                        );
                    })}
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
};

export default Header;
