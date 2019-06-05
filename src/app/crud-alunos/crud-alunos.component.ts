import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud-alunos',
  templateUrl: './crud-alunos.component.html',
  styleUrls: ['./crud-alunos.component.css']
})
export class CrudAlunosComponent implements OnInit {
  
  ngOnInit() {
  }

  aluno: Object;
  listaAlunos = [];
  tamanhoLista=0;

  nome: string;
  matricula: string;
  idade: number;

  constructor() { }

  cadastrar(){
    this.aluno=[this.nome, this.matricula, this.idade];

    this.listaAlunos.push(this.aluno);
    this.tamanhoLista=this.listaAlunos.length;
  }

  remover(indice){
    this.listaAlunos.splice(indice, 1)
  }


}