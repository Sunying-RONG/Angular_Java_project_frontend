import { Celebrite } from "./celebrite.model";

export interface Monument {
    monument_id: string;
    nom: string;
    proprietaire: string;
    typeM: string;
    longitude: number;
    latitude: number;
    celebrites?: Celebrite[];
}
