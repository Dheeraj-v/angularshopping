import { Component, OnInit } from '@angular/core';
import { DonutService } from 'src/app/service/donut.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private donutservice: DonutService) { }

  ngOnInit(): void {
  }

  getCartCount():number{
    return this.donutservice.cart.length;
  }

}
