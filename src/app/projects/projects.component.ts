import { Component, OnInit } from '@angular/core';
import projectDetails from './projects.json';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  constructor() {}

  public projects = projectDetails;
  public faGithubIcon = faGithub;

  ngOnInit(): void {}
}
