import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndDetailsComponent } from './and-details.component';

describe('AndDetailsComponent', () => {
  let component: AndDetailsComponent;
  let fixture: ComponentFixture<AndDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AndDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AndDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
