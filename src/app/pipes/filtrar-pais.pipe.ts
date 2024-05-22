import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrarPais'
})
export class FiltrarPaisPipe implements PipeTransform {

  transform(item: any, searchValue?: string) {
    // console.log(item, searchValue);
    if (searchValue === undefined) {
      return item;
    }
    return item.filter((i: any) => {
      // console.log(i);
      
      let name = i.name
        .replace(/\s+/g, '')
        .toLowerCase()
        .includes(searchValue.toLocaleLowerCase().replace(/\s+/g, ''))
        ? i
        : '';
      return name;
    }); 
  }

}
