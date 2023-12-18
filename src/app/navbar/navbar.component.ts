import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RestaurantService } from '../service/restaurant.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{

  address:any;

  constructor(private router:Router,private service:RestaurantService){}
  ngOnInit(): void {
    this.address = this.service.address
  }
  cat = 'delivery'
  selected_category(category:string){
    this.cat = category
  }
  route(){
    this.router.navigate([''])
  }
}
