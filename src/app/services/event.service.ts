import { Injectable } from '@angular/core';

import {
  DeviceMalfunctionEvent,
  DoorUnlockedEvent,
  EventType,
  TemperatureExceededEvent,
} from '../models/event.models';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  // Factory method for generating default event data
  createDefaultEventData(
    eventType: 'deviceMalfunction' | 'temperatureExceeded' | 'doorUnlocked'
  ): EventType {
    const defaultEventDataMap: { [key: string]: () => EventType } = {
      deviceMalfunction: () =>
        ({
          eventType: 'deviceMalfunction',
          deviceId: '',
          eventDate: Date.now(),
          reasonCode: 0,
          reasonText: '',
        } as DeviceMalfunctionEvent),
      temperatureExceeded: () =>
        ({
          eventType: 'temperatureExceeded',
          deviceId: '',
          eventDate: Date.now(),
          temp: '0',
          treshold: '0',
        } as TemperatureExceededEvent),
      doorUnlocked: () =>
        ({
          eventType: 'doorUnlocked',
          deviceId: '',
          eventDate: Date.now(),
          unlockDate: Date.now(),
        } as DoorUnlockedEvent),
    };

    return defaultEventDataMap[eventType]();
  }
}
