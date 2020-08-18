import { Component, OnInit, HostListener } from '@angular/core';
import { ScrollSpyModule } from 'ng-scroll-spy';
declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  spyService: any;
  constructor() {}

  public fullName = 'Akarsh Balasubramanyam';
  public Scrolled = false;

  @HostListener('window:scroll')
  public scrollEvent() {
    window.pageYOffset >= 100
      ? (this.Scrolled = true)
      : (this.Scrolled = false);
  }

  ngOnInit(): void {
    $('body').scrollspy({
      target: '#mainNav',
      offset: 100,
    });
  }
}
