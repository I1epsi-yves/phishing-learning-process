import { Component, OnInit } from '@angular/core';
import { Campagne } from '../entity/Campagne';
import { Compte } from '../entity/Compte';
import { CampagneService } from '../service/CampagneService';
import { CompteService } from '../service/CompteService';

@Component({
  selector: 'app-graphique',
  templateUrl: './graphique.component.html',
  styleUrls: ['./graphique.component.scss']
})
export class GraphiqueComponent {


  single: any[]=[];


  constructor(public compteService:CompteService, public campagneService:CampagneService)
  {
  }

  listeCompte:Compte[]=[];
  listeCompteAffichage:Compte[]=[];
  listeCampagnes:Campagne[]=[]
  compteurSucces:number=0;
  compteurEchec:number=0;
  startValue:number=0;


  

  ngOnInit(): void
  {
    /*this.listeDonnee=this.compteService.getComptePhishing();*/
    /*this.listeCampagnes=this.campagneService.getCampagnes();*/
    this.listeCompte.push(new Compte(0,1,1,"Aubin","TEST","Réseau","",0));
    this.listeCompte.push(new Compte(0,0,1,"Aubin","TEST","Réseau","",0));
    this.listeCompte.push(new Compte(0,0,0,"Aubin","TEST","Réseau","",0));
    this.listeCompte.push(new Compte(0,1,1,"Aubin","TEST","Réseau","",0));
    this.listeCompte.push(new Compte(0,1,0,"Aubin","TEST","Réseau","",0));
    this.listeCompte.push(new Compte(0,1,1,"Aubin","TEST","Réseau","",0));
    this.listeCompte.push(new Compte(0,1,0,"Aubin","TEST","Réseau","",0));
    this.listeCampagnes.push(new Campagne(0,0,"test","Test",new Date(2018, 0O5, 0O6, 4, 44, 10, 10)));
    this.listeCampagnes.push(new Campagne(1,0,"test","Test2",new Date(2019, 0O4, 0O5, 17, 23, 42, 11)));
    this.compteurEchec=0;
    this.compteurSucces=0;
    for(let y=0;y<this.listeCompte.length;y++)
    {
        if(this.listeCompte[y].getCampagne_kn()==this.startValue)
        {
          this.listeCompteAffichage.push(this.listeCompte[y])

        }
    }
    for(let i=0;i<this.listeCompteAffichage.length;i++)
    {
      if(this.listeCompteAffichage[i].getEtat_kn()==1)
      {
        this.compteurSucces++;
      }
      else if(this.listeCompteAffichage[i].getEtat_kn()==0)
      {
        this.compteurEchec++;
      }
    }
    this.ajoutDonnees("Echec",this.compteurSucces);
    this.ajoutDonnees("Succès",this.compteurEchec);
    Object.assign(this, this.data);
  }

    public totalDonnee:number=0;

  data:any[]=[];

  view:[number,number] = [1000, 500];




  gradient:boolean = false;
  showLegend:boolean = true;
  showLabels:boolean = true;
  isDoughnut:boolean = false;
  legendPosition:any = 'below';

  ajoutDonnees(nom:string,valeur:number)
  {
    this.data.push({name:nom,value:valeur});
  }


  onSelect(data:any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data:any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data:any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  changementdeDonnees(it:string)
  {
    this.compteurSucces=0;
    this.compteurEchec=0;
    this.listeCompteAffichage=[];
    this.data=[];
    console.log(it);
    for(let y=0;y<this.listeCompte.length;y++)
    {
        if(this.listeCompte[y].getCampagne_kn()==Number(it))
        {
          this.listeCompteAffichage.push(this.listeCompte[y])
        }
    }
    for(let i=0;i<this.listeCompteAffichage.length;i++)
    {
      if(this.listeCompteAffichage[i].getEtat_kn()==1)
      {
        this.compteurSucces++;
      }
      else if(this.listeCompteAffichage[i].getEtat_kn()==0)
      {
        this.compteurEchec++;
      }
    }
    this.ajoutDonnees("Echec",this.compteurSucces);
    this.ajoutDonnees("Succès",this.compteurEchec);
    Object.assign(this, this.data);
  }

}
