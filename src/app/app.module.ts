import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {HttpClientModule } from '@angular/common/http';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { GraphiqueComponent } from './graphique/graphique.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CampagneService } from './service/CampagneService';
import { ComptePhishingService } from './service/ComptePhishingService';
import { CompteService } from './service/CompteService';
import { IdentifiantService } from './service/IdentifiantService';
import { RecapitulatifComponent } from './recapitulatif/recapitulatif.component';
import { AjoutCompteComponent } from './ajout-compte/ajout-compte.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    GraphiqueComponent,
    RecapitulatifComponent
    AjoutCompteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatInputModule,
    MatSelectModule,
    MatMenuModule,
    FormsModule,
    MatDividerModule,
    MatDividerModule,
    MatTabsModule,
    MatSnackBarModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NoopAnimationsModule,
    NgxChartsModule
  ],
  providers: [CampagneService,ComptePhishingService,CompteService,IdentifiantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
