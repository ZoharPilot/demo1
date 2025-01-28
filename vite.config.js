import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';
  return {
    base: isProduction ? '/demo1/' : '/', // תואם לנתיב שלך בפרודקשן
    plugins: [react()],
  };
});
