'use strict';

/**
 * /api/health —— 心跳探针（Day 15）
 *
 * 【重要】这是一个「HTTP 类型云函数」，规矩和普通云函数不一样：
 *   1) 不能用 exports.main(event, context) 的写法；
 *   2) 必须自己启动一个 HTTP 服务器，并且监听 9000 端口（腾讯云硬性要求）；
 *   3) 由 scf_bootstrap 启动脚本拉起来（模板已自带，不用我们管）。
 *
 * 它不返回任何业务数据，只回答一句话：「我活着，而且公网链路是通的」。
 * 第 17–20 天接真实业务接口时，就在 handle() 里按路径加分支。
 *
 * 约定（与 api-contract.md 一致）：
 *   GET /api/health → 200 { ok: true, service, version, time, uptimeMs, path }
 *   其他路径        → 404 { ok: false, error: "NOT_FOUND" }
 *   内部异常       → 500 { ok: false, error: "INTERNAL_ERROR" }
 *
 * 安全：只返回公开信息——不回传环境 ID、密钥、数据库连接串。
 * 跨域（CORS）头今天刻意不加，按课程安排留到 Day 20。
 */

const http = require('http');

const PORT = 9000;          // ← CloudBase HTTP 云函数必须监听这个端口
const startedAt = Date.now(); // 进程启动时刻，用来做运行时长

// 统一的 JSON 响应出口：状态码 + 响应头 + 内容，一次写完
function sendJson(res, statusCode, payload) {
  const body = JSON.stringify(payload);
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(body),
  });
  res.end(body);
}

function handle(req, res) {
  const url = new URL(req.url || '/', 'http://127.0.0.1');

  // 心跳接口：路径以 /api/health 结尾（或根路径）都认，方便本地调试
  if (req.method === 'GET' && (url.pathname === '/api/health' || url.pathname === '/')) {
    return sendJson(res, 200, {
      ok: true,
      service: 'hot-search-api',
      version: '1.0.0',
      time: new Date().toISOString(),        // 服务器当前时间
      uptimeMs: Date.now() - startedAt,     // 实例已运行多久
      path: url.pathname,                   // 实际请求到的路径
    });
  }

  return sendJson(res, 404, { ok: false, error: 'NOT_FOUND' });
}

const server = http.createServer((req, res) => {
  try {
    handle(req, res);
  } catch (err) {
    // 兜底：出错也保证前端拿到合法 JSON，而不是报错白屏
    sendJson(res, 500, { ok: false, error: 'INTERNAL_ERROR' });
  }
});

server.listen(PORT, () => {
  console.log('health function is listening on port ' + PORT);
});
