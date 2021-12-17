import { environment } from './../../../environments/environment';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ImagePickerConf } from 'src/app/shared/ngp-image-picker/ngp-image-picker.component';

@Component({
  selector: 'app-image-center',
  templateUrl: './image-center.component.html',
  styleUrls: ['./image-center.component.scss'],
})
export class ImageCenterComponent implements OnInit, AfterViewInit {
  version = environment.version;
  url = environment.url;
  linkFacebook = `https://www.facebook.com/sharer/sharer.php?u=${this.url}`;
  // linkLinkedin = `https://www.linkedin.com/shareArticle?mini=true&amp;url=${this.url}&amp;title=7 Marketing Skills You Need To Get A Promotion&amp;summary=Are you vying for a promotion`;
  linkWhatApp = `https://api.whatsapp.com/send?text=${this.url}`;
  // linkTelegram = `https://t.me/share/url?url=${this.url}`;
  imagePickerConf: ImagePickerConf = {
    borderRadius: '8px',
    language: 'en',
    height: '250px',
    width: '220px',
    hideDownloadBtn: false,
  };

  galleryImages: any[] = [];
  selectedGalleryImages: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.createForms();
    if (window.innerWidth < 800) {
      this.imagePickerConf = {
        borderRadius: '8px',
        language: 'en',
        height: '170px',
        width: '150px',
        hideDownloadBtn: false,
      };
    }
  }

  ngAfterViewInit(): void {
    this.updateDom();
  }

  createForms(data?) {
    try {
      if (data) {
        let object = {
          image: '',
          isMain: false,
          fkModel: 'Event',
          id: null,
          uuid: null,
        };
        for (let i = 0; i < 6; i++) {
          if (data?.galeryImages[i]) {
            this.galleryImages.push({ ...data?.galeryImages[i] });
          } else {
            this.galleryImages.push({ ...object });
          }
        }
      } else {
        let object = {
          image: '',
          isMain: false,
          fkModel: 'Event',
          id: null,
          uuid: null,
        };
        for (let i = 0; i < 6; i++) {
          object.uuid = i;
          this.galleryImages.push({ ...object });
        }
      }
    } catch (errr) {
      let object = {
        image: '',
        isMain: false,
        fkModel: 'Event',
        id: null,
        uuid: null,
      };

      for (let i = 0; i < 6; i++) {
        object.uuid = i;
        this.galleryImages.push({ ...object });
      }
    }
    this.selectedGalleryImages = JSON.parse(JSON.stringify(this.galleryImages) || '[]');
  }

  onImageChange(dataSrc, index) {
    this.selectedGalleryImages[index].image = dataSrc;
    this.selectedGalleryImages[index].isFromClone = false;

    this.updateDom();
  }

  updateDom() {
    let c = setTimeout(() => {
      let allIcons = document.querySelectorAll('.image-upload-btn .mat-icon');
      allIcons.forEach((x: any) => {
        x.innerText = 'wallpaper';
      });
      clearTimeout(c);
    }, 50);
  }

  onDownloadAll() {
    let allDownloadBtn = document.querySelectorAll('.editing-bar-btn #download-img');
    allDownloadBtn.forEach((x: HTMLElement) => {
      x.click();
    });
  }

  onRemoveAll() {
    let allDownloadBtn = document.querySelectorAll('.editing-bar-btn #delete-img');
    allDownloadBtn.forEach((x: HTMLElement) => {
      x.click();
    });
  }
}
