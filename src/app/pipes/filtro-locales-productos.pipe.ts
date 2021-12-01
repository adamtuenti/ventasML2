import { Pipe, PipeTransform } from '@angular/core';

import { Locales } from '../models/locales';
import { ProductosLocales } from '../models/productosLocales';
import { Productos } from '../models/productos';

@Pipe({
  name: 'filtroLocalProductos'
})
export class FiltroLocalProductosPipe implements PipeTransform {
    
    transform(locales: Locales[], texto: string): Locales[] {
      if(texto.length === 0){return locales}
        texto=texto.toLocaleLowerCase()
        return locales.filter(locales => {
          return locales.Nombre.toLocaleLowerCase().includes(texto) ||
          locales.Descripcion.toLocaleLowerCase().includes(texto)
      });
  }

//   transform(locales: Locales[], cartilla: ProductosLocales[], texto: string): Locales[]{
//     if(texto.length === 0){return locales}
//       texto=texto.toLocaleLowerCase()
//       return locales.filter(locales => {
//         return locales.Nombre.toLocaleLowerCase().includes(texto) ||
//         locales.Descripcion.toLocaleLowerCase().includes(texto)
//       });
//     //   return cartilla.filter(cartilla => {
//     //     return cartilla.Titulo.toLocaleLowerCase().includes(texto)
//     //   });
//   }

  

} 