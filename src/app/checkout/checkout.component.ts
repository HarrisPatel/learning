import { Component, ElementRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { RestaurantService } from '../service/restaurant.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit {

  address: any;
  total: number;
  subtotal: number;
  price: any[];
  orignalcart: any;
  fullArray: any;
  rider: any;
  details: FormGroup

  constructor(private router: Router, private service: RestaurantService, private elementRef: ElementRef) {
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) {
        if (ev.url.includes('checkout')) {
          this.elementRef.nativeElement.ownerDocument.defaultView.scrollTo(0, 0);
        }
      }
    });
    this.details = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.pattern(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i)]),
      fname: new FormControl("", [Validators.required]),
      lname: new FormControl("", [Validators.required]),
      number: new FormControl("", [Validators.required])
    });

  }

  get email() {
    return this.details.get("email")
  }
  get fname() {
    return this.details.get("fname")
  }
  get lname() {
    return this.details.get("lname")
  }
  get number() {
    return this.details.get("number")
  }
  
  ngOnInit(): void {
    this.address = this.service.address
    this.orignalcart = JSON.parse(localStorage.getItem('cart'))
    this.fullArray = JSON.parse(localStorage.getItem('restaurant'))
    console.log(this.fullArray)
    this.calculate()
  }

  calculate() {
    this.total = 0;
    this.subtotal = 0
    this.price = []
    for (let I = 0; I < this.orignalcart.length; I++) {
      let temprice = this.orignalcart[I]
      if (temprice.qunPrice == 0) {
        this.price.push(temprice.price)
      }
      else {
        this.price.push(temprice.qunPrice)
      }
    }
    let sum1 = this.price.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);
    this.subtotal = sum1
    this.total = this.fullArray.deliveryCharges + this.subtotal + this.fullArray.servicefee + this.fullArray.riderTip
  }
  selectTip(value: number) {
    this.rider = value
    this.fullArray.riderTip = 0
    this.fullArray.riderTip = value
    localStorage.setItem('cart', JSON.stringify(this.orignalcart));
    this.calculate()
  }


}
