import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router, NavigationEnd, NavigationError, NavigationCancel, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ngp-image-picker-test';
  //////////////////////////////////////////////////////////

  constructor(private spinner: NgxSpinnerService, private router: Router) {}

  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }
}
