import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  usuarios: any[] = [
    {
      'id': '1',
      'avatar': 'https://media.licdn.com/dms/image/C4D03AQFUBpSZg2P28g/profile-displayphoto-shrink_800_800/0?e=1564617600&v=beta&t=pKL2viFszpIO0Q-2t3mz2YQJMR-syDWVkhG789EvHJg',
      'nome': 'Marcelo Torres',
      'sub': 'Líder Técnico PHP Laravel, .Net e Java',
      'local': 'Araraquara, São Paulo, Brasil',
      'logoLinkedin': 'https://www.linkedin.com/in/marcelo-teixeira-torres/',
      'logoGithub': 'https://github.com/MarceloTTorres'
    },
    {
      'id': '2',
      'avatar': 'https://media.licdn.com/dms/image/C4E03AQH7jOYTirg2pw/profile-displayphoto-shrink_200_200/0?e=1564617600&v=beta&t=CueTD8GFQGOtV1V2U6pksNANywzvKqVyfeA9LQxZoGM',
      'nome': 'Rafael Veloso',
      'sub': 'Desenvolvedor na Cast Group',
      'local': 'Araraquara, São Paulo, Brasil',
      'logoLinkedin': 'https://www.linkedin.com/in/rafael-veloso-197718158/',
      'logoGithub': 'https://github.com/rsveloso01'
    },
    {
      'id': '3',
      'avatar': 'https://media.licdn.com/dms/image/C4D03AQEwJaAuiO21SA/profile-displayphoto-shrink_800_800/0?e=1564617600&v=beta&t=AxZ_wfl199B0agIHxMwOpDsfL_j14kpUCJWJgbTZRqY',
      'nome': 'Vinicius Vieira',
      'sub': 'Aluno na UNIARA',
      'local': 'Araraquara, São Paulo, Brasil',
      'logoLinkedin': 'https://www.linkedin.com/in/vinicius-vieira-25447a144/',
      'logoGithub': 'https://github.com/viniciusUniara'
    },
    {
      'id': '4',
      'avatar': 'https://media.licdn.com/dms/image/C4E03AQHD3baYldDYhw/profile-displayphoto-shrink_800_800/0?e=1564617600&v=beta&t=-ZfKA1nhMF8adS7tGIS1UIeo3EOhaguawHiyCoeGIKs',
      'nome': 'Eduardo Garcia',
      'sub': 'Desenvolvedor na Cast Group',
      'local': 'Araraquara, São Paulo, Brasil',
      'logoLinkedin': 'https://www.linkedin.com/in/eduardohgarcia/',
      'logoGithub': 'https://github.com/EduardoHGarcia'
    },
    {
      'id': '5',
      'avatar': 'https://avatars3.githubusercontent.com/u/25551033?s=400&v=4',
      'nome': 'Julio Kasahara',
      'sub': 'Desenvolvedor na Cast Group',
      'local': 'Araraquara, São Paulo, Brasil',
      'logoLinkedin': 'https://www.linkedin.com/in/julio-cesar-dias-kasahara-63135113b/?originalSubdomain=br',
      'logoGithub': 'https://github.com/juliokasahara'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
