import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoaderComponent } from '../../pages/loader/loader.component';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor(public dialog: MatDialog) { }

  loader = (e: boolean) => {
      if (e) {
        this.dialog.open(LoaderComponent, {
            panelClass: 'transparent',
            disableClose: true
        });
      }
      else {
          this.dialog.closeAll();
      }
      
  }

}
