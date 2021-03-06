import { NgxSpinnerService } from 'ngx-spinner';
import { environment } from './../../../environments/environment';
import { AfterViewInit, Component, OnInit } from '@angular/core';
// import { ImagePickerConf } from 'src/app/shared/ngp-image-picker/ngp-image-picker.component';
import { ImagePickerConf } from 'ngp-image-picker';

@Component({
  selector: 'app-image-center',
  templateUrl: './image-center.component.html',
  styleUrls: ['./image-center.component.scss'],
})
export class ImageCenterComponent implements OnInit, AfterViewInit {
  version = environment.version;
  TOTAL_IMAGES = 6;
  imagePickerConf: ImagePickerConf = {
    borderRadius: '8px',
    language: 'en',
    width: '100%',
    aspectRatio: 4 / 3,
    objectFit: 'contain',
    hideDownloadBtn: false,
  };

  galleryImages: any[] = [];
  selectedGalleryImages: any[] = [];

  constructor(private spinner: NgxSpinnerService) {}

  ngOnInit(): void {
    if (window.innerWidth < 800) {
      this.TOTAL_IMAGES = 3;
      this.imagePickerConf = {
        borderRadius: '8px',
        language: 'en',
        height: '180px',
        aspectRatio: 4 / 3,
        width: '100%',
        objectFit: 'contain',
        hideDownloadBtn: false,
      };
    }
    this.createForms();
  }

  ngAfterViewInit(): void {
    this.updateDom();
    this.spinner.hide();
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
        for (let i = 0; i < this.TOTAL_IMAGES; i++) {
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
        for (let i = 0; i < this.TOTAL_IMAGES; i++) {
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

      for (let i = 0; i < this.TOTAL_IMAGES; i++) {
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
      let allIcons = document.querySelectorAll('.image-upload-btn .material-icons');
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
