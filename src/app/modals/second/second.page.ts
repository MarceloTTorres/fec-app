import { ServiceService } from './../../service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-second',
  templateUrl: './second.page.html',
  styleUrls: ['./second.page.scss'],
})
export class SecondPage implements OnInit {

  constructor(private service: ServiceService, private modalController: ModalController) {
  }

  ngOnInit() {
  }

  async closeModal() {
    await this.modalController.dismiss();
  }

  logForm(form) {
    console.log(form.value);
    this.service.saveAlunos(form.value).subscribe(resp => {
      console.log(resp);
      this.modalController.dismiss();
    });
  }

}
