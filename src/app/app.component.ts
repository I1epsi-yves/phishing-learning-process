import { HttpHeaders } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Compte } from './ajout-compte/Compte';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  listeDestinataire:string[]=[];
  title = 'phishing-learning-process';
  http: any;
  compte:Compte[]=[];

  ajout(d:string):void{
    this.listeDestinataire.push(d);
  }

  onSubmit(contactForm: NgForm) {
    if (contactForm.valid) {
      const email = contactForm.value;
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.http.post('https://formspree.io/asdlf7asdf',
        { name: email.name, replyto: email.email, message: email.messages },
        { 'headers': headers }).subscribe(
          (          response: any) => {
            console.log(response);
          }
        );
    }
  }

  newComptes(c:Compte[]):void{
    this.compte=c;
    for(let e of c){
    console.log(e.mail)
    }
  }
}
