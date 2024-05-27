import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FruitDTO } from '../models/dto/FruitDTO';

@Injectable({
  providedIn: 'root'
})
export class FruitsService {

  constructor(private http: HttpClient) { }

  private readonly urlBackend = 'http://localhost:8080/api/fruits';

  getFruits(): Observable<FruitDTO[]>{
    return this.http.get<FruitDTO[]>(this.urlBackend);
  }

  addFruit(fruit: FruitDTO): Observable<String>{
    return this.http.post<String>(this.urlBackend, fruit);
  }
}
