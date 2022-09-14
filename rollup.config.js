import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'index.ts',
  output: [
    {
      file: 'index.js',
      format: 'cjs',
    },
  ],
  plugins: [
    typescript(),
    (process.env.NODE_ENV === 'production' && terser()),
  ],
};
