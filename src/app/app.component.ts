import { Component } from '@angular/core';
import {pods} from './pods-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
open;
content = pods;

onClick(){
  this.open = this.content;
}
}
