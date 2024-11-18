export interface IUser {
    id: number;
    first_name: string;
    last_name: string;
    avatar: string;
    nickname: string;
    isOnline: boolean;
    clientApp: {
        lang: string;
        theme: string;
    };
}
