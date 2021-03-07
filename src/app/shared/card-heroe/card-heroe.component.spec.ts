import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHeroeComponent } from './card-heroe.component';

describe('CardHeroeComponent', () => {
  let component: CardHeroeComponent;
  let fixture: ComponentFixture<CardHeroeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardHeroeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardHeroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
