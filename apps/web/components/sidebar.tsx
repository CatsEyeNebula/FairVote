/*
 * @Author: Nicodemus nicodemusdu@gmail.com
 * @Date: 2022-12-28 09:36:48
 * @LastEditors: Nicodemus nicodemusdu@gmail.com
 * @LastEditTime: 2022-12-30 14:45:57
 * @FilePath: /FairVote-Fullstack/apps/web/components/sidebar.tsx
 * @Description:
 *
 * Copyright (c) 2022 by Nicodemus nicodemusdu@gmail.com, All Rights Reserved.
 */
import classNames from 'classnames';
import { Sidebar as FlowbiteSidebar } from 'flowbite-react';
import { FC, PropsWithChildren } from 'react';
import { useSidebarContext } from '../context/SidebarContext';

const Sidebar: FC<PropsWithChildren<Record<string, unknown>>> = function ({ children }) {
    const { isOpenOnSmallScreens: isSidebarOpenOnSmallScreens } = useSidebarContext();

    return (
        <div
            className={classNames('fixed overflow-visible top-0 h-screen z-10 lg:sticky lg:!block', {
                hidden: !isSidebarOpenOnSmallScreens,
            })}
        >
            {/* collapsed选项关闭文字显示 */}
            <FlowbiteSidebar collapsed={true}>{children}</FlowbiteSidebar>
        </div>
    );
};

export default Object.assign(Sidebar, { ...FlowbiteSidebar });
