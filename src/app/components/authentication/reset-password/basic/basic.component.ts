import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-basic',
  standalone: true,
  imports: [SharedModule,RouterModule],
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent {
  showPassword = false;
  toggleClass = "off-line";
  toggleVisibility() {
    this.showPassword = !this.showPassword;
    if (this.toggleClass === "off-line") {
      this.toggleClass = "line";
    } else {
      this.toggleClass = "off-line";
    }
  }
  showPassword1 = false;
  toggleClass1 = "off-line";
  toggleVisibility1() {
    this.showPassword1 = !this.showPassword1;
    if (this.toggleClass1 === "off-line") {
      this.toggleClass1 = "line";
    } else {
      this.toggleClass1 = "off-line";
    }
  }
  showPassword2 = false;
  toggleClass2 = "off-line";
  toggleVisibility2() {
    this.showPassword2 = !this.showPassword2;
    if (this.toggleClass2 === "off-line") {
      this.toggleClass2 = "line";
    } else {
      this.toggleClass2 = "off-line";
    }
  }
}
