import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomFrmComponent } from './room-frm.component';

describe('RoomFrmComponent', () => {
  let component: RoomFrmComponent;
  let fixture: ComponentFixture<RoomFrmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomFrmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomFrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
