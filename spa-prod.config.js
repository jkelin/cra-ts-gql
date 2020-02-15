module.exports = {
  port: 3000,
  folders: [
    {
      root: 'build/static',
      path: '/static',
      cache: 'immutable',
    },
    {
      root: 'build',
      path: '/',
      cache: 'short',
    },
  ],
  index: 'build/index.html',
  csp: false,
}
