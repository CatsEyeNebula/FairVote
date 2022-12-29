<!--
 * @Author: Nicodemus nicodemusdu@gmail.com
 * @Date: 2022-12-17 14:38:17
 * @LastEditors: Nicodemus nicodemusdu@gmail.com
 * @LastEditTime: 2022-12-29 12:13:51
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

## 基本工作流程

1. 克隆项目到本地;
2. 切换到 dev 分支;
3. 在 dev 分支上创建自己的工作分支, 推荐命名方式为 dev-[要实现的功能], 例如:我要做钱包连接,推荐分支名为 dev-wallet;
4. 整个功能的开发过程全部在自己创建的分支上进行, 建议至少每天同步分支信息到 git, 避免代码丢失;
5. 当整个功能开发完成,并且测试无误后, 准备合并到 dev 分支:
    1. 首先拉取最新的远程 dev 分支到本地
    2. 然后合并自己的的 dev-wallet 分支到本地 dev 分支
    3. 解决冲突后将新的 dev 分支上传到 github
6. 完成一次开发迭代

## Commit 提交规范

> [来自参考文档](https://www.jianshu.com/p/ab543916d799)

```
<type>(<scope>): <subject>
```

-   type [commit 的类型]

    -   feat: 新功能、新特性

    -   fix: 修改 bug

    -   perf: 更改代码，以提高性能（在不影响代码内部行为的前提下，对程序性能进行优化）

    -   refactor: 代码重构（重构，在不影响代码内部行为、功能下的代码修改）

    -   docs: 文档修改

    -   style: 代码格式修改, 注意不是 css 修改（例如分号修改）

    -   test: 测试用例新增、修改

    -   build: 影响项目构建或依赖项修改

    -   revert: 恢复上一次提交

    -   ci: 持续集成相关文件修改

    -   chore: 其他修改（不在上述类型中的修改）

    -   release: 发布新版本

    -   workflow: 工作流相关文件修改

-   scope [commit 影响的范围]
    比如: contracts, subgraph, web, global......

-   subject [commit 的概述]

示例:
fix

如果修复的这个 BUG 只影响当前修改的文件，可不加范围。如果影响的范围比较大，要加上范围描述。

例如这次 BUG 修复影响到全局，可以加个 global。如果影响的是某个目录或某个功能，可以加上该目录的路径，或者对应的功能名称。

```
// 示例1
fix(global): 修复项目根目录package中依赖包错误问题
// 示例2
fix(web): 修复连接钱包按钮点击没有反应的问题
// 示例3
fix: value.length -> values.length
```
