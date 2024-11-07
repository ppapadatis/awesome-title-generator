/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    include: ['src/**/*.test.?(c|m)[jt]s?(x)'],
    environment: 'jsdom',
    setupFiles: ['vitest.setup.ts'],
    alias: [{ find: '@', replacement: path.resolve(__dirname, './src') }],
    coverage: {
      enabled: true,
      all: false,
      reportsDirectory: 'reports/unit',
    },
  },
});
