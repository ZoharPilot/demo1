import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/', // בסיס לסביבה מקומית
  plugins: [react()],
});
