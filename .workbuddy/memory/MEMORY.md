# VibeCoding 项目长期备忘

## 项目
- 课程：vibe coding 训练营（28 天，按 Day X 推进），学生=用户本人，零基础。
- 项目：「今日热搜」网站——极简热搜聚合单页（Day 3 定向）。
- MVP（Day 7）：单页 Top10 榜单（排名/标题/热度/原文链接）+ 每日手动更新数据 + localStorage 存数据；自动爬取、账号、评论等全部本期不做（见 research.md 第四节）。

## 环境
- 工作区：C:\Users\ws\Desktop\VibeCoding
- 仓库：https://github.com/WS1223334444/vibe-coding（公开，main 分支）
- 工具链：Git 2.55.0 / Node.js v22.22.2 / WorkBuddy
- Git 署名（仅本仓库）：WS1223334444 / WS1223334444@users.noreply.github.com（用户选隐私选项）
- .gitignore 只含 .env 相关；.workbuddy/ 用户拍板入库上传。
- commit 格式：标题 `Day X｜一句话`，正文两行「改了什么 / 加了什么」（Day 3 起执行）。
- ⚠️ 已知坑（Day 9 记录）：WorkBuddy 外壳环境不稳定——bash 环境可能丢 PATH（git 失踪，需手动补 PortableGit 的 cmd/usr/bin/mingw64 到 PATH）；`git push` 写操作可能被 SIGTERM 杀掉（bash 和 PowerShell 通道都复现过，ls-remote 只读操作正常）。绕过办法：让用户在自己的 cmd 窗口手动 `git push`，或重试/次日再推。commit 本身不受影响，先 commit 保平安。
- ⚠️ 已知坑（Day 11 补充）：文件读取偶发「新旧混杂」错误回显（把旧版本内容混进当前版本返回），易误判成文件损坏——动手改文件前若发现内容可疑，先用 `git status`（看有无改动）+ `grep`（查关键行）交叉核实真实状态，勿凭单次读取下结论。Day 11 实锤一次：git 证实文件与上次提交零差异，重读即正常。
- ⚠️ 已知坑（Day 12 补充）：**Edit 工具会返回「成功」但实际未落盘**（Day 12 实锤两次：变量声明整段丢失、多行修复中第一处静默丢失而第二处正常）。对策：关键修改后必须 grep 读回验证每一处都真实存在；多行/多处修复逐处验证，不能只抽查其一；改完用 Node `new Function` 做语法兜底 + 用真实数据模拟逻辑验证。

- ⚠️ 已知坑（Day 14 补充）：**用户浏览器访问 `github.com` 会间歇性超时**（ERR_CONNECTION_TIMED_OUT，属国内网络波动，与代码/推送无关）；而 GitHub Pages 域名 `ws1223334444.github.io` 往往仍正常。务必区分两个域名，判断前先从我这边远程抓取验证，别误判成「推送失败」。
- Day 14（2026-10-03）：GitHub Pages 已开启并上线，线上地址 https://ws1223334444.github.io/vibe-coding/ （此前一直未开启，Day 13 收尾时我给的链接是 404——教训：**提交成功 ≠ 用户能打开，中间还差部署**）。
- Day 15（2026-10-03）：CloudBase 免费体验版环境 `hotsearch`（上海、PostgreSQL、到期 2027-04-03）；HTTP 云函数 `health` 已部署并通过 HTTP 网关 `/api/health` 公网验证成功。**前端已部署到 CloudBase 静态托管**（index.html + data.js），公网地址结构 `https://hotsearch-<环境ID>-<编号>.tcloudbaseapp.com`（真实值不入库，见控制台 / `api-contract.md` 第二节）。
- ⚠️ 排查纪律（Day 15 教训，实锤两次）：报错先怀疑「自己抄下来的字符串」，再怀疑平台产物；必须让用户把控制台原文截图与我手里的字符串**逐字符比对**（或用 curl 对照双变体）；平台自动生成的 ID/域名一般不会有低级错误。**今天踩了两次：一次用户手打漏字（INVALID_ENV），一次我抄错数字（418）**——结论：任何我转述的域名/ID 都必须以控制台截图为准，URL 永远复制粘贴。
- ⚠️ CloudBase 静态托管返回 418 的含义：**域名不对**（而不是「过期」或「未开通」），官方文档 DEFAULT_DOMAIN_EXPIRED 写的「续期」路径适用于真过期，不要见 418 就去找续期。

## 安全约定（用户 2026-10-03 拍板）
- **域名/环境 ID 掩码约定**：`.workbuddy/` 会 push 到公开仓库，所以任何笔记与文档中一律写成 `hotsearch-<环境ID>-<编号>.tcloudbaseapp.com` / `…ap-shanghai.app.tcloudbase.com` 这种掩码形式，**完整环境 ID 与完整域名不入库**。真实值只在对话中说给用户、或让用户去控制台现查（控制台 → HTTP 网关 → 域名管理 → 默认域名）。
- 理由：域名含环境 ID，公开后任何人可反复调用接口刷光每月 3000 资源点（免费版不能按量付费，刷完停服）。
- 涉及付费/升级套餐/加购资源包的按钮，一律先截图问过再点。

## 用户偏好
- 纯小白，要求每步讲清概念、可亲眼验证，严格按 AGENTS.md 交互（一次一步、等「进入下一板块」）。
- 产品理念认同极简（砍功能聚焦核心需求）。
