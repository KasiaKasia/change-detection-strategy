import { ChangeDetectionStrategy, Component, computed, effect, inject, input } from '@angular/core';
import { NewParentsExample1Component, ObjectForInput } from '../new-parents-example-1/new-parents-example-1.component';

@Component({
  selector: 'app-new-child-example-1',
  standalone: true,
  imports: [],
  templateUrl: './new-child-example-1.component.html',
  styleUrl: './new-child-example-1.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class NewChildExample1Component {
  objectForInput = input<ObjectForInput>();
  newParentsExample1Component = inject(NewParentsExample1Component)
  
  childUpdateSignal() {
    this.newParentsExample1Component.objectForInput.set({ value: 'child', component: 'Child' });
  }
}
