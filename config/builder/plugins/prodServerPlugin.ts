import * as fs from 'fs';
import path from 'path';

interface IProps {
    htmlPath: string;
    buildPath: string;
    assetsPath: string;
}

const prodServerPlugin = ({htmlPath, buildPath, assetsPath}: IProps) => ({
    name: 'devServerPlugin',
    setup(build) {
        if (!fs.existsSync(assetsPath)) {
            fs.mkdirSync(assetsPath, {recursive: true});
        }

        const html = fs.readFileSync(htmlPath, 'utf8');

        fs.writeFileSync(path.join(buildPath, 'index.html'), html);
        const utils = fs.readFileSync(path.join(__dirname, '..', 'templates', 'bootstrap.js'), 'utf-8');


        fs.writeFileSync(path.join(assetsPath, 'bootstrap.js'), utils);
    },
});

export default prodServerPlugin;
