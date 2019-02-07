import {Component, OnInit, ViewChild, ViewChildren} from '@angular/core';
import {ApiSrvsService} from '../../../api-srvs.service';
import {SubmitData} from '../../../submit-srvs.service';
import {Mission} from '../../../Models/mission';
import {DoneStepComponent} from '../done-step/done-step.component';
import {AppRoutingModule} from '../../../app-routing.module';
import {Router} from '@angular/router';


@Component({
  selector: 'app-step-form',
  templateUrl: './step-form.component.html',
  styleUrls: ['./step-form.component.css'],
})
export class StepFormComponent implements OnInit {
  @ViewChildren('DoneStepComponent') private doneC: DoneStepComponent;
  private display = 'none';


  constructor(private api_srvs: ApiSrvsService, private submit_srvs: SubmitData, public router: Router) {
  }

  ngOnInit() {
  }

  done() {
    const mission = new Mission();
    mission.from.address = this.submit_srvs.get_data_string('from_address');
    mission.from.lat = this.submit_srvs.get_data_string('from_lat');
    mission.from.long = this.submit_srvs.get_data_string('from_long');
    mission.from.address = this.submit_srvs.get_data_string('from_address');
    mission.to.lat = this.submit_srvs.get_data_string('to_lat');
    mission.to.long = this.submit_srvs.get_data_string('to_long');
    mission.to.address = this.submit_srvs.get_data_string('to_address');
    mission.box_x = this.submit_srvs.get_data_string('box_x');
    mission.box_x_cm = this.submit_srvs.get_data_string('box_x_cm');
    mission.box_y = this.submit_srvs.get_data_string('box_y');
    mission.box_y_cm = this.submit_srvs.get_data_string('box_y_cm');
    mission.box_checkbox = this.submit_srvs.get_data_string('box_checkbox');
    mission.additional_info = this.submit_srvs.get_data_string('additional_info');
    mission.price = this.submit_srvs.get_data_string('price');
    this.api_srvs.set_mission(JSON.stringify(mission));
    this.openModal()
  }

  openModal() {
    this.display = 'block';
  }

  onCloseHandled() {
    this.display = 'none';
    this.router.navigate(['']);
  }
}
