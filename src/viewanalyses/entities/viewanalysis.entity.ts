import { ViewColumn, ViewEntity } from 'typeorm';

@ViewEntity({ name: 'vue_vrai' })
export class Viewanalysis {
  @ViewColumn()
  num: number;

  @ViewColumn()
  id: number;

  @ViewColumn()
  nom: string;

  @ViewColumn()
  prenom: string;

  @ViewColumn()
  age: string;

  @ViewColumn()
  sexe: string;

  @ViewColumn()
  service: string;

  @ViewColumn()
  resultat: string;

  @ViewColumn()
  num_quit: number;

  @ViewColumn()
  date_analyse: string;

  @ViewColumn()
  nomP: string;

  @ViewColumn()
  rc: string;

  @ViewColumn()
  payement: string;
}