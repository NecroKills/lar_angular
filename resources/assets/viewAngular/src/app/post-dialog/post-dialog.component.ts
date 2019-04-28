import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Post } from '../post';

@Component({
  selector: 'app-post-dialog',
  templateUrl: './post-dialog.component.html',
  styleUrls: ['./post-dialog.component.css']
})
export class PostDialogComponent implements OnInit {

  private nomeArquivo: string = '';

  // Conter valores digitados no formulario
  private dados = {
    post: new Post("","","","","",""),
    arquivo: null
  };

  // Retorna os dados que o usuario digitou no formulario
  constructor(
    public dialogref: MatDialogRef<PostDialogComponent>) { }

  ngOnInit() {
  }

  // função que captura o nome do arquivo e o arquivo e seta no nomeArquivo e dados.arquivo
  mudouArquivo(event){
    this.nomeArquivo = event.target.files[0].name;
    this.dados.arquivo = event.target.files[0];
  }

  salvarFormulario(){
    this.dialogref.close(this.dados);
  }

  cancelarFormulario(){
    this.dialogref.close(null);
  }
}
