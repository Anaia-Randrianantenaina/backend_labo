import { ViewColumn, ViewEntity } from "typeorm";

@ViewEntity({name: "vue_vraie"})
export class Viewanalyseex {
    @ViewColumn()
    numE: number;
  
    @ViewColumn()
    id: number;
  
    @ViewColumn()
    nomE: string;
  
    @ViewColumn()
    prenomE: string;
  
    @ViewColumn()
    ageE: string;
  
    @ViewColumn()
    sexeE: string;
  
    @ViewColumn()
    adresseE: string;
  
    @ViewColumn()
    resultat: string;
  
    @ViewColumn()
    num_quit: number;
  
    @ViewColumn()
    date_analyse: string;
  
    @ViewColumn()
    nomME: string;
  
    @ViewColumn()
    rc: string;
  
    @ViewColumn()
    payement: string;
}
