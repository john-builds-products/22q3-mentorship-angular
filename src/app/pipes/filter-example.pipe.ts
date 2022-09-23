import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterExample'
})
export class FilterExamplePipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      return it.jobTitle.toLocaleLowerCase().includes(searchText);
    });
  }
}

@Pipe({
  name: 'filterByIndustry'
})
export class FilterByIndustryExamplePipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      return it.industry.toLocaleLowerCase().includes(searchText);
    });
  }
}

@Pipe({
  name: 'filterBySector'
})
export class FilterBySectorPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      return it.sector.toLocaleLowerCase().includes(searchText);
    });
  }
}
