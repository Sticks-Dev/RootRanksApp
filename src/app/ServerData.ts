import { UserData } from "./UserData";

export interface ServerData {
    serverID: number;
    serverName: string;
    userData: UserData[];
}