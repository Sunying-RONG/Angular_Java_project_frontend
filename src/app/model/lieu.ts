import { Departement } from "./departement";

export class Lieu {
    lieu_id!: String;
    nom!: String;
    longitude!: number;
    latitude!: number;
    departement!: Departement;
}
