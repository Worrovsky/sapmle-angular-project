import { AfterViewInit, Component, OnInit } from '@angular/core';
import { PRIMARY_COLOR } from '../../style';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  primaryColor: string;

  constructor() {}

  ngOnInit(): void {
    this.primaryColor = PRIMARY_COLOR;
  }
}
