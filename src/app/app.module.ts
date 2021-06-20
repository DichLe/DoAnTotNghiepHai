import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/trang-chu/header/header.component';
import { FooterComponent } from './layouts/trang-chu/footer/footer.component';
import { Router, RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {path:'',loadChildren:()=>import('./trang-chu/trang-chu.module').then(x=>x.TrangChuModule)},
  // {path:'admin'},
  {path:'**'}
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule, [RouterModule.forRoot(routes)]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
