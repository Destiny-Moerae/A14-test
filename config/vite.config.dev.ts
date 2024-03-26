import { mergeConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import baseConfig from './vite.config.base';

export default mergeConfig(
  {
    mode: 'development',
    server: {
      open: true,
      fs: {
        strict: true,
      },
      proxy: {
        '/api': {
          // target: 'http://192.168.1.103:8080',
          target: 'http://127.0.0.1:4523/m1/3975126-0-default',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''), // 不可以省略rewrite
        },
      },
    },
    plugins: [
      eslint({
        cache: false,
        include: ['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.vue'],
        exclude: ['node_modules'],
      }),
    ],
  },
  baseConfig
);
