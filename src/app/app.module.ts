import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PhoneContactComponent } from './components/phone.contact/phone.contact.component';
import { PhoneContactListComponent } from './components/phone.contact.list/phone.contact.list.component';

import { MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, MatInputModule, MatSelectModule, MatOptionModule, MatCheckboxModule, MatButtonModule} from '@angular/material'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PersonSeervice } from './services/person.service';

@NgModule({
  declarations: [
    AppComponent,
    PhoneContactComponent,
    PhoneContactListComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatOptionModule,
    MatCheckboxModule,
    MatButtonModule
  ],
  providers: [
    PersonSeervice
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
