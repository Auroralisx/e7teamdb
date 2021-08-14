import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/interfaces/team';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teams!: Team[];

  constructor(private teamService: TeamService) { }

  ngOnInit(): void {
    this.getTeams();
  }

  private getTeams() {
    this.teamService
      .getTeamsList()
      .subscribe(data => {
        this.teams = data;
    })
  }
}
