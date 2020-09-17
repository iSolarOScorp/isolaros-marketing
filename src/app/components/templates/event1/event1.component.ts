import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilityService } from 'src/app/utility.service';

@Component({
  selector: 'app-event1',
  templateUrl: './event1.component.html',
  styleUrls: ['./event1.component.scss']
})
export class Event1Component implements OnInit {

  days: any;
  hours: any;
  minutes: any;
  seconds: any;
  myInterval: any;

  constructor(private service : UtilityService,
    private router : Router) { }


gettingStarted()
{
this.service.updateRecord()
}

  ngOnInit() {
    this.service.addRecord()
    this.myInterval = setInterval(() => {
      this.commingSoonTime();
    }, 0);
  }

  commingSoonTime = () => {
    const endTimeParse = (Date.parse('September 30, 2020 17:00:00 PDT')) / 1000;
    const now = new Date();
    const nowParse = (Date.parse(now.toString()) / 1000);
    const timeLeft = endTimeParse - nowParse;
    const days = Math.floor(timeLeft / 86400);
    let hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    let minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
    let seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
    if (hours < 10) { hours = 0 + hours; }
    if (minutes < 10) { minutes = 0 + minutes; }
    if (seconds < 10) { seconds = 0 + seconds; }
    this.days = days;
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
  }

}
