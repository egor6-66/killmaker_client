import { EventEmitter } from 'events';
import * as fs from 'fs';
import path from 'path';

interface IProps {
    htmlPath: string;
    buildPath: string;
    emitter: EventEmitter;
    serverPort: number;
    assetsPath: string;
}

const devServerPlugin = ({ htmlPath, buildPath, emitter, serverPort, assetsPath }: IProps) => ({
    name: 'devServerPlugin',
    setup(build) {
        if (!fs.existsSync(assetsPath)) {
            fs.mkdirSync(assetsPath, { recursive: true });
        }

        const html = fs.readFileSync(htmlPath, 'utf8');
        // const bodyPosition = html.indexOf('</body>');
        // const updHtml = html.slice(0, bodyPosition) + `<script src="./assets/bootstrap.js"></script>` + html.slice(bodyPosition);
        fs.writeFileSync(path.join(buildPath, 'index.html'), html);
        const utils = fs.readFileSync(path.join(__dirname, '..', 'templates', 'bootstrap.js'), 'utf-8');
        const eventSourcePosition = utils.indexOf('//EventSource');

        const updUtils =
            utils.slice(0, eventSourcePosition) + `const event = new EventSource('http://localhost/rebuild')` + utils.slice(eventSourcePosition);

        fs.writeFileSync(path.join(assetsPath, 'bootstrap.js'), updUtils);
        build.onEnd((res) => {
            emitter.emit('refreshHTML', '');
            console.log('rebuild');
        });
    },
});

export default devServerPlugin;
