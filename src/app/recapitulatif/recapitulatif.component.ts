import { Component, OnInit } from '@angular/core';
import { Compte } from '../entity/Compte';
import { CompteService } from '../service/CompteService';

@Component({
  selector: 'app-recapitulatif',
  templateUrl: './recapitulatif.component.html',
  styleUrls: ['./recapitulatif.component.scss']
})
export class RecapitulatifComponent implements OnInit {

  constructor(public compteService:CompteService) { }


  listeCompte:Compte[]=[];



  ngOnInit(): void
  {
    this.listeCompte.push(new Compte(0,1,1,"Aubin","PERRIER","RH","aubin.pierre@epsi.fr",0));
    this.listeCompte.push(new Compte(0,0,1,"Lucas","SERRE","Réseau","lucas.serre@epsi.fr",0));
    this.listeCompte.push(new Compte(0,0,1,"Caroline","LUCETTE","Réseau","caroline.lucette@epsi.fr",0));
    this.listeCompte.push(new Compte(0,1,2,"Pierre","SCHIMDT","Informatique","pierre.schimdt@epsi.fr",0));
  }

}
