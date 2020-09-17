import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreloaderComponent } from './components/layouts/preloader/preloader.component';
import { ConstructionComponent } from './components/templates/construction/construction.component';
import { NotifyComponent } from './components/common/notify/notify.component';
import { SidebarComponent } from './components/common/sidebar/sidebar.component';
import { Restaurant1Component } from './components/templates/restaurant1/restaurant1.component';
import { Travel1Component } from './components/templates/travel1/travel1.component';
import { Travel2Component } from './components/templates/travel2/travel2.component';
import { Restaurant2Component } from './components/templates/restaurant2/restaurant2.component';
import { Restaurant3Component } from './components/templates/restaurant3/restaurant3.component';
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
import { CountdownComponent } from './components/common/countdown/countdown.component';
import { DataCollectionComponent } from './data-collection/data-collection.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { AppointmentComponent } from './appointment/appointment.component';
import { IgxCalendarModule, IgxIconModule } from 'igniteui-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppointmentConfirmationComponent } from './appointment-confirmation/appointment-confirmation.component';
import { NotQualifiedComponent } from './not-qualified/not-qualified.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { PrivacyPolicyv2Component } from './privacy-policyv2/privacy-policyv2.component';
import { AboutComponent } from './Blog-components/about/about.component';
import { AudienceComponent } from './Blog-components/audience/audience.component';
import { FollowersComponent } from './Blog-components/followers/followers.component';
import { FooterComponent } from './Blog-components/footer/footer.component';
import { MainBannerComponent } from './Blog-components/main-banner/main-banner.component';
import { NavbarComponent } from './Blog-components/navbar/navbar.component';
import { BlogDetailsComponent } from './Blog-components/pages/blog-details/blog-details.component';
import { PartnersComponent } from './Blog-components/partners/partners.component';
import { PodcastComponent } from './Blog-components/podcast/podcast.component';
import { SocialStatisticsComponent } from './Blog-components/social-statistics/social-statistics.component';
import { SubscribeComponent } from './Blog-components/subscribe/subscribe.component';
import { VideoComponent } from './Blog-components/video/video.component';
import { HomeComponent2 } from './Blog-components/pages/home/home.component';
import { BlogComponent } from './Blog-components/blog/blog.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsConditionComponent } from './terms-condition/terms-condition.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    AppComponent,
    PreloaderComponent,
    ConstructionComponent,
    NotifyComponent,
    SidebarComponent,
    Restaurant1Component,
    Travel1Component,
    Travel2Component,
    Restaurant2Component,
    Restaurant3Component,
    RealEstateComponent,
    Creative1Component,
    DoctorComponent,
    ItComponent,
    AgencyComponent,
    SeoComponent,
    Creative2Component,
    Creative3Component,
    IcoComponent,
    GymComponent,
    Event1Component,
    Event2Component,
    AutoServicingComponent,
    CityComponent,
    PlumbingComponent,
    CountdownComponent,
    DataCollectionComponent,
    AppointmentComponent,
    AppointmentConfirmationComponent,
    NotQualifiedComponent,
    TermsAndConditionsComponent,
    PrivacyPolicyv2Component,
    AboutComponent,
    AudienceComponent,
    FollowersComponent,
    FooterComponent,
    MainBannerComponent,
    NavbarComponent,
    PartnersComponent,
    PodcastComponent,
    SocialStatisticsComponent,
    SubscribeComponent,
    VideoComponent,
    BlogDetailsComponent,
    HomeComponent2,
    BlogComponent,
    PrivacyPolicyComponent,
    TermsConditionComponent,
    DisclaimerComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    GooglePlaceModule,
    IgxCalendarModule,
    HammerModule,
    IgxIconModule,
    BrowserAnimationsModule,
  ],
  providers: [HttpClient,],
  bootstrap: [AppComponent]
})
export class AppModule { }
