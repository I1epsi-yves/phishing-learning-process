import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Compte } from '../entity/Compte';

export class CampagneService
{
    constructor(private http: HttpClient){}

    public getComptePhishing():Compte[]
    {
        let listeCompte:Compte[]=[];
        this.http.get<any>('http://localhost/compte/getAll')
        .subscribe((response) => {
            response.forEach((element: { compte_kn: number; campagne_kn: number; etat_kn: number; prenom: string; nom: string; pole: string; email: string; compteur: number; }) => {
                listeCompte.push(new Compte(element.compte_kn,element.campagne_kn,element.etat_kn,element.prenom,element.nom,element.pole,element.email,element.compteur));
            });
        },
        (error) => {
            console.log('Erreur ! : ' + error);
        }
        );
        return listeCompte;
    }

    public insertCampagne(compte:Compte)
    {
        this.http.post<any>('http://localhost/compte/insert',compte)
        .subscribe((response) => {
            console.log('Succès ! : ' + response);
        },
        (error) => {
            console.log('Erreur ! : ' + error);
        }
        );
    }

    public deleteCampagne(compte:Compte)
    {
        this.http.post<any>('http://localhost/compte/delete',compte)
        .subscribe((response) => {
            console.log('Succès ! : ' + response);
        },
        (error) => {
            console.log('Erreur ! : ' + error);
        }
        );
    }
}
