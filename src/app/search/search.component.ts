import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service';
import { ModalController } from '@ionic/angular';
import { ListPage } from '../list/list.page';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

  constructor(private router: Router, private service: ServiceService, private modalController: ModalController) { }

  projetos: any;

  ngOnInit() {
//    this.findAll();
  }

  viewProject(id: number): void {
    console.log(id);
    this.router.navigate(['/list', id]);
  }

  findProject(form): void {
    if (form.projeto) {
      this.service.findByFilter(form.projeto).subscribe(resp => {
        console.log(resp);
        this.projetos = resp;
      });
    } else {
      this.service.find().subscribe(resp => {
        console.log(resp);
        this.projetos = resp;
      });
    }
  }

  findAll() {
    this.service.find().subscribe(resp => {
      console.log(resp);
      this.projetos = resp;
    });
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: ListPage
    });
    return await modal.present();
  }

}
