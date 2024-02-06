import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './game/game.component';
import { ListaComponent } from './lista/lista.component';
import { PruebaMaterialComponent } from './prueba-material/prueba-material.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { Page404Component } from './page404/page404.component';

const routes: Routes = [
  // Si lo dejo vacio, entra por defecto en este
  {path: '', component: LandingPageComponent},
  
  // Cada una de las rutas que tendremos disponibles
  {path: 'piedra-papel-tijera', component: GameComponent},
  {path: 'lista', component: ListaComponent},
  {path: 'prueba-material', component:PruebaMaterialComponent},

  // LLama a una ruta que no existe, son dos *. Tiene que estar abajo del todo, si la pones arriba,
  // todas las paginas llevarían a Page404
  {path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
