import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isUser: boolean = false;
  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.auth.user.subscribe((user) => {
      console.log(user);
      if (user) {
        this.isUser = true;
        this.auth.uid = user.uid;
      } else {
        this.isUser = false;
        this.auth.uid = '';
      }
    });
  }

  logout() {
    this.auth.logOut().then(() => {
      console.log('log out');
    });
  }
}
