import { Component, ElementRef, ViewChild } from '@angular/core';
import { SimplebarAngularModule } from 'simplebar-angular';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [SharedModule,SimplebarAngularModule],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  options = { autoHide: false, scrollbarMinSize: 100 };
  @ViewChild('chatuserdetails') chatuserdetails!: ElementRef;

  RecentData = [
    {
      class:'checkforactive',
      status: 'online',
      src: './assets/images/faces/5.jpg',
      name: 'Sujika',
      time: '1:32PM',
      message: 'Need to go for lunch?',
      sent:"double-fill"
    },
    {
      class:'checkforactive',
      status: 'online',
      src: './assets/images/faces/2.jpg',
      name: 'Emiley Jackson',
      time: '12:24PM',
      message: 'Typing...',
      badge: '2',
    },
    {
      class:'chat-msg-unread checkforactive',
      status: 'online',
      src: './assets/images/faces/10.jpg',
      name: 'McGreggor',
      time: '1:21PM',
      message: 'Nice to meet you &#128522;',
      sent:"double-fill"
    },
    {
      class:'checkforactive',
      status: 'online',
      src: './assets/images/faces/8.jpg',
      name: 'Alissa',
      time: '12:32PM',
      message: 'Chat with you later,bye',
      sent:"double-fill"
    },
    {
      class:"chat-inactive checkforactive",
      status: 'offline',
      src: './assets/images/faces/11.jpg',
      name: 'Andreas',
      time: '12:32PM',
      message: 'Congratulations on your new Projects',
    },
    {
      class:"chat-inactive checkforactive",
      status: 'offline',
      src: './assets/images/faces/3.jpg',
      name: 'Melissa Sean',
      time: '12:10PM',
      message: 'Nice work,Congrats &#128079;',
    },
    {
      class:"chat-inactive checkforactive",
      status: 'offline',
      src: './assets/images/faces/6.jpg',
      name: 'Samantha Paul',
      time: '10:12PM',
      message: 'Great work keep it up :-)',
    },
    {
      class:"chat-inactive checkforactive",
      status: 'offline',
      src: './assets/images/faces/4.jpg',
      name: 'Megan Fox',
      time: '7:32PM',
      message: 'You are need to be appreaciated for what you have done,congs',
    },
    {
      class:"chat-inactive checkforactive",
      status: 'offline',
      src: './assets/images/faces/13.jpg',
      name: 'Nicholas Sams',
      time: '1:22PM',
      message: 'Great Project',
    },
    {
      class:"chat-inactive checkforactive",
      status: 'offline',
      src: './assets/images/faces/11.jpg',
      name: 'Pope Johnson',
      time: '10.21AM',
      message: 'Hike management fixed',
    },
  ];

  GroupData = [
    {
      name: '1) Family Together',
      status: '4 Online',
      bg: 'success',
      text:'success',
      Qty: ' +19',
      src: './assets/images/faces/2.jpg',
      src1: './assets/images/faces/8.jpg',
      src2: './assets/images/faces/2.jpg',
      src3: './assets/images/faces/10.jpg',
    },
    {
      name: '2) Work Buddies',
      status: '32 Online',
      bg: 'secondary',
      text: 'secondary',
      Qty: ' +123',
      src: './assets/images/faces/1.jpg',
      src1: './assets/images/faces/7.jpg',
      src2: './assets/images/faces/3.jpg',
      src3: './assets/images/faces/9.jpg',
      src4: './assets/images/faces/12.jpg',
    },
    {
      name: '3) Friends Forever',
      status: '3 Online',
      bg: 'warning',
      text: 'warning',
      Qty: ' +15',
      src: './assets/images/faces/4.jpg',
      src1: './assets/images/faces/8.jpg',
      src2: './assets/images/faces/13.jpg',
      src3: './assets/images/faces/1.jpg',

    },
    {
      name: '4) Social Media Deals',
      status: '10 Online',
      bg: 'danger',
      text:'danger',
      Qty: ' +23',
      src: './assets/images/faces/1.jpg',
      src1: './assets/images/faces/7.jpg',
      src2: './assets/images/faces/14.jpg',
      src3: './assets/images/faces/1.jpg',
    },
    {
      name: '4)Apartment Group',
      status: '0 Online',
      bg: 'light',
      text:'light',
      Qty: ' +15',
      src: './assets/images/faces/5.jpg',
      src1: './assets/images/faces/6.jpg',
      src2: './assets/images/faces/12.jpg',
      src3: './assets/images/faces/3.jpg',
    },
  ];
  GroupChatData = [
    {
      class:'checkforactive',
      status: 'online',
      src: './assets/images/faces/17.jpg',
      name: ' Family Together 😍 ',
      time: '1:32PM',
      message: 'Hira Typing...',
      badge: '2',
    },
    {
      class:'chat-msg-unread checkforactive',
      status: 'online',
      src: './assets/images/faces/18.jpg',
      name: 'Work Buddies',
      time: '11:32PM',
      message: 'Ram : Happy to be part of this group',
    },
    {
      class:"chat-inactive checkforactive",
      status: 'online',
      src: './assets/images/faces/19.jpg',
      name: ' Friends Forever 😎 ',
      time: '3 days ago',
      message: 'Simon,Melissa,Amanda,Patrick,Siddique',
    },
    {
      class:"chat-inactive checkforactive",
      status: 'offline',
      src: './assets/images/faces/20.jpg',
      name: ' Social Media Deals',
      time: '5 days ago',
      message: 'Kamalan,Subha,Ambrose,Kiara,Jackson',
    },
    {
      class:"chat-inactive checkforactive",
      status: 'offline',
      src: './assets/images/faces/21.jpg',
      name: 'Apartment Group',
      time: '12 days ago',
      message: 'Subman,Rajen,Kairo,Dibasha,Alexa',
    },
  ];
  CallData = [
    {
      status: 'online',
      src: './assets/images/faces/5.jpg',
      name: 'Sujika',
      time: 'Today,12:47PM',
      device: 'phone',
      icon:'down-left'
    },
    {
      status: 'online',
      src: './assets/images/faces/7.jpg',
      name: 'Melissa',
      time: 'Today,10:27AM',
      device: 'phone',
      icon:'up-right'
    },
    {
      status: 'online',
      src: './assets/images/faces/21.jpg',
      name: 'Sharukh Sam',
      time: 'Yesterday,12:45PM',
      device: 'video',
      icon:'down-left'
    },
    {
      status: 'offline',
      src: './assets/images/faces/15.jpg',
      name: 'Kiram Kumal',
      time: '3 days ago',
      device: 'phone',
      icon:'down-left'
    },
    {
      status: 'offline',
      src: './assets/images/faces/4.jpg',
      name: ' Amanda Sams',
      time: '22, Oct 2022',
      device: 'video',
      icon:'down-left'
    },
    {
      status: 'offline',
      src: './assets/images/faces/16.jpg',
      name: ' Azimo Peter',
      time: '24, Oct 2022',
      device: 'phone',
      icon:'up-right'
    },
    {
      status: 'offline',
      src: './assets/images/faces/8.jpg',
      name: ' Sierra Adams',
      time: '22, Oct 2022',
      device: 'phone',
      icon:'down-left'
    },
    {
      status: 'offline',
      src: './assets/images/faces/3.jpg',
      name: '  Dimple Kanns',
      time: '12, Oct 2022',
      device: 'video',
      icon:'down-left'
    },
    {
      status: 'offline',
      src: './assets/images/faces/9.jpg',
      name: ' Adrea Jaremiah',
      time: '13, Sep 2022',
      device: 'phone',
      icon:'up-right'
    },
    {
      status: 'offline',
      src: './assets/images/faces/21.jpg',
      name: '  Anjaneliyu',
      time: '10, July 2022',
      device: 'phone',
      icon:'down-left'
    },
    {
      status: 'offline',
      src: './assets/images/faces/14.jpg',
      name: '  Jason Steph',
      time: '1, Apr 2022',
      device: 'phone',
      icon:'down-left'
    },
  ];
  activeUser = this.RecentData[0];
 
  constructor(
    public elementRef: ElementRef,
  ) {}
  handleClick(activeUser: any): void {
    this.activeUser = activeUser;
    if (window.innerWidth <= 992) {
      document.querySelector('.main-chart-wrapper ')?.classList.add('responsive-chat-open');
    }
  }

  detailsclick() {
    document.querySelector('.chat-user-details ')?.classList.add('open');
  }

  removedetails() {
    document.querySelector('.chat-user-details ')?.classList.remove('open');
   
  }
  removedetails1() {
    document.querySelector('.main-chart-wrapper ')?.classList.remove('responsive-chat-open');
  }

  ngOninit(){
    let html = this.elementRef.nativeElement.ownerDocument.documentElement;
    if (window.innerWidth <= 992) {
      
    }
   
  }
}
