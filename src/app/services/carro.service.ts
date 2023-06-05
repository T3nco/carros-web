import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Carro } from '../models/carro';

@Injectable({
  providedIn: 'root'
})
export class CarroService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Carro[]> {
    return this.http.get<Carro[]>(environment.baseUrl + 'GetAllCarrosFunction');
  }
}
