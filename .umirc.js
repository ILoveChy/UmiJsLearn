export default {
  plugins: [['umi-plugin-react', { dva: true }]],
  proxy: {
    '/api': {
      target: 'http://open.duyiedu.com',
      changeOrigin: true,
    },
  },
};
