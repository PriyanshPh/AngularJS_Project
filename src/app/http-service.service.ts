import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person } from './Person';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http:HttpClient) { }
  private url='http://localhost:9119/person/movie';

  getPosts(){
    return this.http.get(this.url);
  }
  postPerson(obj:Person){
    var headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(this.url, obj, {headers});
  }

  private configUrl='http://localhost:9119/person/movie/delete/';
  delete(id:any){
    return this.http.delete(this.configUrl +id);
  }
  deleteAll(){
    const configUrl='http://localhost:9119/person/movie/delete';
    return this.http.delete(configUrl);
  }
  getById(id:any){
    const configUrl='http://localhost:9119/person/movie/findbyid/';
    return this.http.get(configUrl +id);
  }
  getByName(name:any){
    const configUrl='http://localhost:9119/person/movie/PersonByName/';
    return this.http.get(configUrl +name);
}
  searchBygenres(genres:any){
  const configUrl='http://localhost:9119/person/movie/search/';
  return this.http.get(configUrl +genres);
}
  personUpdate(obj:Person){
    const url='http://localhost:9119/person/movie/update';
    var headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.put(url, obj, {headers});
  }
}
