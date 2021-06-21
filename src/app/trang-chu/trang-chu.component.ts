import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from '../services/base/base.component';

@Component({
  selector: 'app-trang-chu',
  templateUrl: './trang-chu.component.html',
  styleUrls: ['./trang-chu.component.css']
})
export class TrangChuComponent extends BaseComponent implements OnInit {

  constructor(private injector:Injector) {
    super(injector);
  }

  ngOnInit(): void {
  }

}
