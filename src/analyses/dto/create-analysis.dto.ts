import { Externe } from "src/externes/entities/externe.entity";
import { Hospitalise } from "src/hospitalises/entities/hospitalise.entity";
import { Medecinexterne } from "src/medecinexternes/entities/medecinexterne.entity";
import { Medecinlocal } from "src/medecinlocals/entities/medecinlocal.entity";

export class CreateAnalysisDto {
    //ENTITE ANALYSE
    id: number;
    examen: string;
    num_quit: number;
    rc: string;
    payement: string;
    resultat: string;
    date_analyse: string;
    //CLE ETRANGER
    num_hospi: Hospitalise;
    id_medecinL: Medecinlocal;
    num_externe: Externe;
    id_medecinE: Medecinexterne;
}