import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChangerComponent } from './add-changer.component';

describe('AddChangerComponent', () => {
  let component: AddChangerComponent;
  let fixture: ComponentFixture<AddChangerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddChangerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddChangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
