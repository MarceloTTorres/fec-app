import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class ServiceService {

    // json-server --watch db.json
    url = 'http://localhost:3000/';
    alunos = 'usuarios';
    projetos = 'projetos';
    constructor(private httpClient: HttpClient) { }

    public list () {
        return this.httpClient.get(`${this.url}${this.alunos}`);
    }

    public findByFilter(filter: any) {
        return this.httpClient.get(`${this.url}${this.projetos}?title_like=${filter}`);
    }

    public find() {
        return this.httpClient.get(`${this.url}${this.projetos}`);
    }

    public saveAlunos(project: any) {
        return this.httpClient.post(`${this.url}${this.alunos}`, project);
    }

    public saveProject(project: any) {
        return this.httpClient.post(`${this.url}${this.projetos}`, project);
    }

}
