import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  authError: any;

  constructor(private authServ: AuthService) { }

  ngOnInit(): void {
  }

  createUser(userRegForm){
    // this.authServ.createUser(userRegForm.value)
  }

}
