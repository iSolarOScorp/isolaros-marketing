import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-qualified',
  templateUrl: './not-qualified.component.html',
  styleUrls: ['./not-qualified.component.css']
})
export class NotQualifiedComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  gotoSurvey()
  {
   this.router.navigateByUrl('/getting-started/survey');
  }
}
