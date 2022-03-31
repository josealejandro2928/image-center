import { ToolbarComponent } from './../components/toolbar/toolbar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageCenterRoutingModule } from './image-center-routing.module';
import { ImageCenterComponent } from './image-center/image-center.component';
import { NgpImagePickerModule } from 'ngp-image-picker';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [ImageCenterComponent, ToolbarComponent],
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
