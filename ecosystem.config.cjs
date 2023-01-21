module.exports = {
  apps: [
    {
      name: 'main',
      script: 'main.js',
      watch: true,
    },
    {
      script: './service-worker/',
      watch: ['./service-worker'],
    },
  ],
};
