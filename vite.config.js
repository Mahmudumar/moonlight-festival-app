import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/moonlight-festival-app/', // 👈 replace with actual repo name
  plugins: [react()],
});
// https://github.com/Mahmudumar/moonlight-festival-app.git