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
const buildDirName = 'build';
const assetsPath = path.join(buildDirName, 'assets');

const baseBuildConfig: BuildOptions = {
    entryPoints: [path.resolve('src', 'index.tsx')],
    bundle: true,
    loader: { '.ts': 'ts' },
    platform: 'browser',
    format: 'esm',
};

(() => {
    if (args?.dev) {
        dev({
            serverPort: args?.port || 3000,
            buildPath: path.resolve(buildDirName),
            htmlPath: path.resolve('index.html'),
            assetsPath: assetsPath,
            buildConfig: {
                outdir: assetsPath,
                sourcemap: true,
                minify: false,
                ...baseBuildConfig,
            },
        });
    }
})();
