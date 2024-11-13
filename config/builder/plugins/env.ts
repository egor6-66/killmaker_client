
import * as fs from 'fs';
import path from 'path';


const envPlugin = () => ({
    name: 'devServerPlugin',
    setup() {
        const envFile = fs.readFileSync(path.resolve(`.env.${process.env.NODE}`), 'utf8');
        const rows = envFile.split('\n')
        rows.forEach(row => {
            const splitRow = row.split('=')
            process.env[splitRow[0]] = splitRow.slice(1).join('=')
        })
    },
});

export default envPlugin;
