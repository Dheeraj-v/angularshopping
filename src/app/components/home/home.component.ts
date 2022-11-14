import { Component, OnInit } from '@angular/core';
import { Donutlist } from 'src/app/models/donutlist';
import { DonutService } from 'src/app/service/donut.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  donutList:Donutlist = {} as Donutlist;
  constructor(private donutService: DonutService) { }

  ngOnInit(): void {
    this.donutService.getAllDonuts().subscribe((response:Donutlist)=>{
      console.log(response);
      this.donutList = response;
    })
  }

}
