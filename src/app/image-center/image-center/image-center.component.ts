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
  constructor() {}

  ngOnInit(): void {}

  onChangeImage(data): void {}

  onGetOriginalImage(data): void {}
}
