import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewParentsExample1Component } from './new-parents-example-1.component';

describe('NewParentsExample1Component', () => {
  let component: NewParentsExample1Component;
  let fixture: ComponentFixture<NewParentsExample1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewParentsExample1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewParentsExample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
