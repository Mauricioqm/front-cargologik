import {AfterViewInit, Component, Input, OnChanges, SimpleChanges, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Country } from 'src/app/interfaces/country';

@Component({
  selector: 'app-cards-counties',
  templateUrl: './cards-counties.component.html',
  styleUrls: ['./cards-counties.component.scss']
})
export class CardsCountiesComponent implements AfterViewInit, OnChanges{

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @Input() country!: Country[];
  displayedColumns: string[] = [ 'id','name', 'countryCode'];
  dataSource = new MatTableDataSource<Country>();

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes['country'].currentValue) {
      this.dataSource.data = this.country;
    }
    
  }
  
  ngOnInit() {
    console.log(this.country);
  }

  onAplicarFiltroItems(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}