import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
   headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');

  constructor(private _http:HttpClient ) { }
  getData(){
    return this._http.get('https://taskapi-ludean.onrender.com/api/alpha/tasks',{ 'headers': this.headers });
  }
  postData(data: any): Observable<any>{
    return this._http.post<any>('https://taskapi-ludean.onrender.com/api/alpha/tasks',data,{ 'headers': this.headers });
  }
  updateData(id:any,data: any): Observable<any>{
    return this._http.put<any>('https://taskapi-ludean.onrender.com/api/alpha/tasks/'+id,data,{ 'headers': this.headers });
  }
}
