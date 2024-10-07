import { BuildOptions, context } from 'esbuild';
import { EventEmitter } from 'events';
import express from 'express';

import { devServerPlugin, sharedPlugins } from './plugins';
interface IProps {
    serverPort: number;
    buildConfig: BuildOptions;
    buildPath: string;
    htmlPath: string;
    assetsPath: string;
}

const emitter = new EventEmitter();

function bootstrap({ buildConfig, serverPort, buildPath, htmlPath, assetsPath }: IProps) {
    const app = express();
    context({
        plugins: [devServerPlugin({ htmlPath, buildPath, emitter, serverPort, assetsPath }), ...sharedPlugins],
        ...buildConfig,
    }).then(async (res) => {
        await res.watch();

        app.get('/rebuild', (req, res) => {
            res.writeHead(200, {
                'Content-Type': 'text/event-stream',
                Connection: 'keep-alive',
                'Cache-Control': 'no-cache',
            });
            emitter.on('refreshHTML', () => {
                res.write('data: e\n\n');
            });
        });
        app.use('*/assets', express.static(assetsPath));
        app.use('/*', express.static(buildPath));
        app.use((req, res, next) => {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET');
            res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
            next();
        });
        app.listen(serverPort, () => {
            console.log(`dev server started on port ${serverPort}`);
        });
    });
}

export default bootstrap;
