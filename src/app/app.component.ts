import { Component, OnInit } from '@angular/core';
import { PessoasService } from 'src/services/pessoas.service';
import { map } from 'rxjs/operators'
import { Pessoas } from 'src/_model/Pessoas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  pessoas : Array<any> = new Array();
  searchText: any

  constructor(
    public pessoasService: PessoasService
  ){}

  ngOnInit(){
    this.listarPessoas();  

  }


  listarPessoas(){
    this.pessoasService.getPessoas().subscribe(pessoas => {
      
      this.pessoas = pessoas.results;
      console.log(this.pessoas);
      
    }, err=> {
      console.log("Error ao listar pessoas", err);
    })
  }
}
