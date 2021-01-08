export class Developer {
    id:number;
    name: string;
    sites: Site[];
}

export interface Site {
    id: number,
    name: string,
    deploy: string,
    client: Client
}

export interface Client {
    id: number,
    name: string
}