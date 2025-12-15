import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export type RoomStatus = 'cleaned' | 'dirty' | 'inspect' | 'outOfService';

export interface Room {
  id: number;
  number: string;
  type: string;
  status: RoomStatus;
  tag?: 'DND' | 'MUR' | null;
}

export interface Floor {
  id: number;
  name: string;
  totalRooms: number;
  cleaned: number;
  dirty: number;
  inspect: number;
  rooms: Room[][];
}

@Injectable({ providedIn: 'root' })
export class HousekeepingService {
  getFloors(): Observable<Floor[]> {
    const floors: Floor[] = [
      {
        id: 1,
        name: 'Floor 1',
        totalRooms: 10,
        cleaned: 5,
        dirty: 3,
        inspect: 2,
        rooms: [
          [
            { id: 1, number: '1200', type: 'Deluxe', status: 'cleaned' },
            { id: 2, number: '1201', type: 'Deluxe', status: 'dirty', tag: 'DND' },
            { id: 3, number: '1202', type: 'Deluxe', status: 'inspect' },
            { id: 4, number: '1203', type: 'Deluxe', status: 'dirty' },
            { id: 5, number: '1204', type: 'Deluxe', status: 'cleaned' }
          ],
          [
            { id: 6, number: '1205', type: 'Deluxe', status: 'cleaned' },
            { id: 7, number: '1206', type: 'Deluxe', status: 'inspect', tag: 'MUR' },
            { id: 8, number: '1207', type: 'Deluxe', status: 'cleaned' },
            { id: 9, number: '1207', type: 'Deluxe', status: 'cleaned' },
            { id: 10, number: '1208', type: 'Deluxe', status: 'dirty', tag: 'DND' }
          ]
        ]
      } 
      // add Floor 2, Floor 3 etc.
    ];
    return of(floors);
  }
}
