import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

//   bigChart() {
//     return [{
//         name: 'Pic d'Osseau',
//         data: [502, 635, 809, 947, 1402, 3634, 5268]
//     }, {
//         name: 'Africa',
//         data: [106, 107, 111, 133, 221, 767, 1766]
//     }, {
//         name: 'Europe',
//         data: [163, 203, 276, 408, 547, 729, 628]
//     }, {
//         name: 'America',
//         data: [18, 31, 54, 156, 339, 818, 1201]
//     }, {
//         name: 'Oceania',
//         data: [2, 2, 2, 6, 13, 30, 46]
//     }];
//   }

  cards() {
    return [71, 78, 39, 66];
  }

  pieChart(){
    return [{
      name: '+ 40 ans',
      y: 61.41,
      sliced: true,
      selected: true
  }, {
      name: 'Entre 18 et 40ans',
      y: 11.84
  }, {
      name: '+ 50 ans ',
      y: 10.85
  }, {
      name: '- 18 ans',
      y: 4.67
  }, {
      name: '+ 60 ans',
      y: 4.18
  }, {
      name: '0 à 10 ans',
      y: 1.64
  }, {
      name: '+ 70 ans',
      y: 1.6
  }, {
      name: 'Non renseigné',
      y: 1.2
  }, {
      name: 'Entre 10 et 15 ans',
      y: 2.61
  }];
  }
}
