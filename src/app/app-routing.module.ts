import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConstructionComponent } from './components/templates/construction/construction.component';
import { Restaurant1Component } from './components/templates/restaurant1/restaurant1.component';
import { Restaurant2Component } from './components/templates/restaurant2/restaurant2.component';
import { Restaurant3Component } from './components/templates/restaurant3/restaurant3.component';
import { Travel1Component } from './components/templates/travel1/travel1.component';
import { Travel2Component } from './components/templates/travel2/travel2.component';
import { RealEstateComponent } from './components/templates/real-estate/real-estate.component';
import { Creative1Component } from './components/templates/creative1/creative1.component';
import { DoctorComponent } from './components/templates/doctor/doctor.component';
import { ItComponent } from './components/templates/it/it.component';
import { AgencyComponent } from './components/templates/agency/agency.component';
import { SeoComponent } from './components/templates/seo/seo.component';
import { Creative2Component } from './components/templates/creative2/creative2.component';
import { Creative3Component } from './components/templates/creative3/creative3.component';
import { IcoComponent } from './components/templates/ico/ico.component';
import { GymComponent } from './components/templates/gym/gym.component';
import { Event1Component } from './components/templates/event1/event1.component';
import { Event2Component } from './components/templates/event2/event2.component';
import { AutoServicingComponent } from './components/templates/auto-servicing/auto-servicing.component';
import { CityComponent } from './components/templates/city/city.component';
import { PlumbingComponent } from './components/templates/plumbing/plumbing.component';
import { DataCollectionComponent } from './data-collection/data-collection.component';
import { AppointmentComponent } from './appointment/appointment.component';

const routes: Routes = [
    {path: '', component: ConstructionComponent},
    {path: 'restaurant-1', component: Restaurant1Component},
    {path: 'travel-1', component: Travel1Component},
    {path: 'travel-2', component: Travel2Component},
    {path: 'restaurant-2', component: Restaurant2Component},
    {path: 'restaurant-3', component: Restaurant3Component},
    {path: 'real-estate', component: RealEstateComponent},
    {path: 'creative-1', component: Creative1Component},
    {path: 'doctor', component: DoctorComponent},
    {path: 'it', component: ItComponent},
    {path: 'agency', component: AgencyComponent},
    {path: 'seo', component: SeoComponent},
    {path: 'creative-2', component: Creative2Component},
    {path: 'creative-3', component: Creative3Component},
    {path: 'ico', component: IcoComponent},
    {path: 'gym', component: GymComponent},
    {path: 'event-1', component: Event1Component},
    {path: 'event-2', component: Event2Component},
    {path: 'auto-servicing', component: AutoServicingComponent},
    {path: 'city', component: CityComponent},
    {path: 'plumbing', component: PlumbingComponent},
    {path : 'survey',component : DataCollectionComponent},
    {path : 'appointment',component : AppointmentComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }