import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Compte } from '../ajout-compte/Compte';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  form : FormGroup ;
  objet: FormControl = new FormControl("", [Validators.required]);
  email: FormControl = new FormControl();
  //listEmail:string[]=[];
  //compte: FormControl = new FormControl("");
  @Input() comptes:Compte[]=[];
  message: FormControl = new FormControl("", [Validators.required, Validators.maxLength(256)]);
  honeypot: FormControl = new FormControl(""); // we will use this to prevent spam
  submitted: boolean = false; // show and hide the success message
  isLoading: boolean = false; // disable the submit button if we're loading
  responseMessage: string=""; // the response message to show to the user
  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.form = this.formBuilder.group({
      email: this.email,
      objet: this.objet,
      message: this.message,
      honeypot: this.honeypot
    });
  }
  ngOnInit(): void {
  }

  /*ajout(d:string):void{
    this.listEmail.push(d);
  }*/

  onSubmit() {
    if (this.form.status === "VALID" && this.honeypot.value === "" ) {
        for(let c of this.comptes){
        this.form.disable(); // disable the form if it's valid to disable multiple submissions
        var formData: any = new FormData();
        console.log("yeeeess"+c.mail);
        formData.append("email", c.mail);
        formData.append("objet", this.form.value["objet"]);
        formData.append("message", this.form.value["message"]);

        this.isLoading = true; // sending the post request async so it's in progress
        this.submitted = false; // hide the response message on multiple submits
        this.http.post("https://script.google.com/macros/s/AKfycbxIx2usRL7VEr0OPCAnUjmhVcyC4eiqOYEu95cLEvaevIsoRJpzb3WUz9qV8wDYwi2D/exec", formData).subscribe(
          (response) => {
            // choose the response message
            if (response) {
              this.responseMessage = "Thanks for the message! I'll get back to you soon!";
            } else {
              this.responseMessage = "Oops! Something went wrong... Reload the page and try again.";
            }
            this.form.enable(); // re enable the form after a success
            this.submitted = true; // show the response message
            this.isLoading = false; // re enable the submit button
            console.log(response);
          },
          (error) => {
            this.responseMessage = "Oops! An error occurred... Reload the page and try again.";
            this.form.enable(); // re enable the form after a success
            this.submitted = true; // show the response message
            this.isLoading = false; // re enable the submit button
            console.log(error);
          }
        );
    }
  }
  }
}
