import { BuildOptions } from 'esbuild';
import path from 'path';

import { smdArgs } from '../../src/utils';

import dev from './dev';

interface IArgs {
    dev: boolean;
    prod: boolean;
    port: number;
}

const args = smdArgs<IArgs>();

const baseBuildConfig: BuildOptions = {
    entryPoints: [path.resolve('src', 'index.tsx')],
    outdir: 'build',
    bundle: true,
    loader: { '.ts': 'ts' },
    platform: 'browser',
    format: 'esm',
};

(() => {
    if (args?.dev) {
        dev({
            serverPort: args?.port || 3000,
            buildDir: path.resolve('build'),
            htmlPath: path.resolve('index.html'),
            buildConfig: {
                sourcemap: true,
                minify: false,
                ...baseBuildConfig,
            },
        });
    }
})();
