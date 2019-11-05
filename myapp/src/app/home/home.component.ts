import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  count: number = 0;
  selectedLoc = {
    id: undefined,
    name: 'name',
    note: 'note',
    loc: '0.00'
  };
  locations = [
    {
      id: this.count++,
      name: 'Kiel',
      note: '',
      loc: '0.00'
    },
    {
      id: this.count++,
      name: 'Hamburg',
      note: '',
    }
  ];

  NewData = function () {
    this.selectedLoc = {
        id: this.count++,
        name: '',
        note: '',
        loc: '0.00'
    }
    this.locations.push(this.selectedLoc);
  }
  RemoveData = function (location) {
    if(location === this.selectedLoc)
      this.selectedLoc.id = undefined;
    var _index = this.locations.indexOf(location);
    this.locations.splice(_index, 1);
  };
  EditData = function (location) {
    this.selectedLoc = location;
  };
  MoveUp = function (location) {
    var _index = this.locations.indexOf(location);
    if(_index == 0)
        return;
    [this.locations[_index],this.locations[_index-1]] = [this.locations[_index-1],this.locations[_index]];
  };

  SaveData = function () {
    this.selectedLoc = {
      id: undefined,
      name: 'name',
      note: 'note',
      loc: '0.00'
    };
  }

  constructor() {
  }

  ngOnInit() {
  }

}
