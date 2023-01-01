/*
 * @Author: Nicodemus nicodemusdu@gmail.com
 * @Date: 2022-12-30 15:38:03
 * @LastEditors: Nicodemus nicodemusdu@gmail.com
 * @LastEditTime: 2022-12-31 17:58:31
 * @FilePath: /FairVote-Fullstack/apps/web/components/mysidebar.tsx
 * @Description:
 *
 * Copyright (c) 2022 by Nicodemus nicodemusdu@gmail.com, All Rights Reserved.
 */
import classNames from 'classnames';
import { Avatar, Pagination } from 'flowbite-react';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useSidebarContext } from '../context/SidebarContext';
import IDAOInfo from '../types/IDAOInfo';

interface IDAOSProps {
    daos: IDAOInfo[];
}
// 计算当前页里面要显示的dao的index, 返回一个连续的dao index数组
const getPageItemsIndex = (arr: IDAOInfo[], pageIndex: number, maxDisplay: number) => {
    if (arr.length <= (pageIndex - 1) * maxDisplay) {
        return [];
    } else if (arr.length > pageIndex * maxDisplay) {
        return Array.from({ length: maxDisplay }, (_, i) => i + (pageIndex - 1) * maxDisplay);
    } else {
        return Array.from(
            { length: arr.length - (pageIndex - 1) * maxDisplay },
            (_, i) => i + (pageIndex - 1) * maxDisplay,
        );
    }
};

const ImageSidebar: React.FC<IDAOSProps> = ({ daos }: IDAOSProps) => {
    const MAX_DISPALY_PRE_PAGE = 6;
    const [active, setActive] = useState('');
    const [maxDisplay, setMaxDisplay] = useState(MAX_DISPALY_PRE_PAGE); // 用于记录页面上最大显示的数量(icon)
    const [pageIndex, setPageIndex] = useState(1); // 默认第1页
    const [maxPage, setMaxPage] = useState(0);
    const [isPagination, setIsPagination] = useState(false);

    const router = useRouter();
    const pathName = usePathname();

    const { isOpenOnSmallScreens: isSidebarOpenOnSmallScreens } = useSidebarContext();

    const ActiveHook = (key: string, page: string) => {
        setActive(key);
        router.push(`/dashboard/${page}`);
    };
    // 初始化参数
    useEffect(() => {
        setMaxDisplay(MAX_DISPALY_PRE_PAGE);
        setPageIndex(1);
    }, []);
    // 当daos改变时,  重新填充数组
    useEffect(() => {
        setMaxPage(Math.ceil(daos.length / maxDisplay));
        setIsPagination(daos.length > maxDisplay);
    }, [daos, maxDisplay]);
    // 监控路径的变化, 如果跳出了dashboard路径, 就把当前选中的图标释放掉
    useEffect(() => {
        if (!pathName?.startsWith('/dashboard/')) {
            setActive('');
        }
    }, [pathName]);
    return (
        <div
            className={classNames('fixed top-0 z-10 my-16 h-screen overflow-visible lg:sticky lg:my-2 lg:!block', {
                hidden: !isSidebarOpenOnSmallScreens,
            })}
        >
            {getPageItemsIndex(daos, pageIndex, maxDisplay).map((daoIndex) => {
                const value = daos[daoIndex];
                if (value) {
                    return (
                        <div
                            key={value.name}
                            className='m-4 hover:scale-110'
                            onClick={() => {
                                ActiveHook(value.name, value._id);
                            }}
                            aria-hidden='true'
                        >
                            <Avatar key={value.name} img={value.icon} rounded={true} bordered={active === value.name} />
                        </div>
                    );
                }
            })}
            {/* 当帐号加入的dao总数小于一页可以显示的上限时, 不需要pagination页 */}
            {isPagination && (
                <Pagination
                    currentPage={pageIndex}
                    layout='navigation'
                    totalPages={maxPage}
                    previousLabel='<'
                    nextLabel='>'
                    // showIcons={true}
                    onPageChange={(pageNumber) => {
                        setPageIndex(pageNumber);
                    }}
                />
            )}
        </div>
    );
};

export default ImageSidebar;
