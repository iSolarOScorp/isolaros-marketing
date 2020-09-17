import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilityService } from 'src/app/utility.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {

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
