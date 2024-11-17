export type Event =
  | DeviceMalfunctionEvent
  | TemperatureExceededEvent
  | DoorUnlockedEvent;

export interface BaseEvent {
  eventType: 'deviceMalfunction' | 'temperatureExceeded' | 'doorUnlocked'; // Wspólny typ zdarzenia
}

export interface DeviceMalfunctionEvent extends BaseEvent {
  eventType: 'deviceMalfunction';
  deviceId: string;
  eventDate: number; // Unix timestamp
  reasonCode: number;
  reasonText: string;
}

export interface TemperatureExceededEvent extends BaseEvent {
  eventType: 'temperatureExceeded';
  deviceId: string;
  eventDate: number; // Unix timestamp
  temp: number;
  treshold: number;
}

export interface DoorUnlockedEvent extends BaseEvent {
  eventType: 'doorUnlocked';
  unlockDate: number; // Unix timestamp
  deviceId: string;
  eventDate: number; // Unix timestamp
}
