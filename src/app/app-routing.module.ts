import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { IntroComponent } from './components/intro/intro.component';

const routes: Routes = [
  {path: '',component: IntroComponent},  
  {path: 'form', component: FormComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
