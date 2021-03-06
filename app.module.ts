import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorLoginComponent } from './doctor-login/doctor-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PatientLoginComponent } from './patient-login/patient-login.component';
import { DoctorHomeComponent } from './doctor-home/doctor-home.component';
import { PatientHomeComponent } from './patient-home/patient-home.component';
import { PatientOnboardingComponent } from './patient-onboarding/patient-onboarding.component';
import { PatientConsentComponent } from './patient-consent/patient-consent.component';
import { DoctorOptionComponent } from './doctor-option/doctor-option.component';
import { DiagnosisComponent } from './diagnosis/diagnosis.component';
import { HistoryComponent } from './history/history.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DoctorLoginComponent,
    PatientLoginComponent,
    DoctorHomeComponent,
    PatientHomeComponent,
    PatientOnboardingComponent,
    PatientConsentComponent,
    DoctorOptionComponent,
    DiagnosisComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
