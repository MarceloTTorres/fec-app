import { Component } from '@angular/core';
import { Facebook } from '@ionic-native/facebook';
import { Usuario } from '../model/Usuario';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {
  
  public facebook;

  constructor(){
    this.facebook = Facebook;
  }

  loginFacebook() {
    let permissions = new Array<string>();
    permissions = ["public_profile", "email"];

    this.facebook.login(permissions).then((response) => {
     let params = new Array<string>();

     this.facebook.api("/me?fields=name,email", params)
     .then(res => {

         //estou usando o model para criar os usuarios
         let usuario = new Usuario();
         usuario.nome = res.name;
         usuario.email = res.email;
         usuario.senha = res.id;
         usuario.login = res.email;
       
         this.logar(usuario);
     }, (error) => {
       alert(error);
       console.log('ERRO LOGIN: ',error);
     })
   }, (error) => {
     alert(error);
   });
 }

 logar(usuario: Usuario) {
   //this.salvarService.salvarFacebook(usuario)
   //.then(() => {
       console.log('Usuario obtido via facebook com sucesso! '+ usuario.nome + usuario.email);
   //})
 }

  usuario: any = 'Bem vindo!';
}
