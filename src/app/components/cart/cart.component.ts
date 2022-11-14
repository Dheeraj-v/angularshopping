import { Component, OnInit } from '@angular/core';
import { Donutdetail } from 'src/app/models/donutdetail';
import { DonutService } from 'src/app/service/donut.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart:Donutdetail[] = [];
  constructor(private donutService: DonutService) { }

  ngOnInit(): void {
    this.cart = this.donutService.getCart();
    console.log('getItem', this.cart)

  }
  getCartDistinct():Donutdetail[] {
    return [...new Map(this.cart.map(item =>[item.id, item])).values()];
  }

  deleteItem(d:Donutdetail):void{
    this.donutService.removeCart(d);
  }


  getCalories():number{
    return this.cart.reduce((t,c) => t += c.calories,0);
  }

  getTotal():number{
    return this.cart.length;
  }

  getQuantity(donut:Donutdetail):number{
    return this.cart.reduce((t,c) =>{
      if(c.id == donut.id){
        return t+1;
      }
      else{
        return t;
      }
    } ,0)
  }
}
