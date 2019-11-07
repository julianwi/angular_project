import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Model } from './model/city';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) { }

  locations: Array<Model.City>;

  getData(): Observable<Model.City[]>{
    return <Observable<Model.City[]>>this.http.get('http://localhost/website/api.php?action=read');
  }

  updateData(id: number, data: Model.City) {
    let str: string = JSON.stringify(data);
    return this.http.post('http://localhost/website/api.php?action=update&id='+id, str)
    .subscribe(
      null, // success path
      error => {console.log('error posting')} // error path;
    );
  }

  createData(id: number, data: Model.City) {
    let str: string = JSON.stringify(data);
    return this.http.post('http://localhost/website/api.php?action=create&id='+id, str)
    .subscribe(
      null, // success path
      error => {console.log('error posting')} // error path;
    );
  }

  deleteData(id: number, data: Model.City) {
    let str: string = JSON.stringify(data);
    return this.http.post('http://localhost/website/api.php?action=delete&id='+id, str)
    .subscribe(
      null, // success path
      error => {console.log('error posting')} // error path;
    );
  }
}
