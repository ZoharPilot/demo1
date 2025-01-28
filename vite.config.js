import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => {
  // mode הוא 'development' בסביבה מקומית או 'production' בזמן build
  const isProduction = mode === 'production';

  return {
    base: isProduction ? '/demo1/' : '/', // '/demo1/' לפרודקשן, '/' למקומי
    plugins: [react()],
  };
});
