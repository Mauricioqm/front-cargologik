import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  url = environment.apiUrl;
  constructor(    
    private httpClient: HttpClient
  ) { }

  getCountries(): Observable<any> {
    return this.httpClient.get(`${this.url}countries`);
  }
}
