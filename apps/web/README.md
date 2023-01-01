<!--
 * @Author: Nicodemus nicodemusdu@gmail.com
 * @Date: 2022-12-28 09:36:45
 * @LastEditors: Nicodemus nicodemusdu@gmail.com
 * @LastEditTime: 2023-01-01 12:08:40
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
│   ├── dashboard: 包含一个动态路由, 路径为/dashboard/xxx
│   └── space : 子页面, 路径为 /space
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

## 开发习惯

1. 应用内连接跳转
    ```ts
    import { useRouter } from 'next/navigation';
    const Page = () => {
        const router = useRouter();
        // 路径跳转
        return (
            <div
                onClick={() => {
                    router.push('/');
                }}
            ></div>
        );
    };
    ```
2. 客户端数据获取[swr](https://swr.vercel.app/zh-CN)

    ```ts
    import useSWR from 'swr';

    function Profile() {
        const { data, error, isLoading } = useSWR('/api/user', fetcher);

        if (error) return <div>failed to load</div>;
        if (isLoading) return <div>loading...</div>;
        return <div>hello {data.name}!</div>;
    }
    ```

3. 服务端数据获取

    ```ts
    function Profile() {
        const [data, setData] = useState('');
        return (
            <div
                onClick={async () => {
                    const result = await fetch('api/getAccount', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            para: '123',
                        }),
                    }).then((res) => {
                        res.json();
                    });
                    result && setData(result);
                }}
            >
                hello {JSON.stringify(data)}!
            </div>
        );
    }
    ```

## 数据流向

### Account

1. 连接钱包后, 从服务端获取 Account 信息, 设置 AccountContext.
2. 各个 Page 中, 使用 useAccount()获取 Account 信息
