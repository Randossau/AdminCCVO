import { UserI } from 'src/app/modules/users/userinterface';
import { LocalisationI } from 'src/app/modules/map/localisationinterface';

export interface IncidentsI {

    id: string;
    no: number;
    date: Date;
    description: string;
    utilisateur: UserI;
    image: string;
    libelle: string;
    lieu: LocalisationI;
    type: string;
}

