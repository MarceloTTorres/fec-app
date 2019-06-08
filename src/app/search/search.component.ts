import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SearchService } from './service/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

  constructor(private router: Router, private searcService: SearchService) { }

  items: any[] = [
    {
      id: 1,
      title: 'teste 1'
    },
    {
      id: 2,
      title: 'teste 2'
    },
    {
      id: 3,
      title: 'teste 3'
    },
  ]

  ngOnInit() {
    // Descomentar quando tiver api no backend
    // this.searcService.findAll().subscribe(resp => {
    //   this.items = resp;
    // });
  }

  viewProject(id: number): void {
    this.router.navigate(['view-project/', id]);
  }

  findProject(form): void{
    console.log(form.value);
    this.searcService.findByFilter(form.value).subscribe(resp => {
      this.items = resp;
    })
  }

}
