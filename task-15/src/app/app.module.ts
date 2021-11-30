import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { MainComponent } from './component/main/main.component';
import { FormComponent } from './component/main/form/form.component';
import { IngredientsComponent } from './component/main/dish-list/ingredients/ingredients.component';
import { DishListComponent } from './component/main/dish-list/dish-list.component';
import { DishCardComponent } from './component/main/dish-list/dish-card/dish-card.component';
import { DishListDataService } from './component/main/services/dish-list-data/dish-list-data.service';
import { DishListService } from './component/main/services/dish-list/dish-list.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    FormComponent,
    IngredientsComponent,
    DishListComponent,
    DishCardComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    DishListDataService,
    DishListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
