import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusCardComponent } from '../../../../shared/components/status-card/status-card.component';
import { Room } from '../../../../core/services/housekeeping.service';

@Component({
  selector: 'app-room-card',
  standalone: true,
  imports: [CommonModule, StatusCardComponent],
  template: `<app-status-card [room]="room"></app-status-card>`
})
export class RoomCardComponent {
  @Input() room!: Room;
}
