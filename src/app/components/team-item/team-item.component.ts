import { Component, Input, OnInit } from '@angular/core';
import { Team } from 'src/app/interfaces/team';

@Component({
  selector: 'app-team-item',
  templateUrl: './team-item.component.html',
  styleUrls: ['./team-item.component.css']
})
export class TeamItemComponent implements OnInit {
  @Input() team!: Team;


  constructor() { }

  ngOnInit(): void {
  }

}
