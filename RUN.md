# RUN.md｜「今日热搜」运行说明

> Day 7 存档｜项目：今日热搜 MVP（纯静态，无后端）

## 启动方式（本地运行）

1. 打开命令行（Win + R 输入 `cmd` 回车，或在文件夹地址栏输入 `cmd` 回车）；
2. 进入项目文件夹：

   ```
   cd C:\Users\ws\Desktop\VibeCoding
   ```

3. 启动本地服务器（Python 随 Windows 环境已备好）：

   ```
   python -m http.server 8000
   ```

4. 浏览器打开：**http://localhost:8000**
5. 看到榜单即成功。命令行窗口**保持开着**（它就是服务器），按 `Ctrl + C` 或直接关窗即停止服务。

## 备用方式

- **端口被占用**：把 8000 换成 8001（命令和网址里的数字一起换）；
- **无 Python 环境**：直接双击 `index.html` 也能打开（本项目纯静态，file:// 方式同样可看），但课程验收以 localhost 方式为准。

## 每日更新数据

1. 打开 `data.js`，修改 `date` 和 10 条热搜的 `title` / `heat` / `url`；
2. 保存后刷新浏览器页面即生效；
3. 提交推送（`Day X｜更新榜单数据`）。

## 技术栈

原生 HTML / CSS / JavaScript，无框架、无构建、无后端——详见 `TECH_DESIGN.md`。
