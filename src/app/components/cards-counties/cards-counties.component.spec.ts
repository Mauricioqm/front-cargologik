import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsCountiesComponent } from './cards-counties.component';

describe('CardsCountiesComponent', () => {
  let component: CardsCountiesComponent;
  let fixture: ComponentFixture<CardsCountiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsCountiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsCountiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
