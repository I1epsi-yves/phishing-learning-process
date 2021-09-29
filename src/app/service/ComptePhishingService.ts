import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ComptePhishing } from '../entity/ComptePhishing';

export class CampagneService
{
    constructor(private http: HttpClient){}

    public getComptePhishing():ComptePhishing[]
    {
        let listeComptePhishing:ComptePhishing[]=[];
        this.http.get<any>('http://localhost/comptePhishing/getAll')
        .subscribe((response) => {
            response.forEach((element: { comptePhishing_kn: number; email: string; motDePasse: string; }) => {
                listeComptePhishing.push(new ComptePhishing(element.comptePhishing_kn,element.email,element.motDePasse));
            });
        },
        (error) => {
            console.log('Erreur ! : ' + error);
        }
        );
        return listeComptePhishing;
    }

    public insertCampagne(comptePhishing:ComptePhishing)
    {
        this.http.post<any>('http://localhost/comptePhishing/insert',comptePhishing)
        .subscribe((response) => {
            console.log('Succès ! : ' + response);
        },
        (error) => {
            console.log('Erreur ! : ' + error);
        }
        );
    }

    public deleteCampagne(comptePhishing:ComptePhishing)
    {
        this.http.post<any>('http://localhost/comptePhishing/delete',comptePhishing)
        .subscribe((response) => {
            console.log('Succès ! : ' + response);
        },
        (error) => {
            console.log('Erreur ! : ' + error);
        }
        );
    }
}
