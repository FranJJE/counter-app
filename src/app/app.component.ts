import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'counter-app';
  count: number = 0;

  increaseCounter = () => {
    if(this.count === 10) {
      this.count = this.count + 10;
    } else {
      this.count ++;
    }
  }

  decreaseCounter = () => {
    if(this.count > 0) {
      this.count --;
    }
  }

  resetCounter = () => {
    this.count = 0;
  }
}
