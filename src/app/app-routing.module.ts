import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  { path: 'previsao', loadChildren: () => import('./previsao/previsao.module').then(m => m.PrevisaoPageModule) },
  { path: 'cidades', loadChildren: () => import('./cidades/cidades.module').then(m => m.CidadesPageModule) },
  { path: 'configuracoes', loadChildren: () => import('./configuracoes/configuracoes.module').then(m => m.ConfiguracoesPageModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}