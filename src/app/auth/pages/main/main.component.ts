import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../../shared/services/loader/loader.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(public loaderService: LoaderService) { }

  ngOnInit(): void {
  }

  abrir = () => {
      this.loaderService.loader(true);
  }

}
