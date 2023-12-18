import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-food-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './food-filter.component.html',
  styleUrl: './food-filter.component.css'
})
export class FoodFilterComponent {

  @Output() onSort = new EventEmitter<any>()
  @Output() onclear = new EventEmitter<any>()
  @Output() forRating = new EventEmitter<any>()
  @Output() fortopRest = new EventEmitter<any>()
  @Output() forfreeDelivery = new EventEmitter<any>()
  @Output() forvouchers = new EventEmitter<any>()
  @Output() forcuisines = new EventEmitter<any>()

  constructor(private router: Router, private route: ActivatedRoute) { }
  cheap: any = false;
  medium: any = false;
  expensive: any = false;
  delivery: any = false;
  vouchers: any = false;
  rating: any = false;
  toprest: any = false;
  sortbycheck = 'relevance'
  deliverycheck = null
  voucherscheck = null
  cuisinesarry: any = [];
  cuisinescheck: any;

  cuisinesngmodel: any;


  priceCheap() {
    if (this.cheap !== true) {
      this.cheap = true
    } else {
      this.cheap = false
    }
  }
  priceMedium() {
    if (this.medium !== true) {
      this.medium = true
    } else {
      this.medium = false
    }
  }
  priceExpensive() {
    if (this.expensive !== true) {
      this.expensive = true
    } else {
      this.expensive = false
    }
  }
  rating4(event) {
    
    if (this.rating !== true) {
      this.rating = true
      this.forRating.emit(event.target.innerHTML)
    } else {
      this.rating = false
      this.forRating.emit('nothing')
    }
  }
  topRest(event) {
    if (this.toprest !== true) {
      this.toprest = true
      this.fortopRest.emit(event.target.innerHTML)
    } else {
      this.toprest = false
      this.fortopRest.emit('nothing')
    }
  }
  freeDelivery(event) {
    if (this.delivery !== true) {
      this.delivery = true
      this.forfreeDelivery.emit(event.target.value)
    } else {
      this.delivery = false
      this.forfreeDelivery.emit('nothing')
    }
  }
  acpVouchers(event) {
    console.log(event)
    if (this.vouchers !== true) {
      this.vouchers = true
      this.forvouchers.emit(event.target.value)
    } else {
      this.vouchers = false
      this.forvouchers.emit('nothing')
    }
  }

  cuisines = [
    { id: 1, image: '../../assets/images/plate1.jpg', name: 'Biryani', checked: false },
    { id: 2, image: '../../assets/images/plate2.jpg', name: 'Pizza', checked: false },
    { id: 3, image: '../../assets/images/plate3.jpg', name: 'Burger', checked: false },
    { id: 4, image: '../../assets/images/plate4.jpg', name: 'Paratha', checked: false },
    { id: 5, image: '../../assets/images/plate5.jpg', name: 'Halwa Puri', checked: false },
    { id: 6, image: '../../assets/images/plate6.jpg', name: 'Ice Cream', checked: false },
    { id: 7, image: '../../assets/images/plate7.jpg', name: 'Shawarma', checked: false },
    { id: 8, image: '../../assets/images/plate8.jpg', name: 'Chinese', checked: false },
    { id: 9, image: '../../assets/images/plate9.jpg', name: 'Pasta', checked: false },
    { id: 10, image: '../../assets/images/plate10.jpg', name: 'Samosa', checked: false },
    { id: 11, image: '../../assets/images/plate11.jpg', name: 'Pulao', checked: false },
    { id: 12, image: '../../assets/images/plate12.jpg', name: 'Desserts', checked: false },
    { id: 13, image: '../../assets/images/plate13.jpg', name: 'Broast', checked: false },
    { id: 14, image: '../../assets/images/plate14.jpg', name: 'Nihari', checked: false },
  ]

  sortby(event: any) {
    this.onSort.emit(event.target.value)
    if (event = 'relevance') {
      this.rating = false;
      this.toprest = false;
    } else if (event = 'fastestdelivery') {
      this.rating = false;
      this.toprest = false;
    }
  }

  cuisinesfilter(event: any) {
    if (event.target.checked == true) {
      this.cuisinesarry.push(event.target.value)
      this.forcuisines.emit(this.cuisinesarry)
    } else {
      event.target.checked == false
      const index = this.cuisinesarry.indexOf(event.target.value);
      this.cuisinesarry.splice(index, 1);
      this.forcuisines.emit(this.cuisinesarry)
    }


  }
  clearall() {
    this.onclear.emit()
    this.cheap = false;
    this.medium = false;
    this.expensive = false;
    this.rating = false;
    this.toprest = false;
    this.delivery = false
    this.sortbycheck = 'relevance'
    this.deliverycheck = null
    this.voucherscheck = null
    this.cuisinesarry = []
    this.cuisinescheck = null;
    this.cuisines.forEach((val:any) =>{
      console.log(val)
      val.checked = false
    })

  }
}
