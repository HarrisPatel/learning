import { CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, ViewChild, ViewEncapsulation, OnInit, Inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { register } from 'swiper/element/bundle';
import { RestaurantService } from '../service/restaurant.service';
import { AndDetailsComponent } from '../and-details/and-details.component'
import { RestaurantComponent } from '../home/restaurant/restaurant.component'
import { FoodFilterComponent } from '../food-filter/food-filter.component';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
register();


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AndDetailsComponent, RestaurantComponent, FoodFilterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  restaurant: any = []
  rating: any;
  sortby: any;
  toprest: any;
  delivery: any;
  vouchers: any
  thecuisines: any
  cuisinesFilter: any = false
  cuisinesarray: any = []

  @ViewChild('widgetsContent', { read: ElementRef }) widgetsContentRef: ElementRef;
  @ViewChild('cuisinesContent', { read: ElementRef }) cuisinesContentRef: ElementRef;

  public widgetsContent: ElementRef<any>;

  public cuisinesContent: ElementRef<any>;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private service: RestaurantService, private elementRef: ElementRef, @Inject(DOCUMENT) private document: Document) {
  }

  ngAfterViewInit(): void {
    this.widgetsContent = this.widgetsContentRef;
    this.cuisinesContent = this.cuisinesContentRef;
  }

  public scrollRight(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft + 300), behavior: 'smooth' });
  }

  public scrollLeft(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft - 300), behavior: 'smooth' });
  }

  public scrollRight1(): void {
    this.cuisinesContent.nativeElement.scrollTo({ left: (this.cuisinesContent.nativeElement.scrollLeft + 300), behavior: 'smooth' });
  }

  public scrollLeft1(): void {
    this.cuisinesContent.nativeElement.scrollTo({ left: (this.cuisinesContent.nativeElement.scrollLeft - 300), behavior: 'smooth' });
  }

  ngOnInit(): void {
    this.restaurant = this.service.Allrestaurants
  }


  dailyDeals = [
    { id: 1, image: '../../assets/images/deal1.jpg' },
    { id: 2, image: '../../assets/images/deal2.jpg' },
    { id: 3, image: '../../assets/images/deal3.jpg' },
    { id: 4, image: '../../assets/images/deal4.jpg' },
    { id: 5, image: '../../assets/images/deal5.jpg' },
    { id: 6, image: '../../assets/images/deal6.jpg' },
    { id: 7, image: '../../assets/images/deal7.jpg' },
  ]
  cuisines = [
    { id: 1, image: '../../assets/images/plate1.jpg', name: 'Biryani' },
    { id: 2, image: '../../assets/images/plate2.jpg', name: 'Pizza' },
    { id: 3, image: '../../assets/images/plate3.jpg', name: 'Burger' },
    { id: 4, image: '../../assets/images/plate4.jpg', name: 'Paratha' },
    { id: 5, image: '../../assets/images/plate5.jpg', name: 'Halwa Puri' },
    { id: 6, image: '../../assets/images/plate6.jpg', name: 'Ice Cream' },
    { id: 7, image: '../../assets/images/plate7.jpg', name: 'Shawarma' },
    { id: 8, image: '../../assets/images/plate8.jpg', name: 'Chinese' },
    { id: 9, image: '../../assets/images/plate9.jpg', name: 'Pasta' },
    { id: 10, image: '../../assets/images/plate10.jpg', name: 'Samosa' },
    { id: 11, image: '../../assets/images/plate11.jpg', name: 'Pulao' },
    { id: 12, image: '../../assets/images/plate12.jpg', name: 'Desserts' },
    { id: 13, image: '../../assets/images/plate13.jpg', name: 'Broast' },
    { id: 14, image: '../../assets/images/plate14.jpg', name: 'Nihari' },
  ]

  openRestaurant(id:any ,r:any) {
    console.log(r)
    localStorage.setItem('restaurant', JSON.stringify(r));
    this.router.navigate(['restaurant/' + id])
  }
  cuisinesFind(id: any) {
    this.restaurant = this.service.Allrestaurants
    const filteredArr = this.restaurant.filter(rest => rest.foodtype.includes(id));
    this.restaurant = filteredArr;
    this.cuisinesFilter = true
    this.elementRef.nativeElement.ownerDocument.defaultView.scrollTo(0, 0);
  }

  receiveSort(event: any) {
    if (event == 'relevance') {
      this.restaurant = this.service.Allrestaurants
      this.cuisinesFilter = false
      this.sortby = event
      console.log(event)
    } else if (event == 'fastestdelivery') {
      this.cuisinesFilter = true
      this.restaurant = this.service.Allrestaurants
      const filteredArr = this.restaurant.filter((rest: any) => rest.fastDelivery == true)
      this.elementRef.nativeElement.ownerDocument.defaultView.scrollTo(0, 0);
      console.log(filteredArr)
      this.sortby = event
      this.restaurant = filteredArr
      console.log(event)
    } else {
      this.cuisinesFilter = true
      this.restaurant = this.service.Allrestaurants
      console.log(event)
      this.sortby = event
    }




  }

  onclear() {
    console.log('clear')
    this.restaurant = this.service.Allrestaurants
    this.cuisinesFilter = false
    this.cuisinesarray = []
  }

  forRating(event1: any) {
    console.log(event1)
    if (event1 == 'Ratings 4+') {
      const filteredArr = this.restaurant.filter((rest: any) => rest.rating >= 4.0)
      console.log(filteredArr)
      this.restaurant = filteredArr
      this.rating = event1
      this.cuisinesFilter = true
      this.elementRef.nativeElement.ownerDocument.defaultView.scrollTo(0, 0);

    } else {
      this.restaurant = this.service.Allrestaurants
      this.receiveSort(this.sortby)
      if (this.toprest == 'Top Restaurant') {
        this.fortopRest(this.toprest)
      }
      if (this.delivery == 'freeDelivery') {
        this.forfreeDelivery(this.delivery)
      }
      if (this.vouchers == 'vouchers') {
        this.acpVouchers(this.vouchers)
      }
      console.log(event1)
      this.cuisinesFilter = true
      this.rating = event1
    }

  }

  fortopRest(event) {
    if (event == 'Top Restaurant') {
      const filteredArr = this.restaurant.filter((rest: any) => rest.topRest == true)
      console.log(filteredArr)
      this.restaurant = filteredArr
      this.toprest = event
      this.cuisinesFilter = true
      this.elementRef.nativeElement.ownerDocument.defaultView.scrollTo(0, 0);

    } else {
      this.restaurant = this.service.Allrestaurants
      this.receiveSort(this.sortby)
      console.log(event)
      this.toprest = event
      if (this.rating == 'Ratings 4+') {
        this.forRating(this.rating)
      }
      if (this.delivery == 'freeDelivery') {
        this.forfreeDelivery(this.delivery)
      }
      if (this.vouchers == 'vouchers') {
        this.acpVouchers(this.vouchers)
      }
      this.cuisinesFilter = true
    }
  }


  forfreeDelivery(event1: any) {

    if (event1 == 'freeDelivery') {
      const filteredArr = this.restaurant.filter((rest: any) => rest.freeDelivery == true)
      console.log(filteredArr)
      this.restaurant = filteredArr
      this.delivery = event1
      this.elementRef.nativeElement.ownerDocument.defaultView.scrollTo(0, 0);

    } else {
      this.restaurant = this.service.Allrestaurants
      this.receiveSort(this.sortby)
      if (this.rating == 'Ratings 4+') {
        this.forRating(this.rating)
      }
      if (this.toprest == 'Top Restaurant') {
        this.fortopRest(this.toprest)
      }
      if (this.vouchers == 'vouchers') {
        this.acpVouchers(this.vouchers)
      }
      console.log(event1)
      this.cuisinesFilter = true
      this.delivery = event1
    }

  }

  acpVouchers(event) {
    console.log(event)
    if (event == 'vouchers') {
      const filteredArr = this.restaurant.filter((rest: any) => rest.vouchers == true)
      console.log(filteredArr)
      this.restaurant = filteredArr
      this.vouchers = event
      this.cuisinesFilter = true
      this.elementRef.nativeElement.ownerDocument.defaultView.scrollTo(0, 0);

    } else {
      this.restaurant = this.service.Allrestaurants
      this.receiveSort(this.sortby)
      console.log(event)
      this.vouchers = event
      if (this.rating == 'Ratings 4+') {
        this.forRating(this.rating)
      }
      if (this.toprest == 'Top Restaurant') {
        this.fortopRest(this.toprest)
      }
      if (this.delivery == 'freeDelivery') {
        this.forfreeDelivery(this.delivery)
      }
      this.cuisinesFilter = true
    }
  }

  forcuisines(event: any) {
  
    if( event.length > 0) {
      let filteredArr = []
      filteredArr = this.restaurant.filter((rest: any) => rest.foodtype.includes(event[event.length - 1]));
      filteredArr.forEach((val: any) => {
        this.cuisinesarray.push(val);
      })
      console.log(this.cuisinesarray)
      this.restaurant = this.cuisinesarray
      this.cuisinesFilter = true
      this.elementRef.nativeElement.ownerDocument.defaultView.scrollTo(0, 0);

    }
    else {
      this.restaurant = this.service.Allrestaurants
      this.receiveSort(this.sortby)
      console.log(event)
      if (this.toprest == 'Ratings 4+') {
        this.forRating(this.rating)
        console.log(this.toprest)
      }
      if (this.toprest == 'Top Restaurant') {
        this.fortopRest(this.toprest)
        console.log(this.toprest)

      }
      if (this.toprest == 'freeDelivery') {
        this.forfreeDelivery(this.delivery)
      }
      if (this.toprest == 'vouchers') {
        this.acpVouchers(this.vouchers)
      }
      this.thecuisines = event
      this.cuisinesFilter = true
    }

  }

}

