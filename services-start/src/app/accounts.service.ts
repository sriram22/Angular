
import { LoggingService } from './logging.service';
import { Injectable,EventEmitter} from "@angular/core";

@Injectable()

export class AccountService{
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  statusupdated=new EventEmitter<string>();
  constructor(private loggingService:LoggingService){}

  addAccount(name: string , status: string) {
    this.accounts.push({name: name,status: status});
    this.loggingService.logstatuschanged(status);
  }

  updateStatus(id: number, newStatus: string) {
  this.accounts[id].status = newStatus;
    this.loggingService.logstatuschanged(newStatus);
  }
}
