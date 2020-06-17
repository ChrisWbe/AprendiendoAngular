import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formularioLogin:FormGroup
  datosCorrecto:boolean = true;
  textoError:string="";
  constructor(private creadorFormulario:FormBuilder, private ofauth: AngularFireAuth, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.formularioLogin = this.creadorFormulario.group({
      email:['', Validators.compose([
        Validators.required, Validators.email
      ])],
      password:['', Validators.required]
    })
  }

  ingresar(){
    
 
    if(this.formularioLogin.valid){
      this.datosCorrecto=true;
      this.spinner.show();
      this.ofauth.auth.signInWithEmailAndPassword(this.formularioLogin.value.email, this.formularioLogin.value.password).then((usuario)=>{
        console.log(usuario)
        this.spinner.hide();

      }).catch((error)=>{
        console.log(error);
        this.datosCorrecto=false;
        this.textoError=error.message;
        this.spinner.hide();
      })
    }else{
      this.datosCorrecto=false;
      this.textoError="Revisa que los datos estén correctos";
    }
    
    
  }

}
