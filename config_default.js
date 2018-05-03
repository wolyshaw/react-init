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
    basename: '',
    // 统计代码
    analytics: ``
  },
  production: {
    port: 8080,
    title: 'react-init-production',
    staticDirName: 'dist',
    apiHost: 'http://localhost:8081',
    basename: '',
    analytics: `
      <script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'GA_TRACKING_ID');
      </script>
    `
  }
}
