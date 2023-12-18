import { Component, ElementRef, HostListener, Inject, OnInit, ViewChild } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { RestaurantService } from '../../service/restaurant.service';
import { FilterpopularPipe } from '../../pipes/filterpopular.pipe';
import { Filterfood0Pipe } from '../../pipes/filterfood.pipe';
import { FilterdrinksPipe } from '../../pipes/filterdrinks.pipe';
import { CartComponent } from '../../cart/cart.component';

@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [CommonModule, FilterpopularPipe, Filterfood0Pipe, FilterdrinksPipe,CartComponent],
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.css'
})
export class RestaurantComponent implements OnInit {

  menuNav: any;
  restaurantID: any;
  AllRestaurant: any = []
  singleRestaurant: any = []

  Popular: any = []
  firstSection: any = []
  secondSection: any = []
  thirdSection: any = []
  fourthSection: any = []
  fivethSection: any = []
  drinkSection: any = []
  fixed:any = false;


  constructor(private activatedRoute: ActivatedRoute, private router: Router, private service: RestaurantService, private elementRef: ElementRef, @Inject(DOCUMENT) private document: Document) {
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) {
        if (ev.url.includes('restaurant')) {
          this.elementRef.nativeElement.ownerDocument.defaultView.scrollTo(0, 0);
        }
      }
    });
  }
  @ViewChild('topnav', { read: ElementRef }) topnavRef: ElementRef;
  @ViewChild('fix') fix: ElementRef;
  
  public topnav: ElementRef<any>;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event) {
    const position = document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (position > 400) {
      this.fixed = true
    } else {
      this.fixed = false
    }
  }


  ngAfterViewInit(): void {
    this.topnav = this.topnavRef;
  }

  public scrollRight(): void {
    this.topnav.nativeElement.scrollTo({ left: (this.topnav.nativeElement.scrollLeft + 300), behavior: 'smooth' });
  }

  public scrollLeft(): void {
    this.topnav.nativeElement.scrollTo({ left: (this.topnav.nativeElement.scrollLeft - 300), behavior: 'smooth' });
  }
  ngOnInit(): void {
    this.restaurantID = this.activatedRoute.snapshot.paramMap.get('id');
    this.AllRestaurant = this.service.Allrestaurants
    this.singleRestaurant = this.AllRestaurant.filter((item: any) => this.restaurantID == item.id);
    this.menuNav = this.singleRestaurant[0].menu[0].name

  }
  selected_category(category: any, el: any) {
    this.menuNav = category;
    let ele = document.getElementById(el);
    ele.scrollIntoView({behavior: 'smooth'});
  }
  addcart(food:any, restID:any){
    this.service.addCart(food,restID)
    
  }
}

