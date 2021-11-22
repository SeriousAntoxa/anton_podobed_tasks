import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { MainComponent } from './component/main/main.component';
import { FormComponent } from './component/main/dish-list/form/form.component';
import { IngredientsComponent } from './component/main/dish-list/ingredients/ingredients.component';
import { DishListComponent } from './component/main/dish-list/dish-list.component';
import { DishComponent } from './component/main/dish-list/dish/dish.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    FormComponent,
    IngredientsComponent,
    DishListComponent,
    DishComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
