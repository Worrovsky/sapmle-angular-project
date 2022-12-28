import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidenavService {
  subject = new Subject<boolean>();

  constructor() {}

  toogleSidenav() {
    this.subject.next(true);
  }
}
