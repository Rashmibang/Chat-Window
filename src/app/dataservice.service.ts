import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  messagefirst = new Subject();
  messagesecond = new Subject();

  constructor() {
  }
}
