import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AprendiendoAngular';

  constructor(private ofauth: AngularFireAuth) {

    this.ofauth.user.subscribe((usuario)=>{
      console.log(usuario)
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
