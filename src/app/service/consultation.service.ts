import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lieu } from '../model/lieu.model';
import { Departement } from '../model/departement.model';
import { Monument } from '../model/monument.model';
import { Celebrite } from '../model/celebrite.model';

@Injectable({
  providedIn: 'root'
})
export class ConsultationService {
  private baseUrl = "http://localhost:8080/api";

  constructor(private http: HttpClient) { }

  getDep(): Observable<Departement[]>{
    return this.http.get<Departement[]>(`${this.baseUrl}/departements`)
  }

  getLieux(): Observable<Lieu[]>{
    return this.http.get<Lieu[]>(`${this.baseUrl}/lieux`)
  }
  
  getLieuById(lieu_id: string): Observable<Lieu>{
    return this.http.get<Lieu>(`${this.baseUrl}/lieuById?lieu_id=${lieu_id}`)
  }

  getLieuByDepId(depId: any): Observable<Lieu[]>{
    return this.http.get<Lieu[]>(`${this.baseUrl}/lieuOfDepartement?id=${depId}`)
  }

  getMonuments(): Observable<Monument[]>{
    return this.http.get<Monument[]>(`${this.baseUrl}/monuments`)
  }

  getMonumentById(monumentId: any): Observable<Monument>{
    return this.http.get<Monument>(`${this.baseUrl}/monumentById?id=${monumentId}`)
  }

  getMonumentsByLieuId(lieuId: any): Observable<Monument[]>{
    return this.http.get<Monument[]>(`${this.baseUrl}/monumentsOfLieu?id=${lieuId}`)
  }

  calculeMonumentDistance(lat1: number, lng1: number, lat2: number, lng2: number): Observable<number>{
    return this.http.get<number>(`${this.baseUrl}/calculeDistance?lat1=${lat1}&lng1=${lng1}&lat2=${lat2}&lng2=${lng2}`)
  }

  getCelebrites(): Observable<Celebrite[]>{
    return this.http.get<Celebrite[]>(`${this.baseUrl}/celebrites`)
  }

  getCelebritesByMonumentId(monumentId: any): Observable<Celebrite[]>{
    return this.http.get<Celebrite[]>(`${this.baseUrl}/celebriteListOfMonument?id=${monumentId}`)
  }
  

}
