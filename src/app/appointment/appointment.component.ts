import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxCalendarComponent, DateRangeType } from 'igniteui-angular';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css',
              "./test.scss"
]
})
export class AppointmentComponent implements OnInit {
  @ViewChild("calendar", { static: true }) public calendar: IgxCalendarComponent;
  todaysDate;
  todaySDay;
  tomorrowDate;
  day;
  day2;
  day3;
  day4;
  day5;
  month;
  tomorrow;
  tomorrowMonth;
  thirdDay;
  thirdDate;
  forthDate;
  fifthDay;
  m;
  today;
  third;
  thirdMonth;
  forth
  forthMonth;
  fifth;
  fifthDate;
  fifthMonth
  apDate;
  selectDate = [false,false,false,false,false,false];
  mobileDay;
  MAppointmentDate;
  MTime;
  t1 = ['9:00 AM','9:00 AM','9:00 AM','9:00 AM','9:00 AM'];
  t2 = ['11:00 AM','11:00 AM','11:00 AM','11:00 AM','11:00 AM'];
  t3 = ['1:00 PM','1:00 PM','1:00 PM','1:00 PM','1:00 PM'];
  t4 = ['3:00 PM','3:00 PM','3:00 PM','3:00 PM','3:00 PM'];
  t5 = ['5:00 PM','5:00 PM','5:00 PM','5:00 PM','5:00 PM'];
  t6 = ['7:00 PM','7:00 PM','7:00 PM','7:00 PM','7:00 PM'];
  constructor(private service : UtilityService) { }

  ngOnInit(): void {
   this.todaysDate = new Date().getDate();
   this.todaySDay = new Date().getDay();
   this.m = this.getMonth(new Date().getMonth());     
   this.today = new Date()
   this.tomorrow = new Date(this.today)
   this.tomorrow.setDate(this.tomorrow.getDate() + 1);
   this.tomorrowDate = this.tomorrow.getDate();
   this.tomorrowMonth = this.tomorrow.getMonth();
  this.tomorrowMonth = this.getMonth(this.tomorrowMonth);
   ///////////////
   this.third = new Date(this.today)
   this.third.setDate(this.third.getDate() + 2);
   this.thirdDate = this.third.getDate();
   this.thirdMonth = this.third.getMonth();
  this.thirdMonth = this.getMonth(this.thirdMonth);
   //////////////4rth
   this.forth = new Date(this.today)
   this.forth.setDate(this.forth.getDate() + 3);
   this.forthDate = this.forth.getDate();
   this.forthMonth = this.forth.getMonth();
  this.forthMonth = this.getMonth(this.forthMonth);
   /// 5th 
   this.fifth = new Date(this.today)
   this.fifth.setDate(this.fifth.getDate() + 4);
   this.fifthDate = this.fifth.getDate();
   this.fifthMonth = this.fifth.getMonth();
   this.fifthMonth = this.getMonth(this.fifthMonth); 
      
    if(this.todaySDay == '0')
    {
      this.day = 'Sunday'
      this.day2 = 'Monday'
      this.day3 = 'Tueday'
      this.day4 = 'Wednesday'
      this.day5 = 'Thursday'
    }
    else if(this.todaySDay == '1')
    {
      this.day = 'Monday';
      this.day2 = 'Tueday';
      this.day3 = 'Wednesday';
      this.day4 = 'Thursday';
      this.day5 = 'Friday';
    }
    else if(this.todaySDay == '2')
    {
      this.day = 'Tuesday';
      this.day2 = 'Wednesday';
      this.day3 = 'Thursday';
      this.day4 = 'Friday';
      this.day5 = 'Saturday';
    }
    else if(this.todaySDay == '3')
    {
      this.day = 'Wednesday';
      this.day2 = 'Thursday';
      this.day3 = 'Friday';
      this.day4 = 'Saturday'
      this.day5 = 'Sunday';
    }
    else if(this.todaySDay == '4')
    {
      this.day = 'Thursday'
      this.day2 = 'Friday';
      this.day3 = 'Saturday'
      this.day4 = 'Sunday';
      this.day5 = 'Monday';
    }
    else if(this.todaySDay == '5')
    {
      this.day = 'Friday';
      this.day2 = 'Saturday'
      this.day3 = 'Sunday';
      this.day4 = 'Monday';
      this.day5 = 'Tuesday';
    }
    else if(this.todaySDay == '6')
    {
      this.day = 'Saturday';
      this.day2 = 'Sunday';
      this.day3 = 'Monday';
      this.day4 = 'Tuesday';
      this.day5 = 'Wednesday'
    }
    this.mobileDay = this.day
  console.log("Day",this.todaySDay);
  console.log("Date",this.todaysDate);

  // this.calendar.disabledDates = [
  //   {type: DateRangeType.Between, dateRange: [new Date("1900-1-1"), new Date(this.today.getFullYear(),this.today.getMonth(),this.today.getDate()-1)]},
  //   ];

    this.calendar.disabledDates = [
      {type : DateRangeType.Before,
      dateRange: [new Date(this.today.getFullYear(),this.today.getMonth(),this.today.getDate())]}
    ]
    // this.calendar.disabledDates = [
    //   {type: DateRangeType.Between, dateRange: [new Date(this.today.getFullYear(),this.today.getMonth(),this.today.getDate() + 5), new Date("2030-1-1")],
    //   }];
  }

