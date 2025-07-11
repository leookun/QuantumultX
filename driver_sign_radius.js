/**
 * 重写 /api/wap/driver/sign/info 接口的 radius 值
 * 将所有 "radius": 数值, 改为 "radius": 1000000,
 */

// 获取响应体
let body = $response.body;

// 使用正则表达式替换所有的 "radius": 数值, 为 "radius": 1000000,
// 匹配 "radius": 后面的数值直到逗号
body = body.replace(/"radius":\s*(.+),/g, '"radius": 1000000,');

// 输出修改后的响应体
$done({body}); 
