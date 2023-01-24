import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerSecondComponent } from './inner-second.component';

describe('InnerSecondComponent', () => {
  let component: InnerSecondComponent;
  let fixture: ComponentFixture<InnerSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnerSecondComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InnerSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
