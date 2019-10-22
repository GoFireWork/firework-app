export const apiUrl =
  process.env.node_env === 'production'
    ? 'https://gofirework.com/api/'
    : 'https://firework.localtunnel.me/api/';
