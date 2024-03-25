<div class="Box-sc-g0xbh4-0 bJMeLZ js-snippet-clipboard-copy-unpositioned" data-hpc="true"><article class="markdown-body entry-content container-lg" itemprop="text"><p dir="auto"><a href="https://contribute.design/balzack/databag" rel="nofollow"><img src="https://camo.githubusercontent.com/5c581d9b9ce84cbbdfee9435652c3c91c76863685b526c8136cebcbbe0c31d37/68747470733a2f2f636f6e747269627574652e64657369676e2f6170692f736869656c642f62616c7a61636b2f64617461626167" alt="贡献.设计" data-canonical-src="https://contribute.design/api/shield/balzack/databag" style="max-width: 100%;"></a></p>
<div align="center" dir="auto">
  <a href="#"><img src="/balzack/databag/raw/main/doc/icon_v2.png" width="8%" style="max-width: 100%;"></a>
  <div class="markdown-heading" dir="auto"><h3 align="center" tabindex="-1" class="heading-element" dir="auto"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">数据包</font></font></h3><a id="user-content-databag" class="anchor" aria-label="永久链接： 数据包" href="#databag"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path></svg></a></div>
  <p align="center" dir="auto"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用于自托管的联合信使</font></font></p>
</div>
<p align="center" dir="auto">
  <a href="/balzack/databag/blob/main/doc/design_overview.md"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-&gt; 设计概述 &lt;-</font></font></a>
</p>
<br>
<p align="center" dir="auto">
  <a href="/balzack/databag/blob/main/doc/mobile.png"><img src="/balzack/databag/raw/main/doc/mobile.png" width="48%" style="max-width: 100%;"></a>
  &nbsp;&nbsp;
  <a href="/balzack/databag/blob/main/doc/browser.png"><img src="/balzack/databag/raw/main/doc/browser.png" width="48%" style="max-width: 100%;"></a>
</p>
<p align="center" dir="auto">
  <sub><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">移动和浏览器应用程序屏幕</font></font></sub>
</p>
<br>
<p dir="auto"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Databag 旨在提高效率，在主机系统和网络上消耗最少的资源。显着的特点包括：</font></font></p>
<ul dir="auto">
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">去中心化（应用程序和服务器节点之间直接通信）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">联合（不同节点上的账户可以通信）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基于公钥-私钥的身份（不绑定到任何区块链或托管域）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">端到端加密（如果密封，托管管理员无法查看主题）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">音视频通话（nat穿越需要单独的中继服务器）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基于主题的线程（按主题而不是联系人组织的消息）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">轻量级（服务器可以在树莓派零v1.3上运行）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">低延迟（使用 websocket 进行推送事件以避免轮询）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每个节点无限个帐户（为您的整个家庭提供主机）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">新联系人、消息和通话的移动提醒（支持 UnifiedPush、FCM、APN）</font></font></li>
</ul>
<br>
<p align="center" dir="auto">
  <a href="https://f-droid.org/en/packages/com.databag/" rel="nofollow">
    <img src="/balzack/databag/raw/main/doc/fdroid.png" width="18%" style="max-width: 100%;">
  </a>
  <a href="https://apps.apple.com/us/app/databag/id6443741428" rel="nofollow">
    <img src="/balzack/databag/raw/main/doc/astore.png" width="18%" style="max-width: 100%;">
  </a>
  <a href="https://play.google.com/store/apps/details?id=com.databag" rel="nofollow">
    <img src="/balzack/databag/raw/main/doc/gplay.png" width="18%" style="max-width: 100%;">
  </a>
