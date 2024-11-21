import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { HttpErrorResponse } from '@angular/common/http';

import {
  DeviceMalfunctionEvent,
  DoorUnlockedEvent,
  ErrorResponse,
  EventType,
  SuccessResponse,
  TemperatureExceededEvent,
} from '../models/event.models';
import { DataGeneratorService } from '../services/data-generator.service';
import { ApiService } from '../services/api.service';

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
  eventData: EventType = {
    eventType: 'deviceMalfunction',
    deviceId: '',
    eventDate: Date.now(),
    reasonCode: 0,
    reasonText: '',
  } as DeviceMalfunctionEvent;

  apiBaseUrl: string = 'http://127.0.0.1:8000';

  selectedEventType:
    | 'deviceMalfunction'
    | 'temperatureExceeded'
    | 'doorUnlocked' = 'deviceMalfunction';

  serverResponse: SuccessResponse | null = null;
  errorMessage: string = '';
  validationErrors: string[] = [];

  eventDataText: string = JSON.stringify(this.eventData, null, 2);

  constructor(
    private dataGeneratorService: DataGeneratorService,
    private apiService: ApiService
  ) {
    this.apiService.setBaseUrl(this.apiBaseUrl);
  }

  // Aktualizuje dane JSON na podstawie zmian w polach input
  updateEventDataText() {
    this.eventDataText = JSON.stringify(this.eventData, null, 2);
  }

  // Aktualizuje obiekt eventData na podstawie edycji w textarea
  updateEventData() {
    try {
      this.eventData = JSON.parse(this.eventDataText);
    } catch (error) {
      console.error('Invalid JSON:', error);
      // Możesz dodać komunikat błędu, aby poinformować użytkownika
    }
  }

  adjustTextareaHeight(event: Event): void {
    const textarea = event.target as HTMLTextAreaElement;
    textarea.style.height = 'auto'; // Resetujemy wysokość
    textarea.style.height = Math.max(textarea.scrollHeight, 115) + 'px'; // Ustawiamy wysokość w zależności od zawartości
  }

  updateApiBaseUrl() {
    this.apiService.setBaseUrl(this.apiBaseUrl);
  }

  generateData() {
    this.eventData = this.dataGeneratorService.generateData(
      this.selectedEventType
    );

    this.updateEventDataText(); // Synchronizuj textarea po generacji
  }

  submitData() {
    console.log('Sending data to server:', this.eventData);

    this.apiService.sendEventData(this.eventData).subscribe(
      (response) => {
        console.log('Data successfully sent to server:', response);
        this.serverResponse = response;
        this.errorMessage = '';
        this.validationErrors = []; // Czyścimy błędy walidacyjne
      },
      (error: HttpErrorResponse) => {
        console.error(
          `POST ${error.url} ${error.status} (${error.statusText})`
        );

        this.serverResponse = null;
        this.errorMessage = 'Error sending data to server';
        this.validationErrors = []; // Resetujemy listę błędów

        // Obsługa błędów walidacyjnych
        if (error.error && error.error.errors) {
          const validationError: ErrorResponse = error.error;

          // Logowanie błędów walidacyjnych
          console.error('Validation Errors:', validationError.errors);

          // Dodajemy błędy walidacyjne do tablicy
          this.validationErrors = validationError.errors;
        } else {
          // W przypadku innych błędów
          this.errorMessage += `: ${error.message || error.statusText}`;
          console.error('Unexpected Error:', error);
        }
      }
    );
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
          temp: '0',
          treshold: '0',
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
    this.updateEventDataText();
  }

  clearError() {
    this.errorMessage = '';
  }

  clearResponse() {
    this.serverResponse = null;
    this.onEventTypeChange();
  }
}
