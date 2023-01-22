import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Celebrite } from '../model/celebrite.model';
import { Monument } from '../model/monument.model';

@Injectable({
  providedIn: 'root'
})
export class EditService {
  private baseUrl = "http://localhost:8080/api";
  private headers = {'content-type': 'application/json'}
  constructor(private http: HttpClient) { }

  createMonument(monument: Monument, lieu_id: string): Observable<any>{
    return this.http.post(`${this.baseUrl}/createMonument/${lieu_id}`, monument, {'headers': this.headers});
  }

  addCelebrite(celebrites: Celebrite[], monument_id: string): Observable<any>{
    return this.http.post(`${this.baseUrl}/addCelebrite/${monument_id}`, celebrites, {'headers': this.headers});
  }

  createCelebrite(celebrite: Celebrite): Observable<any>{
    return this.http.post(`${this.baseUrl}/createCelebrite`, celebrite, {'headers': this.headers});
  }

  deleteCelebrite(celebrite_id: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/deleteCelebriteById/${celebrite_id}`, {'headers': this.headers})
  }

  deleteMonument(monument_id: string): Observable<any>{
    return this.http.delete(`${this.baseUrl}/deleteMonument/${monument_id}`);
  }


}
