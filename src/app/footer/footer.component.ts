import { Component, OnInit } from '@angular/core';
import {
  faTwitter,
  faFacebook,
  faLinkedinIn,
  faGithub,
  faKaggle,
} from '@fortawesome/free-brands-svg-icons';
import {
  faMapMarkerAlt,
  faEnvelopeOpenText,
  faMobileAlt,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor() {}

  // Social Media Icons
  public faTwitterIcon = faTwitter;
  public faFaceBookIcon = faFacebook;
  public faLinkedInIcon = faLinkedinIn;
  public faGithubIcon = faGithub;
  public faKaggleIcon = faKaggle;
  public mapMarkerAltIcon = faMapMarkerAlt;
  public mailIcon = faEnvelopeOpenText;
  public mobileIcon = faMobileAlt;

  // Social Media URL's
  public twitterURL = 'https://twitter.com/iamakarshb';
  public faceBookURl = 'https://www.facebook.com/Akarsh.Balasubramanyam';
  public linkedInURL = 'https://www.linkedin.com/in/akarsh-b/';
  public gitHubURL = 'https://github.com/Akarsh-B';
  public kaggleURL = 'https://www.kaggle.com/akarshb';

  // Contact Details
  public personalEmail = 'akarshbalu@gmail.com';
  public uicEmail = 'abalas26@uic.edu';
  public contactNumber = '+1 (773) 744-4763';
  public addressLine1 = '914 #1 South Oakley Boulevard';
  public cityState = 'Chicago - IL';
  public country = 'United States of America';

  ngOnInit(): void {}
}
