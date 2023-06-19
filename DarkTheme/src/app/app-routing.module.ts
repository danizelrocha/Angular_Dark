import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Pages
import { HomeComponent } from './core/pages/components/home/home.component';
import { SobreComponent } from './core/pages/components/sobre/sobre.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path:'sobre',
    component: SobreComponent,
    title: 'Sobre',
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
