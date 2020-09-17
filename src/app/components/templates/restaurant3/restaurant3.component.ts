import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilityService } from 'src/app/utility.service';

@Component({
  selector: 'app-restaurant3',
  templateUrl: './restaurant3.component.html',
  styleUrls: ['./restaurant3.component.scss']
})
export class Restaurant3Component implements OnInit {


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
