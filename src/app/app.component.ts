import {Component} from '@angular/core';
import {meeting} from './shared/factories/meeting';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'notation';

  constructor() {
    console.log(meeting);
  }
}
