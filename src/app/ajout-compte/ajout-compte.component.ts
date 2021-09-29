import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Compte} from '../ajout-compte/Compte'

@Component({
  selector: 'app-ajout-compte',
  templateUrl: './ajout-compte.component.html',
  styleUrls: ['./ajout-compte.component.scss']
})

export class AjoutCompteComponent implements OnInit {

  @Input() mail:string="";
  compte:Compte[]=[];
  lol:string="";
  @Output() comptes = new EventEmitter<Compte[]>();
  constructor() { }
  email = new FormControl('', [Validators.required, Validators.email]);
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'doit être renseigné';
    }
    return this.email.hasError('email') ? 'email non valid  ' : '';
  }
  ngOnInit(): void {
  }

  ajout(data:Compte){
    this.compte.push(data);
  }

}
