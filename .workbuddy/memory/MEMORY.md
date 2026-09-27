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

## 用户偏好
- 纯小白，要求每步讲清概念、可亲眼验证，严格按 AGENTS.md 交互（一次一步、等「进入下一板块」）。
- 产品理念认同极简（砍功能聚焦核心需求）。
