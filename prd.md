# Roblox Router - 产品需求文档

## 概述

Roblox Router 是一个部署在 GitHub Pages 的静态网页工具，用于解决某些通知/应用无法直接打开 `roblox://` 或 `roblox-studio://` URL Scheme 的问题。

## 目标用户

- Roblox 开发者
- 需要快速跳转到 Roblox Player 或 Studio 的用户

## 功能需求

### 1. 启动 Roblox Player
- 通过 URL 参数指定 Place ID
- 支持 launchData、gameInstanceId 等可选参数
- 自动触发 `roblox://` URL Scheme

### 2. 启动 Roblox Studio
- 通过 URL 参数指定 Place ID
- 自动触发 `roblox-studio://` URL Scheme 进入编辑模式

### 3. 用户界面
- 首页显示使用说明
- 跳转页显示加载状态和手动打开按钮
- 错误页显示错误信息

## URL 格式

```
https://white-dragon-tools.github.io/roblox-router/#/play/<placeId>
https://white-dragon-tools.github.io/roblox-router/#/studio/<placeId>
```

## 技术方案

- 纯静态网页 (HTML + CSS + JavaScript)
- 使用 hash 路由 (#/) 实现 SPA
- 通过 `window.location.href` 触发 URL Scheme

## 部署

- 平台: GitHub Pages
- 地址: https://white-dragon-tools.github.io/roblox-router/
