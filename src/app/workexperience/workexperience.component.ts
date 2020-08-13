import { Component, OnInit } from '@angular/core';
import employmentDetails from './employment-details.json';

@Component({
  selector: 'app-workexperience',
  templateUrl: './workexperience.component.html',
  styleUrls: ['./workexperience.component.scss'],
})
export class WorkexperienceComponent implements OnInit {
  constructor() {}

  public employmentDetails = employmentDetails;

  ngOnInit(): void {}
}
