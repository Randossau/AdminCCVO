export interface IParcours {
    id?:string;
    titre:string;
    description: string;
    pointDepart: string;
    niveau?: number;
    elevation?: number;
    distance?: number;
    duree?: number;
    type: string;
    image?: string;
    pdf?: string;
    gpxLocal?: string;
    gpx?: string;
  }

