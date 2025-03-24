import{_ as i,c as a,o as e,ag as t}from"./chunks/framework.BZemHgQ6.js";const k=JSON.parse('{"title":"CORS","description":"","frontmatter":{},"headers":[],"relativePath":"fe/network/cors.md","filePath":"fe/network/cors.md"}'),l={name:"fe/network/cors.md"};function n(h,s,o,r,p,d){return e(),a("div",null,s[0]||(s[0]=[t(`<h1 id="cors" tabindex="-1">CORS <a class="header-anchor" href="#cors" aria-label="Permalink to &quot;CORS&quot;">​</a></h1><h2 id="同源策略" tabindex="-1">同源策略 <a class="header-anchor" href="#同源策略" aria-label="Permalink to &quot;同源策略&quot;">​</a></h2><p>同源策略（Same-Origin Policy）是浏览器端独有的一套安全机制，当两个不同的源（即协议、域名、端口不同）进行通信时，同源策略会对此次通信做出不同程度的限制。它的主要目的是保护用户的数据不被恶意网站窃取。</p><h3 id="定义" tabindex="-1">定义 <a class="header-anchor" href="#定义" aria-label="Permalink to &quot;定义&quot;">​</a></h3><p>只有当两个 URL 具有相同的协议（scheme）、域名（host）和端口（port）时，它们才被认为是同源的。</p><h3 id="影响" tabindex="-1">影响 <a class="header-anchor" href="#影响" aria-label="Permalink to &quot;影响&quot;">​</a></h3><ol><li><strong>XMLHttpRequest 和 Fetch</strong>：只能向同源的 URL 发送请求。</li><li><strong>DOM 访问</strong>：只能访问同源的页面 DOM。</li><li><strong>Cookie、LocalStorage 和 IndexedDB</strong>：只能在同源的上下文中访问。</li><li><strong>iframe 和嵌入</strong>：嵌入的内容如果不是同源的，访问受到限制。</li></ol><h2 id="使用-cors-进行跨域" tabindex="-1">使用 CORS 进行跨域 <a class="header-anchor" href="#使用-cors-进行跨域" aria-label="Permalink to &quot;使用 CORS 进行跨域&quot;">​</a></h2><p>CORS（Cross-Origin Resource Sharing）是目前比较流行的一种绕过同源策略得机制；通过设置适当的 HTTP 响应头来允许来自特定源的请求。</p><p>原理：CORS 通过在 HTTP 请求和响应中包含一些特殊的头来工作，这些头使得服务器能够控制哪些源可以访问资源，允许的请求方法和头等。</p><h3 id="请求头" tabindex="-1">请求头 <a class="header-anchor" href="#请求头" aria-label="Permalink to &quot;请求头&quot;">​</a></h3><ul><li><strong><code>Origin</code></strong>: 包含请求发起方的源（协议+域名+端口），用于告诉服务器请求来自哪个源。</li><li><strong><code>Access-Control-Request-Method</code></strong>：在预检请求中，用于告诉服务器将使用的 HTTP 方法（如 GET、POST 等）。</li><li><strong><code>Access-Control-Request-Headers</code></strong>：在预检请求中，用于告诉服务器将使用的自定义头。</li></ul><h3 id="响应头" tabindex="-1">响应头 <a class="header-anchor" href="#响应头" aria-label="Permalink to &quot;响应头&quot;">​</a></h3><ul><li><strong><code>Access-Control-Allow-Origin</code></strong>：指定允许访问资源的源。</li><li><strong><code>Access-Control-Allow-Methods</code></strong>：指定允许的 HTTP 方法。</li><li><strong><code>Access-Control-Allow-Headers</code></strong>：指定允许的自定义头。</li><li><strong><code>Access-Control-Allow-Credentials</code></strong>：指示是否可以在请求中使用凭据（如 Cookies 和 HTTP 认证信息）。</li><li><strong><code>Access-Control-Expose-Headers</code></strong>：允许浏览器访问的响应头。</li><li><strong><code>Access-Control-Max-Age</code></strong>：指定预检请求的结果可以缓存多长时间（秒）。</li></ul><h3 id="简单请求-simple-request" tabindex="-1">简单请求（Simple Request） <a class="header-anchor" href="#简单请求-simple-request" aria-label="Permalink to &quot;简单请求（Simple Request）&quot;">​</a></h3><p>如果请求满足以下条件之一，浏览器会将其视为简单请求：</p><ul><li>请求方法为 <code>GET</code>、<code>POST</code>、<code>HEAD</code>之一。</li><li><code>Content-Type</code> 为以下几个 MIME 类型之一：<code>text/plain</code>、<code>multipart/form-data</code>、<code>application/x-www-form-urlencoded</code>。</li><li>不含自定义请求头，详情见 <a href="https://fetch.spec.whatwg.org/#cors-safelisted-request-header" target="_blank" rel="noreferrer">W3C</a>。</li></ul><p>若服务器允许该请求跨域，需要在响应头的 <code>Access-Control-Allow-Origin</code> 字段中包含该请求的 Origin ，如：</p><div class="language-http vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Access-Control-Allow-Origin</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 客户端的 Origin</span></span></code></pre></div><h3 id="预检请求-preflight-request" tabindex="-1">预检请求（Preflight Request） <a class="header-anchor" href="#预检请求-preflight-request" aria-label="Permalink to &quot;预检请求（Preflight Request）&quot;">​</a></h3><p>不符合简单请求的条件就是预检请求。此时浏览器会先向服务器发送一个 <code>OPTIONS</code> 预检请求，此次请求包含 Origin（源）、Access-Control-Request-Method（请求方法）、Access-Control-Request-Headers（请求头）。如：</p><div class="language-http vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">OPTIONS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">HTTP</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.1</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Origin</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http://localhost:8080</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Access-Control-Request-Method</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> POST</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Access-Control-Request-Headers</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> X-Custom-Header</span></span></code></pre></div><p>若服务器允许该 Origin 跨域，需要响应对应的字段，如：</p><div class="language-http vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">HTTP</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.1</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 200</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> OK</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Access-Control-Allow-Origin</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http://localhost:8080</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Access-Control-Allow-Methods</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> POST</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Access-Control-Allow-Headers</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> X-Custom-Header</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Access-Control-Allow-Credentials</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> true</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Access-Control-Max-Age</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 3600</span></span></code></pre></div><p>预检请求通过后，浏览器会发送实际请求。</p><h3 id="注意事项" tabindex="-1">注意事项 <a class="header-anchor" href="#注意事项" aria-label="Permalink to &quot;注意事项&quot;">​</a></h3><h4 id="cookie" tabindex="-1">cookie <a class="header-anchor" href="#cookie" aria-label="Permalink to &quot;cookie&quot;">​</a></h4><p>默认 AJAX 跨域时不会携带 cookie，若服务器需要获取请求的 cookie 就会得到空值，需在 XHR 或 Fetch 中进行配置。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// xhr</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> xhr </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> XMLHttpRequest</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">xhr.withCredentials </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// fetch</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fetch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(url, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  credentials: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;include&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><p>对于携带 cookie 的请求，服务器需要设置响应头 <code>Access-Control-Allow-Credentials</code> 为 true，否则此次跨域请求将会被拒绝。</p><h4 id="设置允许客户端访问的响应头" tabindex="-1">设置允许客户端访问的响应头 <a class="header-anchor" href="#设置允许客户端访问的响应头" aria-label="Permalink to &quot;设置允许客户端访问的响应头&quot;">​</a></h4><p>AJAX 进行跨域时，客户端不能获取自定义的响应头，需要服务器设置 <code>Access-Control-Expose-Headers</code> 加入允许访问的响应头。</p><div class="language-http vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Access-Control-Expose-Headers</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> authorization, a, b</span></span></code></pre></div>`,33)]))}const g=i(l,[["render",n]]);export{k as __pageData,g as default};
