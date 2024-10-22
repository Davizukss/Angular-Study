import { DisciplinaService } from './../../services/disciplina.service';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-inscricao',
  templateUrl: './inscricao.component.html',
  styleUrls: ['./inscricao.component.css']
})
export class InscricaoComponent {
  disciplinas: any[] = [];
  monitorForm: FormGroup;

  constructor(private disciplinaService: DisciplinaService, private _formBuilder: FormBuilder) {
    this.monitorForm = this._formBuilder.group({
      id: null,
      nome: [''],
      foto: [''],
      whatsApp: [''],
      email: [''],
      conteudo: [''],
      disciplina: this._formBuilder.group({
        id: [0],
        nome: ['']
      }),
      disponibilidade: this._formBuilder.array([this.criarDisponibilidade()])
    });

    this.loadDisciplinas();
  }

  loadDisciplinas() {
    this.disciplinaService.BuscarDisciplinas().subscribe(res => {
      this.disciplinas = res?.map(i => ({
        value: i.id,
        label: i.nome
      })) || [];
    });
  }

  get disponibilidade(): FormArray {
    return this.monitorForm.get('disponibilidade') as FormArray;
  }

  addDisponibilidade() {
    this.disponibilidade.push(this.criarDisponibilidade());
  }

  criarDisponibilidade(): FormGroup {
    return this._formBuilder.group({
      diaSemana: [''],
      das: [''],
      ate: ['']
    });
  }

  onSalvar() {
    if (this.monitorForm.valid) {

      console.log(this.monitorForm.value);
    } else {
      console.error('Form is invalid');
    }
  }
}
