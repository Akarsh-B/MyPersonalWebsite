import { Component, OnInit } from '@angular/core';
import {
  faFileDownload,
  faHandPointDown,
} from '@fortawesome/free-solid-svg-icons';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss'],
})
export class IntroductionComponent implements OnInit {
  constructor(private footer: FooterComponent) {}

  public fileIcon = faFileDownload;
  public handDownIcon = faHandPointDown;

  // Social Media Icons
  public faTwitterIcon = this.footer.faTwitterIcon;
  public faFaceBookIcon = this.footer.faFaceBookIcon;
  public faLinkedInIcon = this.footer.faLinkedInIcon;
  public faGithubIcon = this.footer.faGithubIcon;
  public faKaggleIcon = this.footer.faKaggleIcon;

  // Social Media URL's
  public twitterURL = this.footer.twitterURL;
  public faceBookURl = this.footer.faceBookURl;
  public linkedInURL = this.footer.linkedInURL;
  public gitHubURL = this.footer.gitHubURL;
  public kaggleURL = this.footer.kaggleURL;

  ngOnInit(): void {}
}
