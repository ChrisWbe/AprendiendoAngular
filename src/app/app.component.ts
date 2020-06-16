import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth, User } from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AprendiendoAngular';
  usuario:User;
  cargando:boolean = true;

  constructor(private ofauth: AngularFireAuth) {

    this.ofauth.user.subscribe((usuario)=>{
      console.log(usuario)
      this.cargando=false;
      this.usuario = usuario;
    })
  }
  login() {
    this.ofauth.auth.signInWithEmailAndPassword("chriswbe1993@gmail.com", "123456789");
  }
  logout() {
    //console.log(this.ofauth.user.email)
    this.ofauth.auth.signOut();
  }
}
