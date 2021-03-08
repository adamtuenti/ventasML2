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
    path: 'comentarios/:idLocal',
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
    path: 'publicaciones',
    loadChildren: () => import('./folder/publicaciones/publicaciones.module').then( m => m.PublicacionesPageModule)
  },
  {
    path: 'categorias-locales',
    loadChildren: () => import('./folder/categorias-locales/categorias-locales.module').then( m => m.CategoriasLocalesPageModule)
  }, 
  {
    path: 'producto-detalle/:id/:vendedor',
    loadChildren: () => import('./folder/producto-detalle/producto-detalle.module').then( m => m.ProductoDetallePageModule)
  },
  {
    path: 'registrar',
    loadChildren: () => import('./folder/registrar/registrar.module').then( m => m.RegistrarPageModule)
  },
  {
    path: 'crear-producto/:idCategoria',
    loadChildren: () => import('./folder/crear-producto/crear-producto.module').then( m => m.CrearProductoPageModule)
  },
  {
    path: 'locales/:id',
    loadChildren: () => import('./folder/locales/locales.module').then( m => m.LocalesPageModule)
  },
  {
    path: 'crear-local/:id',
    loadChildren: () => import('./folder/crear-local/crear-local.module').then( m => m.CrearLocalPageModule)
  },
  {
    path: 'crear-producto-local/:idLocal',
    loadChildren: () => import('./folder/crear-producto-local/crear-producto-local.module').then( m => m.CrearProductoLocalPageModule)
  },
  {
    path: 'productos-locales/:idLocal/:idPropietario',
    loadChildren: () => import('./folder/productos-locales/productos-locales.module').then( m => m.ProductosLocalesPageModule)
  },
  {
    path: 'comentarios-local/:idLocal/:idPropietario',
    loadChildren: () => import('./folder/comentarios-local/comentarios-local.module').then( m => m.ComentariosLocalPageModule)
  },
  {
    path: 'detalle-local/:idLocal/:idPropietario',
    loadChildren: () => import('./folder/detalle-local/detalle-local.module').then( m => m.DetalleLocalPageModule)
  }






];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
