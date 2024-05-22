import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Country } from 'src/app/interfaces/country';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  countries!: Country[];

  constructor
  (
    private countriesServices: CountriesService
  ) { }

  ngOnInit(): void {
    this.getCountries();
  }

  filter($event: any) {
    const busqueda: string = $event.target.value;
    // console.log({busqueda});
  }

  getCountries() {
    this.countriesServices.getCountries().subscribe({
      next: (res) => {
        // console.log(res);
        this.countries = res.map(
          ({ _id, name, countryCode}: Country) => {
            return {
              _id: _id,
              name: name,
              countryCode: countryCode
            }
          }
        );

      }, error: (error) => {
        console.log(error);
      }
    })
  }
}