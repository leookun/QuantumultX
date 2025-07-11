let body = $response.body;
body = body.replace(/"radius":\s+(.+),/g, '"radius": 1000000,');
console.log(body);
// 输出修改后的响应体
$done({body}); 
