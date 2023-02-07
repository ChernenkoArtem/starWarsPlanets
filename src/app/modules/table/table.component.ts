import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Planet } from "../../services/interfaces/planet.interface";
import { PeopleDialogComponent } from "../../components/people-dialog/people-dialog.component";
import { MatDialog } from "@angular/material/dialog";
import { AppColumn } from "./_data/app-column.interface";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TableComponent<T> implements OnInit{
    showColumns: Array<string> = [];
    @Input() tableColumns: Array<AppColumn> = [];
    @Input() dataSource: T[] = [];
    constructor(private dialog: MatDialog) {
    }

    ngOnInit() {
      this.showColumns = this.tableColumns.map((column) => column.field);
    }

    trackByColumnField(index: number, item: AppColumn) {
      return item.field;
    }

    rowClick(planet: Planet) {
      this.dialog.open(PeopleDialogComponent,{
        data: planet
      });
  }
}
