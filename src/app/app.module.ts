import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';

import {
  MatIconModule,
  MatToolbarModule,
  MatBadgeModule,
  MatButtonModule,
  MatCheckboxModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatPaginatorModule,
  MatRadioModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatTooltipModule,
  MatDialogModule,
  MAT_RIPPLE_GLOBAL_OPTIONS,
} from '@angular/material';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { HomeComponent } from './views/home/home.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { AppRoutingModule } from './app.routing';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatInputModule,
    MatTabsModule,
    MatRadioModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatSliderModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
  ],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatTabsModule,
    MatRadioModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatSliderModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
  ],
  declarations: [AppComponent, LoginComponent, RegisterComponent, HomeComponent, DashboardComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
