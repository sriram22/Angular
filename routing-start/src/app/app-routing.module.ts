
import {NgModule} from "@angular/core";

import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import {ErrorPageComponent} from './error-page/error-page.component';

import {RouterModule, Routes} from "@angular/router";
import {AuthGuardService} from "./auth-guard.service";
import {CanDeactivateGuard} from "./servers/edit-server/can-deactivate-guard.service";
import {ServerResolver}  from './servers/server/server-resolver.service';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users', component: UsersComponent},
  {path: 'users/:id/:name', component: UserComponent},
  {path: 'servers', canActivateChild : [AuthGuardService], component: ServersComponent ,
    children: [
      {path: ':id', component: ServerComponent, resolve:{server: ServerResolver}},
      {path: ':id/edit', component: EditServerComponent, canDeactivate : [CanDeactivateGuard]}
    ]},
// {path:'something', component: PageNotFoundComponent},
   {path:'not-found', component: ErrorPageComponent, data: {message: 'page not found'}},
  {path: '**', redirectTo: '/not-found'}
];
@NgModule({
  imports: [
  //  RouterModule.forRoot(appRoutes,{useHash:true})
    RouterModule.forRoot(appRoutes)
  ],
exports: [RouterModule]

})

export class AppRoutingModule {

}
