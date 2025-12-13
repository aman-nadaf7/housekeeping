import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface PropertySummary {
  occupancy: { current: number; total: number; percent: number };
  arrival: { count: number; delta: number };
  departure: { count: number; delta: number };
  guestRequest: { count: number; avgServiceTimeMinutes: number };
}

@Injectable({ providedIn: 'root' })
export class PropertyService {
  getSummary(): Observable<PropertySummary> {
    return of({
      occupancy: { current: 232, total: 290, percent: 25 },
      arrival: { count: 42, delta: 2 },
      departure: { count: 42, delta: -2 },
      guestRequest: { count: 42, avgServiceTimeMinutes: 4.5 }
    });
  }
}
