import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarComponent implements OnInit {
  url = environment.url;
  linkFacebook = `https://www.facebook.com/sharer/sharer.php?u=${this.url}`;
  linkWhatApp = `https://api.whatsapp.com/send?text=${this.url}`;
  linkedinApp = `https://www.linkedin.com/sharing/share-offsite/?url=${this.url}`;
  telegramApp = `https://t.me/share/url?url=${this.url}`;

  constructor() {}

  ngOnInit(): void {}
}
