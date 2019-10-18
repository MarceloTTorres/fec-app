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

  usuarios: any[] = [
    {
      'id': 1,
      'avatar': 'https://avatars0.githubusercontent.com/u/24421598?s=460&v=4',
      'nome': 'Marcelo Torres',
      'sub': 'Líder Técnico PHP Laravel, .Net e Java',
      'local': 'Araraquara, São Paulo, Brasil',
      'logoLinkedin': 'https://www.linkedin.com/in/marcelo-teixeira-torres/',
      'logoGithub': 'https://github.com/MarceloTTorres'
    },
    {
      'id': 2,
      'avatar': 'https://media.licdn.com/dms/image/C4E03AQH7jOYTirg2pw/profile-displayphoto-shrink_200_200/0?e=1571875200&v=beta&t=jzEo50VSkcRTJtmNMxPMaf-xKguwZkhPrqyuchVFv64',
      'nome': 'Rafael Veloso',
      'sub': 'Desenvolvedor na Cast Group',
      'local': 'Araraquara, São Paulo, Brasil',
      'logoLinkedin': 'https://www.linkedin.com/in/rafael-veloso-197718158/',
      'logoGithub': 'https://github.com/rsveloso01'
    },
    {
      'id': 3,
      'avatar': 'https://media.licdn.com/dms/image/C4D03AQEwJaAuiO21SA/profile-displayphoto-shrink_200_200/0?e=1571875200&v=beta&t=hYguKroE7PA6-YaMl95ojZ9mIkO8DLBuG8WP3xWLrGw',
      'nome': 'Vinicius Vieira',
      'sub': 'Aluno na UNIARA',
      'local': 'Araraquara, São Paulo, Brasil',
      'logoLinkedin': 'https://www.linkedin.com/in/vinicius-vieira-25447a144/',
      'logoGithub': 'https://github.com/viniciusUniara'
    },
    {
      'id': 4,
      'avatar': 'https://media.licdn.com/dms/image/C4E03AQHD3baYldDYhw/profile-displayphoto-shrink_200_200/0?e=1571875200&v=beta&t=8OlO_7cswJLdKuyNaTuAGDCNkBwcZGbtZnby7X0eeug',
      'nome': 'Eduardo Garcia',
      'sub': 'Desenvolvedor na Cast Group',
      'local': 'Araraquara, São Paulo, Brasil',
      'logoLinkedin': 'https://www.linkedin.com/in/eduardohgarcia/',
      'logoGithub': 'https://github.com/EduardoHGarcia'
    },
    {
      'id': 5,
      'avatar': 'https://avatars3.githubusercontent.com/u/25551033?s=400&v=4',
      'nome': 'Julio Kasahara',
      'sub': 'Desenvolvedor na Cast Group',
      'local': 'Araraquara, São Paulo, Brasil',
      'logoLinkedin': 'https://www.linkedin.com/in/julio-cesar-dias-kasahara-63135113b/?originalSubdomain=br',
      'logoGithub': 'https://github.com/juliokasahara'
    },
  ];

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
