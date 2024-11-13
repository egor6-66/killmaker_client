import {BuildOptions} from 'esbuild';
import path from 'path';

import {smdArgs} from '../../src/utils';

import dev from './dev';
import prod from './prod';
import fs from "fs";

interface IArgs {
    mode: 'development' | 'production';
    prod: boolean;
    port: number;
}

const args = smdArgs<IArgs>();
const buildDirName = 'build';
const assetsPath = path.join(buildDirName, 'assets');

const baseBuildConfig: BuildOptions = {
    entryPoints: [path.resolve('src', 'index.tsx')],
    bundle: true,
    loader: {'.ts': 'ts'},
    platform: 'browser',
    format: 'esm',
};



(() => {

    const getEnv = () =>{
        const envFile = fs.readFileSync(path.resolve(`.env.${args?.mode}`), 'utf8');
        const splitRows = envFile.split('\n')
        const envs = {}
        console.log(splitRows)
        splitRows.map(row =>{
            const splitRow = row.split('=')
            envs[`process.env.${splitRow[0]}`] = `\"${splitRow.slice(1).join('=').replace(/[\n\r]+/g, '')}\"`
        })
     return envs
    }

    const sharedProps = {
        buildPath: path.resolve(buildDirName),
        htmlPath: path.resolve('index.html'),
        assetsPath: assetsPath,
        buildConfig: {
            define:{
                ...getEnv()
            },
            outdir: assetsPath,
            sourcemap: true,
            minify: false,
            ...baseBuildConfig,
        },
    }

    if (args?.mode === 'development') {
        dev({
            ...sharedProps,
            serverPort: args?.port || 3000,

        });
    }else{
        prod({
            ...sharedProps,
        })
    }
})();
