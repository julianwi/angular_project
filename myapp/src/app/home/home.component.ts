import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SharedService } from '../shared.service';

import { Model } from '../model/city';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private service: SharedService) {
  }

  ngOnInit() {
    this.service.getData().subscribe(data => {
      this.locations = this.locations.concat(<Array<any>>data);
    })
  }

  count: number = 2;
  selectedLoc: Model.City = undefined;
  locations: Array<Model.City> = [];// = this.service.getDummyData();

  NewData = function () {
    if(this.selectedLoc != undefined) {
      alert('save first');
      return;
    }
    let nextId = 0;
    let used = true;
    while(used) {
      used = false;
      for(let loc of this.locations) {
        if(nextId == loc.id) {
          used = true;
          break;
        }
      }
      if(used)
        nextId++;
    }
    this.selectedLoc = {
        id: nextId,
        name: '',
        note: '',
        loc: '0.00'
    }
    this.locations.push(this.selectedLoc);
  }
  RemoveData = function (location) {
    if(location === this.selectedLoc)
      this.selectedLoc = undefined;
    var _index = this.locations.indexOf(location);
    this.locations.splice(_index, 1);
  };
  EditData = function (location) {
    if(this.selectedLoc == location)
      return;
    if(this.selectedLoc != undefined) {
      alert('save first');
      return;
    }
    this.selectedLoc = location;
  };
  MoveUp = function (location: Array<any>) {
    var _index = this.locations.indexOf(location);
    if(_index == 0)
      return;
    [this.locations[_index],this.locations[_index-1]] = [this.locations[_index-1],this.locations[_index]];
  };

  SaveData = function () {
    if(this.selectedLoc.name == '') {
      alert('name must not be empty');
      return;
    }
    this.service.postData(this.selectedLoc.id, this.selectedLoc);
    this.selectedLoc = undefined;
  }

  DataDirty(myForm: NgForm) {
    if(
      (myForm.controls.id != undefined && myForm.controls.id.dirty) ||
      (myForm.controls.name != undefined && myForm.controls.name.dirty) ||
      (myForm.controls.loc != undefined && myForm.controls.loc.dirty) ||
      (myForm.controls.note != undefined && myForm.controls.note.dirty)
      ) {
      return true;
    }
    else {
      return false;
    }
  }

}
