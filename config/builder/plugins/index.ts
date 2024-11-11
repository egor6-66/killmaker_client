import { postcssModules, sassPlugin } from 'esbuild-sass-plugin';

import devServerPlugin from './devServer';

const sharedPlugins = [
    sassPlugin({
        filter: /\.scss$/i,
        type: 'css',
        loadPaths: ['./src/styles'],
        transform: postcssModules({ generateScopedName: '[path][local]' }),
    }),
];

export { devServerPlugin, sharedPlugins };
