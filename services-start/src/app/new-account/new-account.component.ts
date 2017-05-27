import { Component } from '@angular/core';

import {LoggingService} from '../logging.service';
import {AccountService} from '../accounts.service';
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: []
})
export class NewAccountComponent {



  constructor(private loggingservice:LoggingService,private accountservice:AccountService){
    this.accountservice.statusupdated.subscribe(
      (status: string) => alert('New Status:'+ status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountservice.addAccount(
     accountName,
      accountStatus
    );
  // console.log('A server status changed, new status: ' + accountStatus);

  }
}
