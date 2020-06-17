import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  constructor(private ofauth:AngularFireAuth) { }

  ngOnInit() {
  }

  logout() {
    //console.log(this.ofauth.user.email)
    this.ofauth.auth.signOut();
  }

}
