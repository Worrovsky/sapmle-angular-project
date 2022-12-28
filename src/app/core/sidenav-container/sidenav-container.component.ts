import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Subscription } from 'rxjs';
import { SidenavService } from '../toolbar/sidenav.service';

@Component({
  selector: 'app-sidenav-container',
  templateUrl: './sidenav-container.component.html',
  styleUrls: ['./sidenav-container.component.css'],
})
export class SidenavContainerComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor(private toolbarService: SidenavService) {
    this.subscription = toolbarService.subject.subscribe((_) => {
      this.sidenav.toggle();
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
