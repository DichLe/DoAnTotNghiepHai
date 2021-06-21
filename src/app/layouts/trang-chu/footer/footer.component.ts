import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/services/base/base.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent extends BaseComponent implements OnInit {

  constructor(private injector:Injector) {
    super(injector);
  }

  ngOnInit(): void {
  }

}
