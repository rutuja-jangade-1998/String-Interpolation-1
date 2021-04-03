import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'String Interpolation Angular Project';
  name = 'Indiana';
  email = 'indiana@gmail.com';
  contact = '1234567890'
  public maths = 30;
  public science= 20;
  public english = 50;
  public marathi= 40;
  value = this.maths + this.science + this.english + this.marathi;
  }