import { Component, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  constructor( private elementRef: ElementRef){}

  gotop(){
    this.elementRef.nativeElement.ownerDocument.defaultView.scrollTo(0, 0);
  }
}
