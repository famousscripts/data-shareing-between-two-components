import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { MessageService } from '../_services/index';

@Component({
  selector: 'feedback',
  templateUrl: 'feedback.component.html'
})

export class FeedbackComponent implements OnDestroy {
  message: any;
  subscription: Subscription;

  constructor(private messageService: MessageService) { }
    ngOnInit() {
      this.subscription = this.messageService.getNewUserInfo().subscribe(info => {
      this.message = info;
      console.log("here",info);
    })
  }
  ngOnDestroy() {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
    //this.subscription.unsubscribe();
  }
}