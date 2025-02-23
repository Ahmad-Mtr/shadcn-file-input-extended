import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import dts from 'vite-plugin-dts';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ['lib/**/*.ts', 'lib/**/*.tsx'],
      insertTypesEntry: true,
      outDir: 'dist',
      copyDtsFiles: true,
      rollupTypes: true,
      tsconfigPath: './tsconfig.app.json',
    }),
    tailwindcss(),
  ],
  build: {
    minify: 'esbuild',
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, 'lib/index.ts'),
      name: 'shadcn-file-input',
      fileName: (format) => `shadcn-file-input.${format}.js`,
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'clsx',
        'tailwind-merge',
        'react-hook-form',
        '@radix-ui/react-slot',
        'lucide-react',
        '@tailwindcss/vite',
        'tailwindcss-animate',
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          clsx: 'clsx',
          'tailwind-merge': 'tailwindMerge',
          'react-hook-form': 'ReactHookForm',
          '@radix-ui/react-slot': 'RadixSlot',
          'lucide-react': 'LucideReact',
          '@tailwindcss/vite': 'TailwindVite',
          'tailwindcss-animate': 'TailwindAnimate',
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './lib'),
    },
  },
});
