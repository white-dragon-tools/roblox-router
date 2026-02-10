# Roblox Router

快速跳转到 Roblox Player 或 Roblox Studio 的网页工具。

## 🎯 用途

解决某些通知/应用无法直接打开 `roblox://` 或 `roblox-studio://` URL Scheme 的问题。

## 🔗 在线地址

**https://white-dragon-tools.github.io/roblox-router/**

## 📖 使用方法

### 启动游戏 (Roblox Player)

```
https://white-dragon-tools.github.io/roblox-router/#/play/<placeId>
```

**示例：**
```
https://white-dragon-tools.github.io/roblox-router/#/play/6900305353
```

### 编辑游戏 (Roblox Studio)

```
https://white-dragon-tools.github.io/roblox-router/#/studio/<placeId>
```

**示例：**
```
https://white-dragon-tools.github.io/roblox-router/#/studio/6900305353
```

## 📋 支持的参数

| 参数 | 说明 | 适用 |
|------|------|------|
| `launchData` | 自定义启动数据 (最大 200 字节) | Player |
| `gameInstanceId` | 特定服务器实例 ID (JobId) | Player |
| `userId` | 跟随用户 ID | Player |
| `accessCode` | 私人服务器访问码 | Player |
| `linkCode` | 私人服务器链接码 | Player |

**带参数示例：**
```
https://white-dragon-tools.github.io/roblox-router/#/play/6900305353?launchData=hello
```

## 🛠️ 技术实现

### URL Scheme 格式

**Roblox Player:**
```
roblox://placeId=<id>&launchData=<data>
```

**Roblox Studio:**
```
roblox-studio:1+launchmode:edit+task:EditPlace+placeId:<id>
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
