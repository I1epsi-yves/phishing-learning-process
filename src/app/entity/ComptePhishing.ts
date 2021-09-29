export class ComptePhishing {

    private comptePhishing_kn:number;
    private email:string;
    private motDePasse:string;

    public constructor(comptePhishing_kn:number, email:string, motDePasse:string) {
        this.comptePhishing_kn = comptePhishing_kn;
        this.email = email;
        this.motDePasse = motDePasse;
    }

    public ComptePhishing() {
    }

    public getComptePhishing_kn():number {
        return this.comptePhishing_kn;
    }

    public setComptePhishing_kn(comptePhishing_kn:number) {
        this.comptePhishing_kn = comptePhishing_kn;
    }

    public getEmail():string {
        return this.email;
    }

    public setEmail(email:string) {
        this.email = email;
    }

    public getMotDePasse():string {
        return this.motDePasse;
    }

    public setMotDePasse( motDePasse:string) {
        this.motDePasse = motDePasse;
    }
}
