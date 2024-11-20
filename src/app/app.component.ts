import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EventFormComponent } from './event-form/event-form.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EventFormComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'iot-event-hub';
}
