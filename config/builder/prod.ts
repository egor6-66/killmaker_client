import { BuildOptions, build } from 'esbuild';
import { prodServerPlugin, sharedPlugins } from './plugins';

interface IProps {
    buildConfig: BuildOptions;
    buildPath: string;
    htmlPath: string;
    assetsPath: string;
}

async function prod(props: IProps) {
    await build({...props.buildConfig, plugins: [...sharedPlugins, prodServerPlugin(props)]})
}

export default prod;