import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";

@Injectable()
export class ServerService {

  constructor(private http: Http) {}

  storeServers(servers: any[]) {
  const headers= new Headers({'Content-Type': 'application/json'});

   /* return this.http.post('https://test-ng-http.firebaseio.com/data.json',
      servers,
      {headers: headers});*/
    return this.http.put('https://test-ng-http.firebaseio.com/data.json',
      servers,
      {headers: headers});
  }

  getServers(){
    return this.http.get('https://test-ng-http.firebaseio.com/data.json').map(
      (response: Response) => {
        const data = response.json();

        for(const server of data)
        {
            server.name = '_Fetched' + server.name;
        }
        return data;
      }
    ).catch(
      (error: Response) => {
        console.log(error);
        return Observable.throw('Something went wrong');
      }
    );
  }


  getAppName(){
    return this.http.get('https://test-ng-http.firebaseio.com/data/appName.json').map(
      (response: Response) =>{
        return response.json();
      }
    );
  }
}

