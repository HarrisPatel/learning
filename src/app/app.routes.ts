import { Routes } from '@angular/router';
import { RestaurantComponent } from './home/restaurant/restaurant.component';
import { HomeComponent } from './home/home.component';
import { CheckoutComponent } from './checkout/checkout.component';

export const routes: Routes = [
    {
        component: HomeComponent,
        path: ''
    },
    {
        component: RestaurantComponent,
        path: 'restaurant/:id'
    },
    {
        component: CheckoutComponent,
        path: 'checkout'
    },
    
];
