import { Component, HostListener, OnInit } from '@angular/core';
import { SidenavService } from './sidenav.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  constructor(private toolbarService: SidenavService) {}

  ngOnInit(): void {}

  toggleForMenuClick() {
    this.toolbarService.toogleSidenav();
  }

  @HostListener('window:keydown.control.b', ['$event'])
  doSmthng(e: KeyboardEvent) {
    e.preventDefault();
    this.toggleForMenuClick();
  }
}
