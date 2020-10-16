import {Component, OnInit} from '@angular/core';
import {DataserviceService} from '../dataservice.service';

interface Messageparameters {
  message: string;
  time: Date;
  sender: 'Queen' | 'King';
}

@Component({
  selector: 'app-secondwindow',
  templateUrl: './secondwindow.component.html',
  styleUrls: ['./secondwindow.component.css']
})

export class SecondwindowComponent implements OnInit {
  valueSent: Messageparameters[] = [];

  constructor(private servicetwo: DataserviceService) {
  }

  ngOnInit(): void {
    this.servicetwo.messagefirst.subscribe((param: string) => {
      console.log(param);
      const mp2: Messageparameters = {message: param, sender: 'Queen', time: new Date()};
      this.valueSent.push(mp2);
    });

    this.servicetwo.messagesecond.subscribe((param: string) => {
      console.log(param);
      const mp3: Messageparameters = {message: param, sender: 'King', time: new Date()};
      this.valueSent.push(mp3);
    });
  }

  sendback(parameter2: string): void {
    this.servicetwo.messagesecond.next(parameter2);
  }
}