</p>
<p dir="auto"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该应用程序可在 fdroid 以及谷歌和苹果商店上使用。您可以</font></font><a href="https://databag.coredb.org/#/create" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在此处</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">测试该项目</font><font style="vertical-align: inherit;">，但不要发布任何重要内容，因为该服务器会定期擦除。非常感谢有关 UI/UX、错误或功能的反馈。</font></font></p>
<div class="markdown-heading" dir="auto"><h2 tabindex="-1" class="heading-element" dir="auto"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装</font></font></h2><a id="user-content-installation" class="anchor" aria-label="永久链接：安装" href="#installation"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path></svg></a></div>
<p dir="auto"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要使用数据包，您需要一个带有证书的指向您的节点的 DNS 名称。您可以手动部署节点，但使用容器服务会更轻松。适用于 arm64 和 amd64 的容器可</font></font><a href="https://hub.docker.com/r/balzack/databag/tags" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在此处</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">获取。</font></font></p>
<div class="markdown-heading" dir="auto"><h3 tabindex="-1" class="heading-element" dir="auto"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Docker 撰写命令</font></font></h3><a id="user-content-docker-compose-command" class="anchor" aria-label="永久链接：Docker 撰写命令" href="#docker-compose-command"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path></svg></a></div>
<p dir="auto"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从 net/container 子目录：</font></font></p>
<ul dir="auto">
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">sudo docker-compose -f compose.yaml -p databag up</font></font></li>
</ul>
<div class="markdown-heading" dir="auto"><h3 tabindex="-1" class="heading-element" dir="auto"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Portainer 和 Nginx 代理管理器的示例</font></font></h3><a id="user-content-example-with-portainer-and-nginx-proxy-manager" class="anchor" aria-label="永久链接：Portainer 和 Nginx 代理管理器的示例" href="#example-with-portainer-and-nginx-proxy-manager"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path></svg></a></div>
<p dir="auto"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来自Portainer：</font></font></p>
<ul dir="auto">
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在卷视图中，单击添加卷：
</font></font><ul dir="auto">
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输入名称，然后单击“创建卷”</font></font></li>
</ul>
</li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在容器视图中，单击添加容器：
</font></font><ul dir="auto">
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在“图像”字段中输入“balzack/databag:latest”</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">单击“发布新网络端口”，并为主机和容器都选择端口 7000</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在“高级容器设置”下，选择“Env”，然后单击“添加环境变量”
</font></font><ul dir="auto">
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输入“名称”作为“管理员”以及您的管理员密码 [密码]</font></font></li>
</ul>
</li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在“高级容器设置”下，选择“卷”，然后选择“映射附加卷”
</font></font><ul dir="auto">
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输入“/var/lib/databag”作为“container”，输入创建的卷作为“volume”</font></font></li>
</ul>
</li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">单击“部署容器”</font></font></li>
</ul>
</li>
</ul>
<p dir="auto"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来自 Nginx 代理管理器：</font></font></p>
<ul dir="auto">
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加主机并指定：
</font></font><ul dir="auto">
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">主机名 [主机名.域]</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Portainer IP地址[地址]</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">端口“7000”</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请求新的 SSL 证书</font></font></li>
</ul>
</li>
</ul>
<details>
  <summary><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Nginx 代理配置➡️点击展开⬅️
  </font></font></summary>
<div class="snippet-clipboard-content notranslate position-relative overflow-auto"><pre class="notranslate"><code>server {
server_name your.site.tld;

location / {
  proxy_http_version 1.1;
  proxy_set_header Upgrade $http_upgrade;
  proxy_set_header Connection "Upgrade";
  proxy_set_header Host $host;
  proxy_pass http://127.0.0.1:7000;
  client_max_body_size 0;
  proxy_max_temp_file_size 0;

}

  listen 443 ssl http2;
  ssl_certificate /etc/letsencrypt/live/your.site.tld/fullchain.pem;
  ssl_certificate_key /etc/letsencrypt/live/your.site.tld/privkey.pem;
  include /etc/letsencrypt/options-ssl-nginx.conf;
  ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;
  add_header Strict-Transport-Security "max-age=0";

}

server {
  if ($host = your.site.tld) {
      return 301 https://$host$request_uri;
  }
listen 80;
server_name your.site.tld;
  return 404;
}
</code></pre><div class="zeroclipboard-container">
    <clipboard-copy aria-label="Copy" class="ClipboardButton btn btn-invisible js-clipboard-copy m-2 p-0 tooltipped-no-delay d-flex flex-justify-center flex-items-center" data-copy-feedback="Copied!" data-tooltip-direction="w" value="server {
server_name your.site.tld;

location / {
  proxy_http_version 1.1;
  proxy_set_header Upgrade $http_upgrade;
  proxy_set_header Connection &quot;Upgrade&quot;;
  proxy_set_header Host $host;
  proxy_pass http://127.0.0.1:7000;
  client_max_body_size 0;
  proxy_max_temp_file_size 0;

}

  listen 443 ssl http2;
  ssl_certificate /etc/letsencrypt/live/your.site.tld/fullchain.pem;
  ssl_certificate_key /etc/letsencrypt/live/your.site.tld/privkey.pem;
  include /etc/letsencrypt/options-ssl-nginx.conf;
  ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;
  add_header Strict-Transport-Security &quot;max-age=0&quot;;

}

