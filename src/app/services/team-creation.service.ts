import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from '../interfaces/team';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class TeamService {
  private apiUrl = 'http://localhost:8080/teams';

  constructor(private http:HttpClient) { }

  getTeamsList(): Observable<Team[]> {
    return this.http.get<Team[]>(`${this.apiUrl}/all`);
  }
}
