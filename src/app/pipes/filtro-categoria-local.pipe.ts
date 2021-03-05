import { Pipe, PipeTransform } from '@angular/core';
import { CategoriasLocales } from '../models/categoriasLocales';

@Pipe({
  name: 'filtroCategoriaLocal'
})
export class FiltroCategoriaLocalPipe implements PipeTransform {

  transform(categoriasLocales: CategoriasLocales[], texto: string): CategoriasLocales[] {
    if(texto.length === 0){return categoriasLocales}
      texto=texto.toLocaleLowerCase()
      return categoriasLocales.filter(categoriaLocal => {
        return categoriaLocal.Nombre.toLocaleLowerCase().includes(texto);
      });
  }

}