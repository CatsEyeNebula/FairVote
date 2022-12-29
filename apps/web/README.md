<!--
 * @Author: Nicodemus nicodemusdu@gmail.com
 * @Date: 2022-12-28 09:36:45
 * @LastEditors: Nicodemus nicodemusdu@gmail.com
 * @LastEditTime: 2022-12-29 17:02:32
 * @FilePath: /FairVote-Fullstack/apps/web/README.md
 * @Description:
 *
 * Copyright (c) 2022 by Nicodemus nicodemusdu@gmail.com, All Rights Reserved.
-->

# FairVote 前端

[创建自模板](https://github.com/tulupinc/flowbite-next-starter)

## 目录结构

-   [app 目录参考文章](https://beta.nextjs.org/docs/routing/fundamentals#the-app-directory)

```
.
├── app : 所有页面存储的地方, 根据目录结构自动创建路由
│   └── Space : 子页面, 路径为 /Space
├── components : 独立组件
├── context : Context层
├── contract-artifacts : 合约的json文件
├── hook: useXXX 的hook函数
├── pages : 不要在这里创建页面, 所有页面放在app下面, 这里只保留api目录
│   └── api : 所有next api的存放位置, api运行在server端
├── public : 存放静态文件, 例如:icons和iamges
│   ├── ......
│   └── images:
├── styles : 存放样式文件css和ts等
├── types : 通用类型, 例如IAccount......
└── utils : 存放一些通用工具, 例如:地址检查, ipfs存取......
```
