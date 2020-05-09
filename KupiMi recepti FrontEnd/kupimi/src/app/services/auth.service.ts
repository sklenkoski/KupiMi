import { Injectable, InjectionToken, Inject } from '@angular/core';
import { User } from '../classes/user';
import { AngularFireAuth } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';
import { UserRequest } from '../requests/app-requests';
import { Router } from '@angular/router';
import { WebStorageService, LOCAL_STORAGE } from 'ngx-webstorage-service';
import { UsersService } from './users.service';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private eventAuthError = new BehaviorSubject<string>("");
  eventAuthError$ = this.eventAuthError.asObservable();
  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    @Inject(LOCAL_STORAGE) private storage: WebStorageService,
    private userService: UsersService,
    private notifyService: NotificationService

  ) { }

  createUser(userRequest: UserRequest, password: string): void {
    this.afAuth.createUserWithEmailAndPassword(userRequest.email, password).then(
      result => {
        this.userService.createUser(userRequest).subscribe(params =>{
          this.storage.set('email', userRequest.email)
          
        })
      }
    )
    .catch(error => {
      this.eventAuthError.next(error);
    })
  }

  login(email: string, password: string): void{
    this.afAuth.signInWithEmailAndPassword(email,password).then(
      result => {
        console.log(result)
        this.storage.set('email', email)
        this.router.navigate(['/home']).then(() => {
          window.location.reload();
        })
      }
    )
    .catch(error => {
      this.eventAuthError.next(error);
    })
  }

  logout(): void{
     this.afAuth.signOut().then(result =>{
       console.log(result)
        this.storage.clear()
        this.router.navigate(['/log-in']).then(() => {
          window.location.reload();
        })
     }).catch(error => {
      this.eventAuthError.next(error);
    })
  }
}
