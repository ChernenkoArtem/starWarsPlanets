import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Planet } from "../../services/interfaces/planet.interface";
import { MatSelectChange } from "@angular/material/select";

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
export class SelectorComponent {
  selectedValue!: Planet;

  @Input() list: Array<Planet> = [];
  @Input()
  set value(value: Planet) {
    this.selectedValue = value;
  }
  // todo better create ControlValueAccessor
  @Output() selectValue: EventEmitter<Planet> = new EventEmitter();


  selected(event: MatSelectChange) {
    const selectedPlanet: Planet = event.value;
    this.selectValue.emit(selectedPlanet);
  }
}
