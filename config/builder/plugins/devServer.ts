import { EventEmitter } from 'events';
import * as fs from 'fs';
import path from 'path';

interface IProps {
    htmlPath: string;
    buildDir: string;
    emitter: EventEmitter;
    serverPort: number;
}

const devServerPlugin = ({ htmlPath, buildDir, emitter, serverPort }: IProps) => ({
    name: 'devServerPlugin',
    setup(build) {
        if (!fs.existsSync(buildDir)) {
            fs.mkdirSync(buildDir, { recursive: true });
        }

        const html = fs.readFileSync(htmlPath, 'utf8');
        const bodyPosition = html.indexOf('</body>');
        const updHtml = html.slice(0, bodyPosition) + `<script src="./utils.js"></script>` + html.slice(bodyPosition);
        fs.writeFileSync(path.join(buildDir, 'index.html'), updHtml);
        const utils = fs.readFileSync(path.join(__dirname, '..', 'templates', 'htmlUtils.js'), 'utf-8');
        const eventSourcePosition = utils.indexOf('//EventSource');

        const updUtils =
            utils.slice(0, eventSourcePosition) + `const event = new EventSource('http://localhost:${serverPort}/rebuild')` + utils.slice(eventSourcePosition);

        fs.writeFileSync(path.join(buildDir, 'utils.js'), updUtils);
        build.onEnd((res) => {
            emitter.emit('refreshHTML', '');
        });
    },
});

export default devServerPlugin;
