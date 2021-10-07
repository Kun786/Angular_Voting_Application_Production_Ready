import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NamesComponent } from './ComponentsPractice/user-list/names/names.component';
import { UserListComponent } from './ComponentsPractice/user-list/user-list.component';
import { ApexChartsComponent } from './ComponentsPractice/apex-charts/apex-charts.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChangeBackGroundColorDirective } from './CustomDirective/ChangeBackGroundColor/change-back-ground-color.directive';
import { ChangeBorderColorDirective } from './CustomDirective/ChangeBorderColor/change-border-color.directive';
@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    NamesComponent,
    ApexChartsComponent,
    ChangeBackGroundColorDirective,
    ChangeBorderColorDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgApexchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
