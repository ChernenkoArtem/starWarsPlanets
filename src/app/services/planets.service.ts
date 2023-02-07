import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Planet } from "./interfaces/planet.interface";
import { PersonInterface } from "./interfaces/person.interface";

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  constructor(private http: HttpClient) {

  }

  getPlanets(): Observable<Planet[]> {
    return this.http.get<Planet[]>('https://swapi.dev/api/planets');
  }

  getPerson(url: string): Observable<PersonInterface> {
    return this.http.get<PersonInterface>(url);
  }
}
