import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddImComponent } from './add-im.component';

describe('AddImComponent', () => {
  let component: AddImComponent;
  let fixture: ComponentFixture<AddImComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddImComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddImComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
