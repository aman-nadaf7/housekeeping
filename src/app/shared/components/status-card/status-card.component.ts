import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Room } from '../../../core/services/housekeeping.service';

@Component({
  selector: 'app-status-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './status-card.component.html',
  styleUrls: ['./status-card.component.scss']
})
export class StatusCardComponent {
  @Input() room!: Room;
}
