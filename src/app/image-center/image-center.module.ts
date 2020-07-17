import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageCenterRoutingModule } from './image-center-routing.module';
import { ImageCenterComponent } from './image-center/image-center.component';
import { NgpImagePickerModule } from './../shared/ngp-image-picker/ngp-image-picker.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [ImageCenterComponent],
  imports: [
    CommonModule,
    ImageCenterRoutingModule,
    NgpImagePickerModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatMenuModule,
  ],
})
export class ImageCenterModule {}
