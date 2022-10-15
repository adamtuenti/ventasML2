import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {NoLoginGuard} from './guards/no-login.guard';
import {AuthGuard} from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'carousel',
    pathMatch: 'full'
  },
  
  // {
  //   path: 'comentarios/:idLocal',
  //   loadChildren: () => import('./folder/comentarios/comentarios.module').then( m => m.ComentariosPageModule),
  //   canActivate:[AuthGuard]
  // },
  
  // {
  //   path: 'comentario-detalle/:id',
  //   loadChildren: () => import('./folder/comentario-detalle/comentario-detalle.module').then( m => m.ComentarioDetallePageModule),
  //   canActivate:[AuthGuard]
  // },
  // {
  //   path: 'premium-pendientes',
  //   loadChildren: () => import('./folder/premium-pendientes/premium-pendientes.module').then( m => m.PremiumPendientesPageModule),
  //   canActivate:[AuthGuard]
  // },
  // {
  //   path: 'premium-pendientes-detalle/:id',
  //   loadChildren: () => import('./folder/premium-pendientes-detalle/premium-pendientes-detalle.module').then( m => m.PremiumPendientesDetallePageModule),
  //   canActivate:[AuthGuard]
  // },
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
    path: 'categoria-crear-producto',
    loadChildren: () => import('./folder/categoria-crear-producto/categoria-crear-producto.module').then( m => m.CategoriaCrearProductoPageModule)
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
    path: 'crear-producto-local/:idLocal/:idPropietario',
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
  },
  {
    path: 'crear-publicaciones-generales',
    loadChildren: () => import('./folder/crear-publicaciones-generales/crear-publicaciones-generales.module').then( m => m.CrearPublicacionesGeneralesPageModule)
  },
  {
    path: 'perfil-update',
    loadChildren: () => import('./folder/perfil-update/perfil-update.module').then( m => m.PerfilUpdatePageModule)
  },
  {
    path: 'producto-local-editar/:idProducto/:idLocal/:idPropietario',
    loadChildren: () => import('./folder/producto-local-editar/producto-local-editar.module').then( m => m.ProductoLocalEditarPageModule)
  },
  {
    path: 'publicacion-detalle/:idPublicacion/:idUser',
    loadChildren: () => import('./folder/publicacion-detalle/publicacion-detalle.module').then( m => m.PublicacionDetallePageModule)
  },
  {
    path: 'servicios',
    loadChildren: () => import('./folder/servicios/servicios.module').then( m => m.ServiciosPageModule)
  },
  {
    path: 'servicio-detalle/:idServicio/:idUser',
    loadChildren: () => import('./folder/servicio-detalle/servicio-detalle.module').then( m => m.ServicioDetallePageModule)
  },
  {
    path: 'crear-servicio',
    loadChildren: () => import('./folder/crear-servicio/crear-servicio.module').then( m => m.CrearServicioPageModule)
  },
  {
    path: 'mis-productos',
    loadChildren: () => import('./folder/mis-productos/mis-productos.module').then( m => m.MisProductosPageModule)
  },
  {
    path: 'mis-locales',
    loadChildren: () => import('./folder/mis-locales/mis-locales.module').then( m => m.MisLocalesPageModule)
  },
  {
    path: 'mis-publicaciones',
    loadChildren: () => import('./folder/mis-publicaciones/mis-publicaciones.module').then( m => m.MisPublicacionesPageModule)
  },
  {
    path: 'editar-producto/:idProducto',
    loadChildren: () => import('./folder/editar-producto/editar-producto.module').then( m => m.EditarProductoPageModule)
  },
  {
    path: 'editar-local/:idLocal/:idPropietario',
    loadChildren: () => import('./folder/editar-local/editar-local.module').then( m => m.EditarLocalPageModule)
  },
  {
    path: 'mis-servicios',
    loadChildren: () => import('./folder/mis-servicios/mis-servicios.module').then( m => m.MisServiciosPageModule)
  },
  {
    path: 'productos-todos',
    loadChildren: () => import('./folder/productos-todos/productos-todos.module').then( m => m.ProductosTodosPageModule)
  },
  {
    path: 'crear-producto-perfil',
    loadChildren: () => import('./folder/crear-producto-perfil/crear-producto-perfil.module').then( m => m.CrearProductoPerfilPageModule)
  },
  {
    path: 'crear-local-perfil',
    loadChildren: () => import('./folder/crear-local-perfil/crear-local-perfil.module').then( m => m.CrearLocalPerfilPageModule)
  },
  {
    path: 'locales-todos',
    loadChildren: () => import('./folder/locales-todos/locales-todos.module').then( m => m.LocalesTodosPageModule)
  },
  {
    path: 'carousel',
    loadChildren: () => import('./folder/carousel/carousel.module').then( m => m.CarouselPageModule)
  },
  {
    path: 'promocion-locales',
    loadChildren: () => import('./folder/promocion-locales/promocion-locales.module').then( m => m.PromocionLocalesPageModule)
  },
  {
    path: 'anuncio-primero',
    loadChildren: () => import('./folder/anuncio-primero/anuncio-primero.module').then( m => m.AnuncioPrimeroPageModule)
  },
  {
    path: 'comunicacion-local/:idLocal/:idPropietario',
    loadChildren: () => import('./folder/comunicacion-local/comunicacion-local.module').then( m => m.ComunicacionLocalPageModule)
  },
  {
    path: 'crear-producto-todos',
    loadChildren: () => import('./folder/crear-producto-todos/crear-producto-todos.module').then( m => m.CrearProductoTodosPageModule)
  },
  {
    path: 'categoria-crear',
    loadChildren: () => import('./folder/categoria-crear/categoria-crear.module').then( m => m.CategoriaCrearPageModule)
  },
  {
    path: 'categoria-crear-producto',
    loadChildren: () => import('./folder/categoria-crear-producto/categoria-crear-producto.module').then( m => m.CategoriaCrearProductoPageModule)
  },
  {
    path: 'categoria-crear-local',
    loadChildren: () => import('./folder/categoria-crear-local/categoria-crear-local.module').then( m => m.CategoriaCrearLocalPageModule)
  },  {
    path: 'restaurantes',
    loadChildren: () => import('./folder/restaurantes/restaurantes.module').then( m => m.RestaurantesPageModule)
  }



















];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
