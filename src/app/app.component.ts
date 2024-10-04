import { Component, OnInit } from '@angular/core';
import { PersonDetail } from './models/PersonDetail';
import { PersonDetailService } from './services/person-detail.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular.UI';
  person: PersonDetail[] = [];

  constructor(private personDetailService: PersonDetailService) {}

  ngOnInit() : void {
    this.personDetailService.getPersonDetail();
  }
}