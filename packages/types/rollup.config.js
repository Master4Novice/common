import typescript from '@rollup/plugin-typescript';
import dts from "rollup-plugin-dts";

const config = [
  {
    input: 'src/index.ts',
    output: [
        {
           file: 'dist/index.cjs',
           format: 'cjs',
           sourcemap: true,
        },
        {
            file: 'dist/index.mjs',
            format: 'es',
            sourcemap: true,
         }
    ],
    plugins: [
        typescript()
    ]
  }, {
    input: 'src/index.ts',
    output: {
      file: 'dist/index.d.ts',
      format: 'es'
    },
    plugins: [
        dts()
    ]
  }
];
export default config;