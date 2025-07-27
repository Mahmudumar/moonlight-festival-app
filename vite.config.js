import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/moonlight-festival-app/',
  plugins: [react()],
})
// https://github.com/Mahmudumar/moonlight-festival-app.git