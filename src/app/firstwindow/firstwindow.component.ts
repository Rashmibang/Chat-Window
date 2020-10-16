import {Component, OnInit} from '@angular/core';
import {DataserviceService} from '../dataservice.service';


interface Detailview {
  message: string;
  time: Date;
  sender: 'Queen' | 'King';
}

@Component({
  selector: 'app-firstwindow',
  templateUrl: './firstwindow.component.html',
  styleUrls: ['./firstwindow.component.css']
})

export class FirstwindowComponent implements OnInit {

  valueReceived: Detailview[] = [];

  constructor(private service: DataserviceService) {
  }

  ngOnInit(): void {
    this.service.messagefirst.subscribe((param: string) => {
      console.log(param);
      const dv2: Detailview = {message: param, sender: 'Queen', time: new Date()};
      this.valueReceived.push(dv2);
    });

    this.service.messagesecond.subscribe((param: string) => {
      console.log(param);
      const dv3: Detailview = {message: param, sender: 'King', time: new Date()};
      this.valueReceived.push(dv3);
    });
  }

  send(parameter1: string): void {
    this.service.messagefirst.next(parameter1);

  }
}
