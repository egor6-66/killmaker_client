type Modules = '_SetMainLocation';

class engineApi {
    getModule = (name: Modules) => {
        //@ts-ignore
        return Module[name];
    };

    setLocation(value: number) {
        const module = this.getModule('_SetMainLocation');
        module && module(value);
    }
}

export default new engineApi();
