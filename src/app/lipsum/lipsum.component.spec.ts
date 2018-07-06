import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LipsumComponent } from './lipsum.component';

describe('LipsumComponent', () => {
  let component: LipsumComponent;
  let fixture: ComponentFixture<LipsumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LipsumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LipsumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
