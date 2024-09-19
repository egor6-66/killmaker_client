import { BuildOptions, context } from 'esbuild';
import { EventEmitter } from 'events';
import express from 'express';

import { devServerPlugin } from './plugins';
interface IProps {
    serverPort: number;
    buildConfig: BuildOptions;
    buildDir: string;
    htmlPath: string;
}

const emitter = new EventEmitter();

function bootstrap({ buildConfig, serverPort, buildDir, htmlPath }: IProps) {
    const app = express();
    context({
        plugins: [devServerPlugin({ htmlPath, buildDir, emitter, serverPort })],
        ...buildConfig,
    }).then(async (res) => {
        await res.watch();
        app.use('/', express.static(buildDir));

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

        app.listen(serverPort, () => {
            console.log(`dev server started on port ${serverPort}`);
        });
    });
}

export default bootstrap;
