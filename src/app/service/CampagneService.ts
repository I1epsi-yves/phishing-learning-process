import { Campagne } from "../entity/Campagne";
import { HttpClient, HttpHeaders } from '@angular/common/http';
export class CampagneService
{
    constructor(private http: HttpClient){}

    public getCampagnes():Campagne[]
    {
        let listeCampagnes:Campagne[]=[];
        this.http.get<any>('http://localhost/campagne/getAll')
        .subscribe((response) => {
            response.forEach((element: { campagne_kn: number; comptePhishing_kn: number; message: string; objet: string; dateLancement: Date; }) => {
                listeCampagnes.push(new Campagne(element.campagne_kn,element.comptePhishing_kn,element.message,element.objet,element.dateLancement));
            });
        },
        (error) => {
            console.log('Erreur ! : ' + error);
        }
        );
        return listeCampagnes;
    }

    public insertCampagne(campagne:Campagne)
    {
        this.http.post<any>('http://localhost/campagne/insert',campagne)
        .subscribe((response) => {
            console.log('Succès ! : ' + response);
        },
        (error) => {
            console.log('Erreur ! : ' + error);
        }
        );
    }

    public deleteCampagne(campagne:Campagne)
    {
        this.http.post<any>('http://localhost/campagne/delete',campagne)
        .subscribe((response) => {
            console.log('Succès ! : ' + response);
        },
        (error) => {
            console.log('Erreur ! : ' + error);
        }
        );
    }
}


