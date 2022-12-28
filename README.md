<!--
 * @Author: Nicodemus nicodemusdu@gmail.com
 * @Date: 2022-12-17 14:38:17
 * @LastEditors: Nicodemus nicodemusdu@gmail.com
 * @LastEditTime: 2022-12-28 10:17:12
 * @FilePath: /FairVote-Fullstack/README.md
 * @Description:
 *
 * Copyright (c) 2022 by Nicodemus nicodemusdu@gmail.com, All Rights Reserved.
-->

# FairVote FullStack

> 这是 FairVote 的全栈工程, 具体项目在`./apps`目录中
> `./apps/contracts`: 为合约工程
> `./apps/subgraph`: graph 查询工程(以 graph 的方式查询合约在区块链上的数据)
> `./apps/web`: 为前端工程
> 工程以 yarn workspace 方式组织, 具体使用方式可参考[yarn workspace](https://classic.yarnpkg.com/lang/en/docs/cli/workspace/), [yarn workspaces](https://classic.yarnpkg.com/lang/en/docs/cli/workspaces/)

-   [创建自模板](https://github.com/semaphore-protocol/boilerplate/)
-   [可参考的 github 协作规则](https://www.jianshu.com/p/ab543916d799)

## 安装 & 运行

1. 直接在根目录下运行一次`yarn install`即可, 无需在每个项目下安装一次.
2. 执行具体项目的`yarn dev`命令可以使用`yarn workspace 'package-name' dev`, 其中 paceage-name 为具体项目在它 package.json 中定义的名称.
3. 例如: 执行`web`项目的`dev`命令: `yarn workspace web dev`.