  getMonth(month) : string
  {
    if(month == '0')
    {
      month = "Jan;"
     return month;
    }
    else if(month == '1')
    {
      month = 'Feb';
     return month;
    }
    else if(month == '2')
    {
      month = 'March';
    return month;
    
    }
    else if(month == '3')
    {
      month = 'Apr';
     return month;
    }
    else if(month == '4')
    { 
     month = 'May';
     return month;
    }
    else if(month == '5')
    {
     month = 'Jun';
     return month;
    }
    else if(month == '6')
    {
     month = 'July';
     return month;
    }
    else if(month == '7')
    {
    month = 'Aug';
    return month;
    }
    else if(month == 8)
    {
     month = 'Sep';
     return month;
    }
    else if(month == '9')
    {
     month = 'Oct';
     return month;
    }
    else if(month == '10')
    {
     month ='Nov';
     return month;
    }
    else if(month == '11')
    {
     month = 'Dec';
     return month;
    }

     
  }
  // ngAfterContentInit()
  // {
  //  this.m = this.getMonth(new Date().getMonth());
  //  console.log(this.m);
  // }

  onClick(time : string,index)
  {
    if(index == 0)
    {
        this.apDate = new Date().toLocaleDateString();
        this.apDate = this.apDate + "," + time ;
        console.log(this.apDate);  
        this.service.updateAppointment(this.apDate);          
    }
    else if(index == 1)
    {
        this.apDate = this.tomorrow.toLocaleDateString();
        this.apDate = this.apDate + "," + time ;
        console.log(this.apDate);
        this.service.updateAppointment(this.apDate);
    }
   else if(index == 2)
   {
     this.apDate = this.third.toLocaleDateString();
     this.apDate = this.apDate + "," + time ;
     console.log(this.apDate);  
     this.service.updateAppointment(this.apDate);
   }
   else if(index == 3)
   {
    this.apDate = this.forth.toLocaleDateString();
    this.apDate = this.apDate + "," + time ;
    console.log(this.apDate);
    this.service.updateAppointment(this.apDate);
   }
   else if(index == 4)
   {
    this.apDate = this.fifth.toLocaleDateString();
    this.apDate = this.apDate + "," + time ;
    console.log(this.apDate);
    this.service.updateAppointment(this.apDate);
   }

  }

  public onSelection(dates: Date) {
      // new Date(dates).
    this.MAppointmentDate = dates.toLocaleDateString();
    let d = dates.getDay();
    this.getDay(d)
    console.log(dates);   
 }
 selectMButton(index,time)
 {
   this.selectDate = [false,false,false,false,false,false]
   this.selectDate[index] = true;
   console.log(time);
   this.MTime = time;

 }  

getClass(index)
{
  // return {
    this.selectDate[index] 
  // }
}

getDay(todaySDay)
{
     
  if(todaySDay == '0')
  {
    this.mobileDay = 'Sunday';
  }

  else if(todaySDay == '1')
  {
    this.mobileDay = 'Monday';
  
  }
  else if(todaySDay == '2')
  {
    this.mobileDay = 'Tuesday';
  }
  else if(todaySDay == '3')
  {
    this.mobileDay = 'Wednesday';
  }
  else if(todaySDay == '4')
  {
    this.mobileDay = 'Thursday'
  }
  else if(todaySDay == '5')
  {
    this.mobileDay = 'Friday';   
  }
  else if(todaySDay == '6')
  {
    this.mobileDay = 'Saturday';
  }
}
bookAnAppointment()
{
  //  let ap =
   let ap = this.MAppointmentDate + "," + this.MTime;
   console.log(ap);
   this.service.updateAppointment(ap);    
}
}
