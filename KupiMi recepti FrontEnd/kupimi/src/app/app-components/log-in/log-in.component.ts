import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  
  constructor(
    private router: Router,
    private authService: AuthService,
    private notifyService: NotificationService
  ) { }

  ngOnInit(): void {
    this.authService.eventAuthError$.subscribe(data => {
      console.log(data);
    })
  }

  logIn(logIn: FormGroup): void{
    if(logIn.value.checked === true){
      this.authService.createUser(logIn.value, logIn.value.password);
      this.notifyService.showSuccess("User is created successfully!", "KupiMi.com");
    }else{
      this.authService.login(logIn.value.email,logIn.value.password);
    }
  }

  logOut(){
    this.authService.logout;

  }

  public goToRegister(): void{
    this.router.navigate(['/register'])
  }



}
