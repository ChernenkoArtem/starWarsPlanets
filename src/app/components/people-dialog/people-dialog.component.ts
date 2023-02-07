import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Planet } from "../../services/interfaces/planet.interface";
import { first, forkJoin } from "rxjs";
import { PlanetsService } from "../../services/planets.service";
import { PersonInterface } from "../../services/interfaces/person.interface";

@Component({
  selector: 'app-people-dialog',
  templateUrl: './people-dialog.component.html',
  styleUrls: ['./people-dialog.component.scss']
})
export class PeopleDialogComponent implements OnInit{
  personList: PersonInterface[] = [];
  isNoPerson = true;
  constructor( private planetsService: PlanetsService, @Inject(MAT_DIALOG_DATA) protected data: Planet) {}

  ngOnInit(): void {
    this.getResidentsList();
  }


  getResidentsList(): void {
    const residentsUrls = this.data.residents.map((resident) => this.planetsService.getPerson(resident) )
    if (residentsUrls.length > 1) {
      forkJoin(residentsUrls).pipe(first()).subscribe((people)=> {
        this.personList = people;
      })
    } else {
      this.isNoPerson = false;
    }

  }
}