server {
  if ($host = your.site.tld) {
      return 301 https://$host$request_uri;
  }
listen 80;
server_name your.site.tld;
  return 404;
}" tabindex="0" role="button">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-copy js-clipboard-copy-icon">
    <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
</svg>
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check js-clipboard-check-icon color-fg-success d-none">
    <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
</svg>
    </clipboard-copy>
  </div></div>
</details>
<p dir="auto"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从您的浏览器：</font></font></p>
<ul dir="auto">
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在地址栏中输入您的服务器地址[主机名.域]
</font></font><ul dir="auto">
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">单击右上角的齿轮图标</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输入您的管理员密码：[密码]</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">单击仪表板中的齿轮图标
</font></font><ul dir="auto">
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输入联合主机作为 [主机名.域]</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">点击“保存”</font></font></li>
</ul>
</li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">单击用户图标生成新帐户链接
</font></font><ul dir="auto">
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">点击链接创建帐户</font></font></li>
</ul>
</li>
</ul>
</li>
</ul>
<div class="markdown-heading" dir="auto"><h3 tabindex="-1" class="heading-element" dir="auto"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其他安装选项</font></font></h3><a id="user-content-other-installation-options" class="anchor" aria-label="永久链接：其他安装选项" href="#other-installation-options"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path></svg></a></div>
<p dir="auto"><font style="vertical-align: inherit;"></font><a href="/balzack/databag/blob/main/doc/pizero.md"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此处</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无需容器即可在 Raspberry Pi Zero 上安装</font><font style="vertical-align: inherit;">。</font></font></p>
<p dir="auto"><font style="vertical-align: inherit;"></font><a href="/balzack/databag/blob/main/doc/aws.md"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此处</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无需在 AWS 中安装容器</font><font style="vertical-align: inherit;">。</font></font></p>
<p dir="auto"><font style="vertical-align: inherit;"></font><a href="/balzack/databag/blob/main/doc/openwrt.md"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在此处</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将 Databag 集成到 OpenWrt 固件中</font><font style="vertical-align: inherit;">。</font></font></p>
<p dir="auto"><font style="vertical-align: inherit;"></font><a href="https://caprover.com/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在CapRover</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">、</font></font><a href="https://casaos.io" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CasaOS</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">、</font></font><a href="https://unraid.net/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Unraid</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">、</font></font><a href="https://www.runtipi.io/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Runtipi</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">、</font></font><a href="https://www.kubero.dev/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Kubero</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">、</font><a href="https://umbrel.com/" rel="nofollow"><font style="vertical-align: inherit;">Umbrel</font></a><font style="vertical-align: inherit;">中一键安装</font></font><a href="https://umbrel.com/" rel="nofollow"><font style="vertical-align: inherit;"></font></a></p>
<div class="markdown-heading" dir="auto"><h2 tabindex="-1" class="heading-element" dir="auto"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">音频和视频通话</font></font></h2><a id="user-content-audio-and-video-calls" class="anchor" aria-label="永久链接：音频和视频通话" href="#audio-and-video-calls"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path></svg></a></div>
<p dir="auto"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Databag提供音频和视频通话，并依赖STUN/TURN中继服务器进行NAT穿越。测试是使用</font></font><a href="https://github.com/coturn/coturn"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">coturn</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><a href="https://github.com/pion/turn"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">pion</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">完成的，并且应该适用于任何实现。</font></font><a href="https://gabrieltanner.org/blog/turn-server/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此处</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提供了安装 coturn 服务器的说明</font><font style="vertical-align: inherit;">。</font></font></p>
<p dir="auto"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您想启用音频和视频通话，您应该设置自己的中继服务器。不过，出于测试目的，您可以使用演示中继服务器配置。在管理配置模式中，设置：</font></font></p>
<ul dir="auto">
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">启用 WebRTC 通话：-打开-</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">WebRTC 服务器 URL：转：34.210.172.114:3478?transport=udp</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">WebRTC 用户名：user</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">WebRTC密码：pass</font></font></li>
</ul>
<div class="markdown-heading" dir="auto"><h3 tabindex="-1" class="heading-element" dir="auto"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">路线图</font></font></h3><a id="user-content-roadmap" class="anchor" aria-label="永久链接：路线图" href="#roadmap"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path></svg></a></div>
<p dir="auto"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请让我知道任何缺少的功能；</font></font><a href="/balzack/databag/blob/main/doc/backlog.md"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是当前的积压情况。根据社区的兴趣对功能进行优先级排序。</font></font></p>
</article></div>
