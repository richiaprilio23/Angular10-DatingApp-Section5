import { Component, OnInit } from '@angular/core';
import { error } from 'protractor';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any ={}
  // loggedIn: boolean;
  currentUser$: Observable<User>;

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    // this.getCurrentUser();
    this.currentUser$ = this.accountService.currentUser$;
  }

  login()
  {
    // console.log(this.model);
    this.accountService.login(this.model).subscribe(response => {
      console.log(response);
      // this.loggedIn = true;
    }, error =>{
      console.log(error);
    }
    )
  }

  logout()
  {
    this.accountService.logout();
    // this.loggedIn = false;
  }

  // getCurrentUser()
  // {
  //   this.accountService.currentUser$.subscribe(user =>{
  //     this.loggedIn = !!user; //tanda ! mnjd 1 miliyar user
  //   }, error =>{
  //     console.log(error);
  //   }
  //   )
  // }
}
