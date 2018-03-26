module.exports = {
  // 开发环境
  development: {
    // 服务运行端口
    port: 8000,
    // 站点主标题
    title: 'react-init',
    // 静态资源文件目录
    staticDirName: 'dev',
    // API代理地址
    apiHost: 'http://localhost:8001',
    // 网址前缀
    basename: ''
  },
  production: {
    port: 8080,
    title: 'react-init-production',
    staticDirName: 'dist',
    apiHost: 'http://localhost:8081',
    basename: ''
  }
}
