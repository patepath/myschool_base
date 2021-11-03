import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviorFrmComponent } from './behavior-frm.component';

describe('BehaviorFrmComponent', () => {
  let component: BehaviorFrmComponent;
  let fixture: ComponentFixture<BehaviorFrmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BehaviorFrmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BehaviorFrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
