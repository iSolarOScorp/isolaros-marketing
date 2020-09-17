import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilityService } from 'src/app/utility.service';

@Component({
  selector: 'app-auto-servicing',
  templateUrl: './auto-servicing.component.html',
  styleUrls: ['./auto-servicing.component.scss']
})
export class AutoServicingComponent implements OnInit {

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
