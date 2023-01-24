import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FivesComponent } from './fives.component';

describe('FivesComponent', () => {
  let component: FivesComponent;
  let fixture: ComponentFixture<FivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FivesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
