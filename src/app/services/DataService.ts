import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable()
export class DataService {
  private messageSource = new BehaviorSubject<number>(
    <number>{}
  );
  currentSum=this.messageSource.asObservable();

  constructor() {

  }
  changeSum(sum:number){
    this.messageSource.next(sum);
  }

}
