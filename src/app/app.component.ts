import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ExampleModule } from './example/example.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet, ExampleModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'change-detection-strategy';
}
