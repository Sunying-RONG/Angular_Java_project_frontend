import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from '../model/admin.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  // private baseUrl = "http://localhost:8080/api";
  private baseUrl = "https://java-avance-backend.agreeablebush-b953dea1.eastus.azurecontainerapps.io/api";

  constructor(private http: HttpClient) { }

  getAdmin(): Observable<Admin[]>{
    return this.http.get<Admin[]>(`${this.baseUrl}/admins`)
  }

  adminLogin(admin:Admin): Observable<any> {
    const headers = {'content-type': 'application/json'}
    return this.http.post(`${this.baseUrl}/adminLogin`, admin, {'headers': headers});
  } 
}
