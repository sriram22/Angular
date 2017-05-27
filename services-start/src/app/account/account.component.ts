import { Component, Input} from '@angular/core';
import {LoggingService} from '../logging.service';
import {AccountService} from '../accounts.service';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: []
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;


  constructor(private loggingservice: LoggingService, private accountservice:AccountService){}

  onSetTo(status: string) {
   // this.statusChanged.emit({id: this.id, newStatus: status});
    this.accountservice.updateStatus(this.id,status);
   // console.log('A server status changed, new status: ' + status);
   // this.loggingservice.logstatuschanged(status);
    this.accountservice.statusupdated.emit(status);
  }
}
