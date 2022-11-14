import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Donutdetail } from 'src/app/models/donutdetail';
import { DonutService } from 'src/app/service/donut.service';

@Component({
  selector: 'app-pdp',
  templateUrl: './pdp.component.html',
  styleUrls: ['./pdp.component.css']
})
export class PdpComponent implements OnInit {
  
  donutDetail:Donutdetail = {} as Donutdetail;
  constructor(private donutService: DonutService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    let params = this.route.snapshot.paramMap;
    let id:number = Number(params.get("id"));

    this.donutService.getDonutById(id).subscribe((resp:Donutdetail)=>{
          console.log(resp)
          this.donutDetail = resp;
    })

  }
  addItem():void{
    this.donutService.addCart(this.donutDetail);
  }

}
