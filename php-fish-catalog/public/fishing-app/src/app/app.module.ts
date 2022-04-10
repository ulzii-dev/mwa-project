import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateRef } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FishesComponent } from './fishes/fishes.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { EditFishComponent } from './edit-fish/edit-fish.component';
import { AddFishComponent } from './add-fish/add-fish.component';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FishesComponent,
    NavComponent,
    FooterComponent,
    EditFishComponent,
    AddFishComponent,
    ErrorPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'fish/:fishId',
        component: EditFishComponent,
      },
      {
        path: 'addFish',
        component: AddFishComponent,
      },
      {
        path: 'fishes',
        component: FishesComponent,
      },
      {
        path: '**',
        component: ErrorPageComponent,
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
