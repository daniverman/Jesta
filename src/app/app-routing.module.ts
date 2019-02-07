import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MapComponent} from './components/map/map.component';
import {HomeComponent} from './components/home/home.component';
import {StepFormComponent} from './components/add-mission/step-form/step-form.component';
import {TestComponent} from './components/test/test.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'map', component: MapComponent},
  {path: 'post_mission', component: StepFormComponent},
  {path: 'test', component: TestComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
