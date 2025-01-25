import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { ChildExample1Component } from '../child-example-1/child-example-1.component';

export interface Object {
  value: string;
  component?: string;
}


@Component({
  selector: 'app-parents-example-1',
  standalone: true,
  imports: [ChildExample1Component],
  templateUrl: './parents-example-1.component.html',
  styleUrl: './parents-example-1.component.scss',
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentsExample1Component {

  parentObject: Object = { value: 'initial value PARENTS' };

  constructor(private cdr: ChangeDetectorRef) { }

  assingningANewObjectPARENTS() {
    this.parentObject = { value: 'change memory address PARENTS' };
  } 

  modifyingThePropertiesOfAnExistingObjectPARENTS() {
    this.parentObject.value = 'modifying object properties PARENTS';
  }

  default() {
    // ChangeDetectionStrategy.Default
    console.info('Switching to Default Change Detection');
    this.cdr.reattach(); 
  }

  onPush() {
    // ChangeDetectionStrategy.OnPush
    console.info('Switching to OnPush Change Detection');
    this.cdr.markForCheck();
  }

}
