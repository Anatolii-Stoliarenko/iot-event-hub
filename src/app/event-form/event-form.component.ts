import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

import {
  DeviceMalfunctionEvent,
  DoorUnlockedEvent,
  Event,
  TemperatureExceededEvent,
} from '../models/event.models';
import { DataGeneratorService } from '../services/data-generator.service';

@Component({
  selector: 'app-event-form',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    FormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './event-form.component.html',
  styleUrl: './event-form.component.scss',
})
export class EventFormComponent {
  eventData:
    | DeviceMalfunctionEvent
    | TemperatureExceededEvent
    | DoorUnlockedEvent = {
    eventType: 'deviceMalfunction',
    deviceId: '',
    eventDate: Date.now(),
    reasonCode: 0,
    reasonText: '',
  } as DeviceMalfunctionEvent;

  selectedEventType:
    | 'deviceMalfunction'
    | 'temperatureExceeded'
    | 'doorUnlocked' = 'deviceMalfunction';

  constructor(private dataGeneratorService: DataGeneratorService) {}

  generateData() {
    this.eventData = this.dataGeneratorService.generateData(
      this.selectedEventType
    );
  }

  submitData() {
    console.log('Sending data to server:', this.eventData);
  }

  onEventTypeChange() {
    switch (this.selectedEventType) {
      case 'deviceMalfunction':
        this.eventData = {
          eventType: 'deviceMalfunction',
          deviceId: '',
          eventDate: Date.now(),
          reasonCode: 0,
          reasonText: '',
        } as DeviceMalfunctionEvent;
        break;
      case 'temperatureExceeded':
        this.eventData = {
          eventType: 'temperatureExceeded',
          deviceId: '',
          eventDate: Date.now(),
          temp: 0,
          treshold: 0,
        } as TemperatureExceededEvent;
        break;
      case 'doorUnlocked':
        this.eventData = {
          eventType: 'doorUnlocked',
          deviceId: '',
          eventDate: Date.now(),
          unlockDate: Date.now(),
        } as DoorUnlockedEvent;
        break;
    }
  }
}
