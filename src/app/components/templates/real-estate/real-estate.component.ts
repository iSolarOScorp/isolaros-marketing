import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilityService } from 'src/app/utility.service';

@Component({
  selector: 'app-real-estate',
  templateUrl: './real-estate.component.html',
  styleUrls: ['./real-estate.component.scss']
})
export class RealEstateComponent implements OnInit {

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
