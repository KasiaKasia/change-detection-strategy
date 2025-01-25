import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { Object } from '../parents-example-1/parents-example-1.component';

@Component({
  selector: 'app-child-example-1',
  standalone: true,
  imports: [],
  templateUrl: './child-example-1.component.html',
  styleUrl: './child-example-1.component.scss',
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildExample1Component {
  @Input() childObject: Object = {
    value: 'Child object',
  };

  constructor(public cdr: ChangeDetectorRef) { }

  assingningANewObjectCHILD() {
    this.childObject = { value: 'change memory address CHILD' };
  }

  modifyingThePropertiesOfAnExistingObjectCHILD() {
    this.childObject.value = 'modifying object properties CHILD';
  }


  default() {
    //  ChangeDetectionStrategy.Default
    console.info('Switching to Default Change Detection');
    this.cdr.reattach(); // Włącza automatyczne monitorowanie zmian
  }

  onPush() {
    // ChangeDetectionStrategy.OnPush
    console.info('Switching to OnPush Change Detection');
    this.cdr.markForCheck();
  }
}
