import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvntoryComponent } from './invntory.component';

describe('InvntoryComponent', () => {
  let component: InvntoryComponent;
  let fixture: ComponentFixture<InvntoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvntoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvntoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
