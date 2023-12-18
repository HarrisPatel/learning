import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../app/navbar/navbar.component'
import { HomeComponent } from '../app/home/home.component'
import { FooterComponent } from '../app/footer/footer.component'
import { RestaurantService } from '../app/service/restaurant.service'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HomeComponent,RouterOutlet,NavbarComponent,FooterComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'foodPanda';
}
