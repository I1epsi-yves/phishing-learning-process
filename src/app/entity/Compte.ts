export class Compte {
    private compte_kn:number;
    private campagne_kn:number;
    private etat_kn:number;
    private prenom:string;
    private nom:string;
    private pole:string;
    private email:string;
    private compteur:number;


    public constructor(compte_kn:number, campagne_kn:number, etat_kn:number, prenom:string, nom:string, pole:string, email:string, compteur:number) {
        this.compte_kn = compte_kn;
        this.campagne_kn = campagne_kn;
        this.etat_kn = etat_kn;
        this.prenom = prenom;
        this.nom = nom;
        this.pole = pole;
        this.email = email;
        this.compteur = compteur;
    }

    public Compte() {
    }

    public getCompte_kn():number {
        return this.compte_kn;
    }

    public setCompte_kn(compte_kn:number) {
        this.compte_kn = compte_kn;
    }

    public getCampagne_kn():number {
        return this.campagne_kn;
    }

    public setCampagne_kn(campagne_kn:number) {
        this.campagne_kn = campagne_kn;
    }

    public getEtat_kn() {
        return this.etat_kn;
    }

    public setEtat_kn(etat_kn:number) {
        this.etat_kn = etat_kn;
    }

    public getPrenom():string {
        return this.prenom;
    }

    public setPrenom(prenom:string) {
        this.prenom = prenom;
    }

    public getNom():string {
        return this.nom;
    }

    public setNom(nom:string) {
        this.nom = nom;
    }

    public getPole():string {
        return this.pole;
    }

    public setPole(pole:string) {
        this.pole = pole;
    }

    public getEmail():string {
        return this.email;
    }

    public setEmail(email:string) {
        this.email = email;
    }

    public getCompteur():number {
        return this.compteur;
    }

    public setCompteur(compteur:number) {
        this.compteur = compteur;
    }
}
