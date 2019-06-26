import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
declare var google: any;

@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {

  height = 0;
  lat = 0;
  lng = 0;
  zoom = 0;
  tracks = [];

  constructor(public platform: Platform) {
    console.log(platform.height());
    this.height = platform.height();
    this.lat = -21.79565;
    this.lng = -48.17755;
    this.zoom = 19;
  }
  
  ngOnInit() {

    this.tracks = [
      {lat: -21.79565, lng: -48.17755, label: 'Unidade I', nome: 'Lab Med veternaria', bloco: 'Bloco D', sala: ''},
      {lat: -21.79576, lng: -48.17748, label: 'Unidade I',  nome: 'Lab anatomia 1', bloco: 'Bloco D', sala: ''},
      {lat: -21.79565, lng: -48.17755, label: 'Unidade I',  nome: 'Lab anatomia 2', bloco: 'Bloco D', sala: ''},
      {lat: -21.79594, lng: -48.17763, label: 'Unidade I',  nome: 'Lab biologia', bloco: 'Bloco A', sala: ''},
      {lat: -21.79609, lng: -48.17796, label: 'Unidade I',  nome: 'Lab Informatica 2', bloco: '', sala: ''},
      {lat: -21.79594, lng: -48.1776, label: 'Unidade I',  nome: 'Lab química', bloco: '', sala: ''},
      {lat: -21.79604, lng: -48.17752, label: 'Unidade I',  nome: '2º Andar', bloco: '', sala: '104'},
      {lat: -21.79613, lng: -48.17805, label: 'Unidade I',  nome: 'Jogos Digitais', bloco: '', sala: ''},
    ];
  }

}
