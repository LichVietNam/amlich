import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmlichComponent } from './amlich.component';

describe('AmlichComponent', () => {
  let component: AmlichComponent;
  let fixture: ComponentFixture<AmlichComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmlichComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmlichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
