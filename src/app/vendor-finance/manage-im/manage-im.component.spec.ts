import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageImComponent } from './manage-im.component';

describe('ManageImComponent', () => {
  let component: ManageImComponent;
  let fixture: ComponentFixture<ManageImComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageImComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageImComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
