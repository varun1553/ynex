import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss', '../../../../../assets/css/egd-theme.css', '../../signin/cover/cover.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule] 
})
export class BasicComponent {
  showNewScreen: boolean = false;
  showMobileField: boolean = true;
  activeTab: string = 'patient';
  currentView: string = 'otpVerification';
  mobileNumber: string = '';
  emailAddress: string = '';
  otpCode: string = '';
  emailCode: string = '';

  toggleClass2: string = 'mail-line';

  toggleField() {
    this.showMobileField = !this.showMobileField;
    this.toggleClass2 = this.showMobileField ? 'mail-line' : 'phone-line';
  }
  
  showForm(tab: string): void {
    this.activeTab = tab;
  }

  onContinue(): void {
    this.showNewScreen = true;
    this.currentView = this.showMobileField ? 'otpVerification' : 'emailVerification';
  }

  goBack(): void {
    this.showNewScreen = false;
  }

  verifyCode(): void {
    if (this.currentView === 'otpVerification') {
      console.log('Verifying OTP:', this.otpCode);
    } else {
      console.log('Verifying Email Code:', this.emailCode);
    }
  }
}