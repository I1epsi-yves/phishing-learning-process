export class Campagne
{
    private campagne_kn:number;
    private comptePhishing_kn:number;
    private message:string;
    private objet:string;
    private dateLancement:Date

    public constructor( campagne_kn:number, comptePhishing_kn:number, message:string, objet:string, dateLancement:Date) {
        this.campagne_kn = campagne_kn;
        this.comptePhishing_kn = comptePhishing_kn;
        this.message = message;
        this.objet = objet;
        this.dateLancement = dateLancement;
    }


    public getCampagne_kn():number {
        return this.campagne_kn;
    }

    public setCampagne_kn(campagne_kn:number) {
        this.campagne_kn = campagne_kn;
    }

    public getComptePhishing_kn():number {
        return this.comptePhishing_kn;
    }

    public setComptePhishing_kn(comptePhishing_kn:number) {
        this.comptePhishing_kn = comptePhishing_kn;
    }

    public getMessage():string {
        return this.message;
    }

    public setMessage(message:string) {
        this.message = message;
    }

    public getObjet():string {
        return this.objet;
    }

    public setObjet(objet:string) {
        this.objet = objet;
    }

    public getDateLancement():Date {
        return this.dateLancement;
    }

    public setDateLancement(dateLancement:Date) {
        this.dateLancement = dateLancement;
    }
}
