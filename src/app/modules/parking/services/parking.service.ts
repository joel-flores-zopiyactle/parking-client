import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FilterParking, Parking } from '../interfaces/parking.interface';

@Injectable({
  providedIn: 'root'
})
export class ParkingService {
  baseURL:string = 'http://localhost:3000/api/v1/parking' 
  parkings!:Parking[]

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http:HttpClient) { }

  getAllParkings():Observable<Parking[]> {
    return this.http.get<Parking[]>(`${this.baseURL}`)
  }
 
  getAllParkingsFilter(filter?:FilterParking):Observable<Parking[]> {
    return this.http.get<Parking[]>(`${this.baseURL}?type=${filter?.type}&maxPrice=${filter?.maxPrice}&minPrice=${filter?.minPrice}&amenities=${filter?.amenities}`)
  }

  postParking(parking:Parking):Observable<Parking> {
    return this.http.post<Parking>(`${this.baseURL}`, parking, this.httpOptions)
  }

  getParking(id:string):Observable<Parking> {
    return this.http.get<Parking>(`${this.baseURL}/${id}`)
  }
  
  deleteParking(id:string):Observable<any> {
    return this.http.delete<any>(`${this.baseURL}/${id}`)
  }
}
