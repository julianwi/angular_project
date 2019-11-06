import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Model } from './model/city';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) { }

  data = undefined;
  locations: Array<Model.City>;

  getDummyData() {
    return [
      {
        id: 0,
        name: 'Kiel',
        note: '',
        loc: '0.00'
      },
      {
        id: 1,
        name: 'Hamburg',
        note: '',
      }
    ];
  }

  storeData(locations: Array<any>) {
    this.data = locations;
  }

  postData(id: number, data: Model.City) {
    console.log("posting");
    let str: string = JSON.stringify(data);
    console.log(str);
    return this.http.post('http://localhost/website/api.php?id='+id, str)
    .subscribe(
      null, // success path
      error => {console.log('error posting')} // error path;
    );
  }

  extractData(res: Response) {
    let body = res.json();
    return body || {};
  }
  handleErrorObservable (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  } 

  getData(): Observable<Model.City[]>{
    return <Observable<Model.City[]>>this.http.get('http://localhost/website/api.php');
    //return this.http.get('https://api.openbrewerydb.org/breweries');
  }
}
