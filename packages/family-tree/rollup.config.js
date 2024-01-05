import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import copy from 'rollup-plugin-copy';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';

const config = [
  {
    input: 'src/index.ts',
    output: [
        {
           file: 'dist/cjs/index.cjs',
           format: 'cjs',
           sourcemap: true,
        },
        {
            file: 'dist/es/index.mjs',
            format: 'es',
            sourcemap: true,
         }
    ],
    external: [ 'config', 'uuid', '@master4n/decorators', '@master4n/types'],
    plugins: [
        replace({
          'types/dist':'types',
          'decorators/dist':'decorators',
          'preventAssignment': true
        }),
        resolve(),
        typescript(),
        copy({
          targets: [
            { src: ["package.json", "README.md", "../../LICENSE"], dest: "dist" }
          ]
        })
    ]
  }, {
    input: 'src/index.ts',
    output: {
      file: 'dist/index.d.ts',
      format: 'es'
    },
    external: [ 'config', 'uuid', '@master4n/decorators', '@master4n/types'],
    plugins: [
      resolve(),
      replace({
        'types/dist':'types',
        'decorators/dist':'decorators',
        'preventAssignment': true
      }),
      dts()
    ]
  }
];
export default config;