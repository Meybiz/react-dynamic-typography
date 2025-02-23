import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: 'dist/index.cjs.js',
      format: 'cjs',
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
    },
  ],
  plugins: [typescript()],
  external: ['react', 'react-dom'],
};