type Modules = '_SetLocation';

const getModule = (name: Modules) => {
    //@ts-ignore
    return Module[name];
};

const engineApi = {
    setLocation(value: number) {
        getModule('_SetLocation')(value);
    },
};

export default engineApi;
