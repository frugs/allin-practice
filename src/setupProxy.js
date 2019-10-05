const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use('/sso', proxy({
    target: 'https://localhost:5001',
    changeOrigin: true,
    secure: false,
  }));
  app.use('/practice_backend', proxy({
    target: 'https://localhost:5001',
    changeOrigin: true,
    secure: false,
  }));
};
