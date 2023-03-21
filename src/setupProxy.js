import { createProxyMiddleware } from 'http-proxy-middleware';

export default function (app) {
  app.use(
    createProxyMiddleware('/api', {
      target: 'http://localhost:8080', //접속하려는 서버의 루트 URL
      changeOrigin: true,
    })
  );
};