import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Donutdetail } from '../models/donutdetail';
import { Donutlist } from '../models/donutlist';

@Injectable({
  providedIn: 'root'
})
export class DonutService {

  cart:Donutdetail[] = [];

  getCart():Donutdetail[]{
    return this.cart;
  }
  addCart(d:Donutdetail){
    this.cart.push(d);
    console.log('pushed', this.cart);
  }

  removeCart(d:Donutdetail){
    const index:number= this.cart.findIndex(eachItem => eachItem == d);
    this.cart.splice(index,1);
  }


  url:string = "https://grandcircusco.github.io/demo-apis/donuts";
  ending:string = ".json";

  constructor(private http:HttpClient) { }

  getAllDonuts():Observable<Donutlist>{
    return this.http.get<Donutlist>(`${this.url}${this.ending}`);
  }
  getDonutById(id:number):Observable<Donutdetail>{
    return this.http.get<Donutdetail>(`${this.url}/${id}${this.ending}`);
  }

}
