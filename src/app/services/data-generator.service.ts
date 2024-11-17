import { Injectable } from '@angular/core';

import { Event } from '../models/event.models';

@Injectable({
  providedIn: 'root',
})
export class DataGeneratorService {
  generateData(
    eventType: 'deviceMalfunction' | 'temperatureExceeded' | 'doorUnlocked'
  ): Event {
    switch (eventType) {
      case 'deviceMalfunction':
        return {
          eventType: 'deviceMalfunction',
          deviceId: this.generateRandomString(8),
          eventDate: this.generateTimestamp(),
          reasonCode: this.generateRandomNumber(100, 500),
          reasonText: 'Generated reason ...',
        };
      case 'temperatureExceeded':
        return {
          eventType: 'temperatureExceeded',
          deviceId: this.generateRandomString(8),
          eventDate: this.generateTimestamp(),
          temp: this.generateRandomNumber(20, 100),
          treshold: this.generateRandomNumber(15, 50),
        };
      case 'doorUnlocked':
        return {
          eventType: 'doorUnlocked',
          unlockDate: this.generateTimestamp(),
          deviceId: this.generateRandomString(8),
          eventDate: this.generateTimestamp(),
        };
      default:
        throw new Error('Unsupported event type');
    }
  }

  private generateRandomString(length: number): string {
    const chars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  private generateRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  private generateTimestamp(): number {
    return Math.floor(Date.now() / 1000); // Generowanie timestamp w sekundach
  }
}
