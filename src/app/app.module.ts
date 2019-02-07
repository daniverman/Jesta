///<reference path="components/add-mission/final-step/final-step.component.ts"/>
import {AppRoutingModule} from './app-routing.module';
import {AgmCoreModule} from '@agm/core';
import {AppComponent} from './app.component';
import {MapComponent} from './components/map/map.component';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {FooterComponent} from './components/footer/footer.component';
import {environment} from '../environments/environment.prod';

import {ApiSrvsService} from './api-srvs.service';
import {PostMissionComponent} from './components/add-mission/post-mission/post-mission.component';
import {HomeComponent} from './components/home/home.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {AgmJsMarkerClustererModule} from '@agm/js-marker-clusterer';
import {StepFormComponent} from './components/add-mission/step-form/step-form.component';
import {Box2Component} from './components/add-mission/box2/box2.component';
import {
  MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatRippleModule, MatSliderModule,
  MatSlideToggleModule,
  MatStepperModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouteSelectComponent} from './components/add-mission/route-select/route-select.component';
import {FinalStepComponent} from './components/add-mission/final-step/final-step.component';
import {SubmitData} from './submit-srvs.service';
import {DoneStepComponent} from './components/add-mission/done-step/done-step.component';
import {SideNavComponent} from './components/side-nav/side-nav.component';
import {PersonalPanelComponent} from './components/personal-panel/personal-panel.component';
import {SearchComponent} from './components/search/search.component';
import {TestComponent} from './components/test/test.component';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    NavBarComponent,
    FooterComponent,
    PostMissionComponent,
    HomeComponent,
    Box2Component,
    StepFormComponent,
    RouteSelectComponent,
    FinalStepComponent,
    DoneStepComponent,
    SideNavComponent,
    PersonalPanelComponent,
    SearchComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapKey
    }),
    AppRoutingModule,
    AgmJsMarkerClustererModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatStepperModule,
    MatSliderModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [ApiSrvsService, SubmitData],
  bootstrap: [AppComponent]
})


export class AppModule {
}
