export class Identifiant {
    private identifiant_kn:number;
    private nom:string;
    private motDePasse:string;

    public constructor(identifiant_kn:number, nom:string, motDePasse:string) {
        this.identifiant_kn = identifiant_kn;
        this.nom = nom;
        this.motDePasse = motDePasse;
    }

    public Identifiant() {
    }

    public getIdentifiant_kn():number {
        return this.identifiant_kn;
    }

    public setIdentifiant_kn(identifiant_kn:number) {
        this.identifiant_kn = identifiant_kn;
    }

    public getIdentifiant():string {
        return this.nom;
    }

    public setIdentifiant(nom:string) {
        this.nom = nom;
    }

    public getMotDePasse():string {
        return this.motDePasse;
    }

    public setMotDePasse(motDePasse:string) {
        this.motDePasse = motDePasse;
    }
}
