import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Floor } from '../../../../core/services/housekeeping.service';
import { RoomCardComponent } from '../room-card/room-card.component';





@Component({
  selector: 'app-floor-section',
  standalone: true,
  imports: [CommonModule, RoomCardComponent],
  templateUrl: './floor-section.component.html',
  styleUrls: ['./floor-section.component.scss']
})
export class FloorSectionComponent {
  @Input() floor!: Floor;
}
