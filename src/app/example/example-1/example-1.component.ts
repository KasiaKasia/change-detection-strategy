import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ParentsExample1Component } from './old/parents-example-1/parents-example-1.component';
import { NewParentsExample1Component } from './new/new-parents-example-1/new-parents-example-1.component';
 @Component({
  selector: 'app-example-1',
  standalone: true,
  imports: [ParentsExample1Component,  ],
  templateUrl: './example-1.component.html',
  styleUrl: './example-1.component.scss',

})
export class Example1Component {
 
}
