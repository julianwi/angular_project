import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { WeatherService } from '../weather.service';

class fcast {
  list: {
    weather,
    main,
  }[]
}

@Component({
  selector: 'app-citydetail',
  templateUrl: './citydetail.component.html',
  styleUrls: ['./citydetail.component.scss']
})
export class CitydetailComponent implements OnInit, OnChanges {

  displayedCity: string;
  @Input() city: string;
  data: fcast;

  constructor(private service: WeatherService) { }

  ngOnInit() {
    this.displayedCity = this.city;
    this.service.getDetailForecast(this.city).subscribe(data => {
      this.data = <fcast>data;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.displayedCity != this.city) {
      this.displayedCity = this.city;
      this.service.getDetailForecast(this.city).subscribe(data => {
        this.data = <fcast>data;
      });
    }
  }

}
