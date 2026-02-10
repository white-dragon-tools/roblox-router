# Roblox Router

快速跳转到 Roblox Player 或 Roblox Studio 的网页工具。

## 🎯 用途

解决某些通知/应用无法直接打开 `roblox://` 或 `roblox-studio://` URL Scheme 的问题。

## 🔗 在线地址

**https://white-dragon-tools.github.io/roblox-router/**

## 📖 使用方法

### URL 格式

统一使用以下格式，**必须同时包含 `placeId` 和 `universeId`**：

```
https://white-dragon-tools.github.io/roblox-router/#/<action>/<placeId>?universeId=<universeId>
```

- `<action>`: `play` (启动游戏) 或 `studio` (编辑游戏)
- `<placeId>`: 游戏的 Place ID
- `<universeId>`: 游戏的 Universe ID

### 启动游戏 (Roblox Player)

```
https://white-dragon-tools.github.io/roblox-router/#/play/<placeId>?universeId=<universeId>
```

**示例：**
```
https://white-dragon-tools.github.io/roblox-router/#/play/129098520602471?universeId=9698818696
```

### 编辑游戏 (Roblox Studio)

```
https://white-dragon-tools.github.io/roblox-router/#/studio/<placeId>?universeId=<universeId>
```

**示例：**
```
https://white-dragon-tools.github.io/roblox-router/#/studio/129098520602471?universeId=9698818696
```

## 📋 支持的参数

| 参数 | 说明 | 适用 | 必填 |
|------|------|------|------|
| `universeId` | 游戏的 Universe ID | Player / Studio | ✅ 是 |
| `launchData` | 自定义启动数据 (最大 200 字节) | Player | 否 |
| `gameInstanceId` | 特定服务器实例 ID (JobId) | Player | 否 |
| `userId` | 跟随用户 ID | Player | 否 |
| `accessCode` | 私人服务器访问码 | Player | 否 |
| `linkCode` | 私人服务器链接码 | Player | 否 |

**带参数示例：**
```
https://white-dragon-tools.github.io/roblox-router/#/play/129098520602471?universeId=9698818696&launchData=hello
```

## 🔍 如何获取 Place ID 和 Universe ID

1. 打开你的游戏页面，URL 格式为：`https://www.roblox.com/games/<universeId>/<game-name>`
2. 或者在 Creator Hub 中查看：`https://create.roblox.com/dashboard/creations/experiences/<universeId>/places/<placeId>`

## 🛠️ 技术实现

### URL Scheme 格式

**Roblox Player:**
```
roblox://placeId=<id>&launchData=<data>
```

**Roblox Studio:**
```
roblox-studio:1+launchmode:edit+task:EditPlace+placeId:<placeId>+universeId:<universeId>
```

## 📁 项目结构

```
roblox-router/
├── index.html      # 主页面
├── css/
│   └── style.css   # 样式
├── js/
│   └── router.js   # 路由逻辑
├── prd.md          # 产品需求文档
└── README.md       # 说明文档
```

## 🚀 部署

本项目使用 GitHub Pages 部署，推送到 `main` 分支后自动生效。

## 📄 License

MIT
