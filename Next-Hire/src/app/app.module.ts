import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CareerComponent } from './Career/Career.component';
import { HeaderComponent } from './Header/Header.component';
import { JobDescriptionComponent } from './JobDescription/JobDescription.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { JobApplicationComponent } from './JobApplication/JobApplication.component';
import { FooterComponent } from './Footer/Footer.component';


const appRoutes : Routes= [
  { path: 'career', component: CareerComponent},
  { path: 'jobDescription/:ID', component: JobDescriptionComponent},
  { path: 'jobApplication/:ID', component: JobApplicationComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    CareerComponent,
    HeaderComponent,
    JobDescriptionComponent,
    JobApplicationComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, 
    Ng2SearchPipeModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
