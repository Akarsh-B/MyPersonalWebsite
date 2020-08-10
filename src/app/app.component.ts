import { Component } from '@angular/core';
import {
  faTwitter,
  faFacebook,
  faLinkedinIn,
  faGithub,
  faKaggle,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'MyPersonalWebsite';
  faTwitter = faTwitter;
  faFaceBook = faFacebook;
  faLinkedIn = faLinkedinIn;
  faGithub = faGithub;
  faKaggle = faKaggle;
}
