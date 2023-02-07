import { Component, OnInit } from '@angular/core';
import { PlanetsService } from "./services/planets.service";
import { Planet } from "./services/interfaces/planet.interface";
import { first } from "rxjs";
import { AppColumn } from "./modules/table/_data/app-column.interface";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  planetsList: Planet[] = [];
  tableData:  Planet[] = [];
  tableColumns: AppColumn[] = [];
  constructor(private planetsService: PlanetsService) {
  }



  ngOnInit() {
    this.initTableColumns();

    this.planetsService.getPlanets().pipe(first()).subscribe((planets)=> {
      this.planetsList = planets;
      this.tableData = planets;
    })
  }

  setValueToTable(planet: Planet) {
    this.tableData = [planet];
  }

  initTableColumns() {
    this.tableColumns = [
      {
        id: 1,
        name: 'Name',
        field: 'name'
      },
      {
        id: 2,
        name: 'Diameter of planet',
        field: 'diameter'
      },
      {
        id: 3,
        name: 'Climate',
        field: 'climate'
      },
      {
        id: 4,
        name: 'Population',
        field: 'population'
      }
    ]
  }
}
