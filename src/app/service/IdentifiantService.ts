import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ComptePhishing } from '../entity/ComptePhishing';
import { Identifiant } from '../entity/Identifiant';

export class CampagneService
{
    constructor(private http: HttpClient){}

    public getComptePhishing():Identifiant[]
    {
        let listeIdentifiant:Identifiant[]=[];
        this.http.get<any>('http://localhost/identifiant/getAll')
        .subscribe((response) => {
            response.forEach((element: { identifiant_kn: number; nom: string; motDePasse: string; }) => {
                listeIdentifiant.push(new Identifiant(element.identifiant_kn,element.nom,element.motDePasse));
            });
        },
        (error) => {
            console.log('Erreur ! : ' + error);
        }
        );
        return listeIdentifiant;
    }

    public insertCampagne(identifiant:Identifiant)
    {
        this.http.post<any>('http://localhost/identifiant/insert',identifiant)
        .subscribe((response) => {
            console.log('Succès ! : ' + response);
        },
        (error) => {
            console.log('Erreur ! : ' + error);
        }
        );
    }

    public deleteCampagne(identifiant:Identifiant)
    {
        this.http.post<any>('http://localhost/identifiant/delete',identifiant)
        .subscribe((response) => {
            console.log('Succès ! : ' + response);
        },
        (error) => {
            console.log('Erreur ! : ' + error);
        }
        );
    }
}
