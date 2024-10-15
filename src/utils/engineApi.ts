type Modules = '_SetLocation' | '_SetAuth' | '_GoToLevel';

class engineApi {
    getModule = (name: Modules) => {
        //@ts-ignore
        return Module[name];
    };

    setLocation(value: number) {
        const module = this.getModule('_SetLocation');
        module && module(value);
    }

    setAuth(value: number) {
        const module = this.getModule('_SetAuth');
        module && module(value);
    }

    goToLevel(value: number) {
        const module = this.getModule('_GoToLevel');
        module && module(value);
    }
}

export default new engineApi();
