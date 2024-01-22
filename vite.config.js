import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';

dotenv.config();
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": process.env,
  },
  build: {
    rollupOptions: {
      external: ["./rehype-raw","./node_modules/remark-rehype","/rehype-raw"],
    },
  },
});
