import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildExample1Component } from './child-example-1.component';

describe('ChildExample1Component', () => {
  let component: ChildExample1Component;
  let fixture: ComponentFixture<ChildExample1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildExample1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildExample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
