import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilityService } from 'src/app/utility.service';

@Component({
  selector: 'app-travel1',
  templateUrl: './travel1.component.html',
  styleUrls: ['./travel1.component.scss']
})
export class Travel1Component implements OnInit {

  constructor(private service : UtilityService,
    private router : Router) { }

ngOnInit(): void {
this.service.addRecord()
}
gettingStarted()
{
this.service.updateRecord()
}
}
