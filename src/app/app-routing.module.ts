import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {NoLoginGuard} from './guards/no-login.guard';
import {AuthGuard} from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  
  {
    path: 'comentarios',
    loadChildren: () => import('./folder/comentarios/comentarios.module').then( m => m.ComentariosPageModule),
    canActivate:[AuthGuard]
  },
  
  {
    path: 'comentario-detalle/:id',
    loadChildren: () => import('./folder/comentario-detalle/comentario-detalle.module').then( m => m.ComentarioDetallePageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'premium-pendientes',
    loadChildren: () => import('./folder/premium-pendientes/premium-pendientes.module').then( m => m.PremiumPendientesPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'premium-pendientes-detalle/:id',
    loadChildren: () => import('./folder/premium-pendientes-detalle/premium-pendientes-detalle.module').then( m => m.PremiumPendientesDetallePageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./folder/login/login.module').then( m => m.LoginPageModule),
    canActivate:[NoLoginGuard]
  },

  {
    path: 'usuarios-detalle/:id',
    loadChildren: () => import('./folder/usuarios-detalle/usuarios-detalle.module').then( m => m.UsuariosDetallePageModule)
  },
  
  {
    path: 'categorias',
    loadChildren: () => import('./folder/categorias/categorias.module').then( m => m.CategoriasPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./folder/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'productos/:categoria',
    loadChildren: () => import('./folder/productos/productos.module').then( m => m.ProductosPageModule)
  },
  {
    path: 'producto-detalle',
    loadChildren: () => import('./folder/producto-detalle/producto-detalle.module').then( m => m.ProductoDetallePageModule)
  },
  {
    path: 'publicaciones',
    loadChildren: () => import('./folder/publicaciones/publicaciones.module').then( m => m.PublicacionesPageModule)
  },  {
    path: 'categorias-locales',
    loadChildren: () => import('./folder/categorias-locales/categorias-locales.module').then( m => m.CategoriasLocalesPageModule)
  },
  {
    path: 'header',
    loadChildren: () => import('./folder/header/header.module').then( m => m.HeaderPageModule)
  },
  {
    path: 'detalle-producto',
    loadChildren: () => import('./folder/detalle-producto/detalle-producto.module').then( m => m.DetalleProductoPageModule)
  }







];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
