import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
 
@Component({
  selector: 'app-welcome',
  templateUrl: 'welcome.page.html',
  styleUrls: ['welcome.page.scss'],
})
export class WelcomePage {
  username: string;
 
  constructor(private route: ActivatedRoute) {
    this.username = this.route.snapshot.paramMap.get('username')!;
  }
}