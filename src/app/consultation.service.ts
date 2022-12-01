import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lieu } from './model/lieu';

@Injectable({
  providedIn: 'root'
})
export class ConsultationService {
  private baseUrl = "http://localhost:8080/api";

  constructor(private http: HttpClient) { }

  getLieux(): Observable<Lieu[]>{
    return this.http.get<Lieu[]>(`${this.baseUrl}/lieux`)
  }
}
