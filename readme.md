初始化目录

```bash
# 初始化目录
npm init -y
# 安装ts环境
npm i typescript -D
# 配置参数
npx tsc --init

```

配置 ts 的 node 环境参数

```bash
npm i @types/node -D
```

开发环境实时编译

```bash
npm i ts-node-dev -D
```

添加`package.json`脚本指令

```json
{
  "scripts": {
    "dev:comment": "启动开发环境",
    "dev": "ts-node-dev --respawn --transpile-only src/index.ts"
  }
}
```
