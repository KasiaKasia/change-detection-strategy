import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewChildExample1Component } from './new-child-example-1.component';

describe('NewChildExample1Component', () => {
  let component: NewChildExample1Component;
  let fixture: ComponentFixture<NewChildExample1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewChildExample1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewChildExample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
