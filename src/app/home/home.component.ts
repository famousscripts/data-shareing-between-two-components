import { Component } from '@angular/core';
import { MessageService } from '../_services/index';

@Component({
    templateUrl: 'home.component.html'
})
export class HomeComponent {

    constructor(private messageService: MessageService) {}  
    sendMessage(): void {
     this.messageService.setNewUserInfo({ Message: 'Booby Pareshaan'});
    }

}