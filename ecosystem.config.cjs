module.exports = {
  apps: [
    {
      name: 'index',
      script: './index.html',
      watch: true,
      exec_mode: 'cluster',
    },
  ],
};
