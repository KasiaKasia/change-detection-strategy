import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { NewChildExample1Component } from '../new-child-example-1/new-child-example-1.component';
import { RouterModule } from '@angular/router';
export interface ObjectForInput {
  value: string;
  component?: string;
}
@Component({
  selector: 'app-new-parents-example-1',
  standalone: true,
  imports: [NewChildExample1Component,RouterModule],
  templateUrl: './new-parents-example-1.component.html',
  styleUrl: './new-parents-example-1.component.scss',
 // changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewParentsExample1Component {
  objectForInput = signal<ObjectForInput>({ value: 'initial PARENT ' });
 
  parentsUpdateSignal() {
    this.objectForInput.set({ value: ' update signal' });
  }  
}
