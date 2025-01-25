import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentsExample1Component } from './parents-example-1.component';

describe('ParentsExample1Component', () => {
  let component: ParentsExample1Component;
  let fixture: ComponentFixture<ParentsExample1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentsExample1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentsExample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
