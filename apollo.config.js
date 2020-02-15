module.exports = {
  client: {
    name: 'main',
    includes: ['./src/**/*'],
    service: {
      name: 'localhost',
      url: 'http://localhost:4000/graphql',
    },
  },
}
