export type EventType =
  | DeviceMalfunctionEvent
  | TemperatureExceededEvent
  | DoorUnlockedEvent;

export interface BaseEvent {
  eventType: 'deviceMalfunction' | 'temperatureExceeded' | 'doorUnlocked';
}

export interface DeviceMalfunctionEvent extends BaseEvent {
  eventType: 'deviceMalfunction';
  deviceId: string;
  eventDate: number;
  reasonCode: number;
  reasonText: string;
}

export interface TemperatureExceededEvent extends BaseEvent {
  eventType: 'temperatureExceeded';
  deviceId: string;
  eventDate: number;
  temp: string;
  treshold: string;
}

export interface DoorUnlockedEvent extends BaseEvent {
  eventType: 'doorUnlocked';
  unlockDate: number;
  deviceId: string;
  eventDate: number;
}

// Interfejs dla odpowiedzi sukcesu
export interface SuccessResponse {
  message: string;
  receivedData: {
    deviceId: string;
    eventDate: number;
    eventType: string;
    reasonCode: number;
    reasonText: string;
  };
  details: {
    status: string;
    message: string;
  };
}

// Interfejs dla błędu
export interface ErrorResponse {
  message: string;
  errors: string[]; // Tablica błędów walidacyjnych
}
