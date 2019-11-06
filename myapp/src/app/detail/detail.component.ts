import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { SharedService } from '../shared.service';
import { Model } from '../model/city';

export class Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  locations: Model.City[];
  forecasts: object[] = [];

  constructor(private wService: WeatherService, private lService: SharedService) { }

  ngOnInit() {
    this.lService.getData().subscribe(location => {
      this.locations = location;
      for(let loc of location) {
        this.wService.getForecastCity(loc.name).subscribe(data => {
          this.forecasts[loc.name] = data;
        });
      }
    });
  }

}
