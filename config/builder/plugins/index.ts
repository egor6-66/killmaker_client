import { postcssModules, sassPlugin } from 'esbuild-sass-plugin';

import devServerPlugin from './devServer';
import prodServerPlugin from './prodServerPlugin';
const sharedPlugins = [
    sassPlugin({
        filter: /\.scss$/i,
        type: 'css',
        loadPaths: ['./src/styles'],
        transform: postcssModules({ generateScopedName: '[path][local]' }),
    }),
];

export { devServerPlugin, prodServerPlugin,sharedPlugins };
