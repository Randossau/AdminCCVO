import { Component, OnInit, Input } from '@angular/core';
import { IParcours } from '../parcoursDataModel/parcoursInterface';
import { ParcoursServService } from '../services/parcours-serv.service';


@Component({
  selector: 'app-add-parcours',
  templateUrl: './add-parcours.component.html',
  styleUrls: ['./add-parcours.component.scss']
})
export class AddParcoursComponent implements OnInit {

  // @Input() parcours: IParcours;
  parcours: IParcours = {
    titre: '',
    description: '',
    pointDepart: '',
    type: '',
  }

  constructor(private parcourServ: ParcoursServService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.parcours.titre !=''
      && this.parcours.description !=''
      && this.parcours.pointDepart !=''
      && this.parcours.type !=''
    )
    this.parcourServ.addParcours(this.parcours);
    this.parcours.titre ='';
    this.parcours.description ='';
    this.parcours.pointDepart ='';
    this.parcours.type ='';
  }
}
