import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleComponent } from './example/example.component';
import { Example1Component } from './example-1/example-1.component';
import { NewParentsExample1Component } from './example-1/new/new-parents-example-1/new-parents-example-1.component';

const routes: Routes = [{
  path: '',
  component: ExampleComponent,
  children: [
      {
          path: 'one',
          component: Example1Component
      },
      {
        path: 'second',
        component: NewParentsExample1Component
    } 
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleRoutingModule { }
