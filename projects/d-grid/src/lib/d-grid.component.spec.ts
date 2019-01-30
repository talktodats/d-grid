import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DGridComponent } from './d-grid.component';

describe('DGridComponent', () => {
  let component: DGridComponent;
  let fixture: ComponentFixture<DGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
