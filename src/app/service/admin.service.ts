import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lieu } from '../model/lieu.model';
import { Admin } from '../model/admin.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private baseUrl = "http://localhost:8080/api";

  constructor(private http: HttpClient) { }

  getAdmin(): Observable<Admin[]>{
    return this.http.get<Admin[]>(`${this.baseUrl}/admins`)
  }
}
