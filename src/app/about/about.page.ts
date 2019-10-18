import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service';
import { ModalController } from '@ionic/angular';
import { SecondPage } from './../modals/second/second.page';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  alunos: any;

  constructor(private service: ServiceService, private modalController: ModalController) {}

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.service.list().subscribe(res => {
      this.alunos = res;
    });
  }

  get(key: string) {

  }

  save(aluno: any) {
  }

  remove(key: string) {

  }

  async openModal() {
    const modal = await this.modalController.create({
      component: SecondPage
    });
    return await modal.present();

  }
}
