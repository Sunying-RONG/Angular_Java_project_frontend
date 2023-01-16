import { Monument } from "./monument.model";

export interface MonumentGroup {
    lieu_nom: string;
    monuments: Monument[];
}
