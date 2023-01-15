import { Departement } from "./departement.model";

export class Lieu {
    lieu_id!: String;
    nom!: String;
    longitude!: Number;
    latitude!: Number;
    departement!: Departement;
}