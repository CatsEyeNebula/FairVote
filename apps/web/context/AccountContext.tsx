/*
 * @Author: Nicodemus nicodemusdu@gmail.com
 * @Date: 2022-12-29 20:07:28
 * @LastEditors: Nicodemus nicodemusdu@gmail.com
 * @LastEditTime: 2022-12-31 18:20:30
 * @FilePath: /FairVote-Fullstack/apps/web/context/AccountContext.tsx
 * @Description:
 *
 * Copyright (c) 2022 by Nicodemus nicodemusdu@gmail.com, All Rights Reserved.
 */
import { createContext, FC, PropsWithChildren, useContext, useState } from 'react';
import IDAOInfo from '../types/IDAOInfo';

interface IAccountContext {
    address: string;
    avatar: string;
    daos: IDAOInfo[];
    isLogin: boolean;
    setAddress: (address: string) => void;
    setAvatar: (avatar: string) => void;
    setDAOs: (daos: IDAOInfo[]) => void;
    setIsLogin: (login: boolean) => void;
}

const AccountContext = createContext<IAccountContext>({} as IAccountContext);

const AccountContextProvider: FC<PropsWithChildren> = function ({ children }) {
    const [address, setAddress] = useState<string>('');
    const [avatar, setAvatar] = useState<string>('');
    const [daos, setDAOs] = useState<IDAOInfo[]>([]);
    const [isLogin, setIsLogin] = useState(false);
    const account = {
        address,
        setAddress,
        avatar,
        setAvatar,
        daos,
        setDAOs,
        isLogin,
        setIsLogin,
    };
    return <AccountContext.Provider value={account}>{children}</AccountContext.Provider>;
};

export function useAccount(): IAccountContext {
    return useContext(AccountContext);
}

export default AccountContextProvider;
