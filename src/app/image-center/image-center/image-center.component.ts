import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { ImagePickerConf } from 'src/app/shared/ngp-image-picker/ngp-image-picker.component';

@Component({
  selector: 'app-image-center',
  templateUrl: './image-center.component.html',
  styleUrls: ['./image-center.component.scss'],
})
export class ImageCenterComponent implements OnInit {
  config: ImagePickerConf = {
    borderRadius: '16px',
    height: '480px',
    width: '100%',
    compressInitial: true,
    language: 'en',
  };
  version = environment.version;
  url = environment.url;
  linkFacebook = `https://www.facebook.com/sharer/sharer.php?u=${this.url}`;
  linkLinkedin = `https://www.linkedin.com/shareArticle?mini=true&amp;url=${this.url}&amp;title=7 Marketing Skills You Need To Get A Promotion&amp;summary=Are you vying for a promotion`;
  linkWhatApp = `https://api.whatsapp.com/send?text=${this.url}`;
  linkTelegram = `https://t.me/share/url?url=${this.url}`;
  constructor() {}

  ngOnInit(): void {}

  onChangeImage(data): void {}

  onGetOriginalImage(data): void {}
}
