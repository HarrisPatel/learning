import { Component, ElementRef, HostListener, Inject, OnInit } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { RestaurantService } from '../service/restaurant.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  fixed: any = false;
  delivery: boolean = true
  empty: any;
  orignalcart: any = [];
  restId: any;
  fullArray: any = [];
  total: any = 0;
  subtotal: any = 0
  price: any = []
  cut = false

  constructor(private service: RestaurantService, private router: Router, private elementRef: ElementRef, @Inject(DOCUMENT) private document: Document) {
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) {
        if (ev.url.includes('restaurant')) {
          this.restId = ev.url.split('/')[2]
          this.calculate()
        }

      }
    });
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
    this.total = this.fullArray.deliveryCharges + this.subtotal
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event) {
    const position = document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (position > 400) {
      this.fixed = true
    } else {
      this.fixed = false
    }
  }

  ngOnInit(): void {
    this.orignalcart = JSON.parse(localStorage.getItem(`cart`) as any);
    console.log(this.orignalcart)
    if (this.orignalcart.length == 0) {
      this.empty = true
    } else {
      this.empty = false
    }
    this.fullArray = JSON.parse(localStorage.getItem(`restaurant`) as any);
    console.log(this.fullArray.deliveryCharges)
    this.calculate()

  }



  callMethod() {
    this.orignalcart = JSON.parse(localStorage.getItem(`cart`));
    console.log(this.orignalcart)
    if (this.orignalcart.length == 0) {
      this.empty = true
    } else {
      this.empty = false
    }
    this.calculate()

  }

  removeCart(index) {
    let cartData = localStorage.getItem('cart');
    if (cartData) {
      let items = JSON.parse(cartData);
      items.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(items));
      this.orignalcart = JSON.parse(localStorage.getItem('cart'));
      if (this.orignalcart.length == 0) {
        this.empty = true
      } else {
        this.empty = false
      }
    }
    this.calculate()

  }
  min(i) {
    this.orignalcart[i].quantity -= 1
    this.orignalcart[i].qunPrice = 0
    this.orignalcart[i].qunPrice = this.orignalcart[i].price * this.orignalcart[i].quantity
    localStorage.setItem('cart', JSON.stringify(this.orignalcart));
    this.calculate()

  }
  plus(i) {
    this.orignalcart[i].quantity += 1
    this.orignalcart[i].qunPrice = 0
    this.orignalcart[i].qunPrice = this.orignalcart[i].price * this.orignalcart[i].quantity
    localStorage.setItem('cart', JSON.stringify(this.orignalcart));
    this.calculate()

  }

  routepayment() {
    this.router.navigate(['/checkout'])
  }

  cutlery() {
    if (this.cut == false) {
      this.cut = true
      this.fullArray.cutlery = this.cut
      localStorage.setItem('restaurant', JSON.stringify(this.fullArray));
      console.log(this.fullArray)
    }
    else {
      this.cut = false
      this.fullArray.cutlery = this.cut
      localStorage.setItem('restaurant', JSON.stringify(this.fullArray));
      console.log(this.fullArray)
    }
  }

}
