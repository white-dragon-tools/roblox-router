/**
 * Roblox Router - 路由逻辑
 * 
 * URL 格式:
 *   #/play/<placeId>              - 启动 Roblox Player
 *   #/play/<placeId>?launchData=x - 带启动数据
 *   #/studio/<placeId>            - 启动 Roblox Studio 编辑
 */

(function() {
    'use strict';

    // DOM 元素
    const pages = {
        home: document.getElementById('home-page'),
        redirect: document.getElementById('redirect-page'),
        error: document.getElementById('error-page')
    };

    const elements = {
        redirectTitle: document.getElementById('redirect-title'),
        redirectInfo: document.getElementById('redirect-info'),
        manualBtn: document.getElementById('manual-btn'),
        errorMessage: document.getElementById('error-message')
    };

    // 显示指定页面
    function showPage(pageName) {
        Object.values(pages).forEach(page => page.classList.add('hidden'));
        if (pages[pageName]) {
            pages[pageName].classList.remove('hidden');
        }
    }

    // 显示首页
    function showHomePage() {
        showPage('home');
    }

    // 显示错误页
    function showError(message) {
        elements.errorMessage.textContent = message;
        showPage('error');
    }

    // 显示跳转页并尝试打开 URL Scheme
    function showRedirectPage(action, placeId, schemeUrl) {
        const actionText = action === 'play' ? 'Roblox Player' : 'Roblox Studio';
        const actionEmoji = action === 'play' ? '🎮' : '🛠️';

        elements.redirectTitle.textContent = `正在跳转到 ${actionText}...`;
        elements.redirectInfo.innerHTML = `${actionEmoji} Place ID: <strong>${placeId}</strong>`;
        elements.manualBtn.href = schemeUrl;

        showPage('redirect');

        // 延迟后尝试打开 URL Scheme
        setTimeout(() => {
            tryOpenScheme(schemeUrl);
        }, 500);
    }

    // 尝试打开 URL Scheme
    function tryOpenScheme(schemeUrl) {
        // 方法1: 直接跳转
        window.location.href = schemeUrl;

        // 方法2: 使用 iframe (备用方案，某些浏览器可能需要)
        // const iframe = document.createElement('iframe');
        // iframe.style.display = 'none';
        // iframe.src = schemeUrl;
        // document.body.appendChild(iframe);
        // setTimeout(() => document.body.removeChild(iframe), 1000);
    }

    // 构建 Roblox Player URL Scheme
    function buildPlayerScheme(placeId, params) {
        let url = `roblox://placeId=${placeId}`;

        if (params.launchData) {
            url += `&launchData=${encodeURIComponent(params.launchData)}`;
        }
        if (params.gameInstanceId) {
            url += `&gameInstanceId=${encodeURIComponent(params.gameInstanceId)}`;
        }
        if (params.userId) {
            url += `&userId=${encodeURIComponent(params.userId)}`;
        }
        if (params.accessCode) {
            url += `&accessCode=${encodeURIComponent(params.accessCode)}`;
        }
        if (params.linkCode) {
            url += `&linkCode=${encodeURIComponent(params.linkCode)}`;
        }

        return url;
    }

    // 构建 Roblox Studio URL Scheme
    function buildStudioScheme(placeId) {
        // Roblox Studio URL Scheme 格式
        // 使用与 Player 类似的格式，但使用 roblox-studio 协议
        // 参考: roblox-studio://placeId=xxx 或 roblox-studio:placeId=xxx
        return `roblox-studio:placeId=${placeId}`;
    }

    // 解析 hash 路由
    function parseRoute() {
        const hash = window.location.hash;

        // 空 hash 或首页
        if (!hash || hash === '#' || hash === '#/') {
            showHomePage();
            return;
        }

        // 解析路由: #/play/123456 或 #/studio/123456
        // 支持查询参数: #/play/123456?launchData=xxx
        const routeMatch = hash.match(/^#\/(play|studio)\/(\d+)(?:\?(.*))?$/);

        if (!routeMatch) {
            showError('无效的链接格式。请使用 #/play/<placeId> 或 #/studio/<placeId>');
            return;
        }

        const [, action, placeId, queryString] = routeMatch;
        const params = {};

        // 解析查询参数
        if (queryString) {
            const searchParams = new URLSearchParams(queryString);
            for (const [key, value] of searchParams) {
                params[key] = value;
            }
        }

        // 验证 placeId
        if (!placeId || !/^\d+$/.test(placeId)) {
            showError('无效的 Place ID');
            return;
        }

        // 构建 URL Scheme
        let schemeUrl;
        if (action === 'play') {
            schemeUrl = buildPlayerScheme(placeId, params);
        } else if (action === 'studio') {
            schemeUrl = buildStudioScheme(placeId);
        }

        // 显示跳转页
        showRedirectPage(action, placeId, schemeUrl);
    }

    // 初始化
    function init() {
        // 监听 hash 变化
        window.addEventListener('hashchange', parseRoute);

        // 初始解析
        parseRoute();
    }

    // 页面加载完成后初始化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
