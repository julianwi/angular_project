import { Component, OnInit, Input } from '@angular/core';
import { Model } from '../model/city';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  @Input() city: Model.City;

  constructor() { }

  ngOnInit() {
  }

}
