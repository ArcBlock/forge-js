const base64 = require('base64-url');
const { jwtSign, jwtVerify } = require('./lib/index');

const sk =
  '0xD67C071B6F51D2B61180B9B1AA9BE0DD0704619F0E30453AB4A592B036EDE644E4852B7091317E3622068E62A5127D1FB0D4AE2FC50213295E10652D2F0ABFC7';
const pk = '0xE4852B7091317E3622068E62A5127D1FB0D4AE2FC50213295E10652D2F0ABFC7';
const appId = 'zNKtCNqYWLYWYW3gWRA1vnRykfCBZYHZvzKr';
const token = jwtSign(appId, sk, { key: 'value' });
console.log(token);
console.log('');
console.log('');

// const token =
//   'eyJhbGciOiJFZDI1NTE5IiwidHlwIjoiSldUIn0.eyJrZXkiOiJ2YWx1ZSIsImV4cCI6IjE1NTE2OTk3NDEiLCJpYXQiOiIxNTUxNjk3OTQxIiwiaXNzIjoiZGlkOmFidDp6MWlvR0hGWWlFZW1mTGEzaFFqazRKVHdXVFFQdTFnMll4UCIsIm5iZiI6IjE1NTE2OTc5NDEifQ.XLUfXct21kZOWSPMpP0qzvZjyZXajPyc2TkKLUxXA5cSgYIrYRXHKJMSiyIg7tZNutu1INdrrkZTPUH9_ik_Dg';
// const pk = '0xFF47B3022FA503EAA1E9FA4B20FA8B16694EA56096F3A2E9109714062B3486D9';
const result = jwtVerify(token, pk);
console.log(result);
