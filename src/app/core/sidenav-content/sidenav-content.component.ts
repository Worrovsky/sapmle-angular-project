import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../toolbar/sidenav.service';

@Component({
  selector: 'app-sidenav-content',
  templateUrl: './sidenav-content.component.html',
  styleUrls: ['./sidenav-content.component.css'],
})
export class SidenavContentComponent implements OnInit {
  constructor(private toolbarService: SidenavService) {}

  ngOnInit(): void {}

  onMenuClick() {
    this.toolbarService.toogleSidenav();
  }
}
