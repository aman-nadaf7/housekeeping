import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-kpi-card',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './kpi-card.component.html',
  styleUrls: ['./kpi-card.component.scss'],
})
export class KpiCardComponent {
  @Input() label!: string;
  @Input() value!: string;
  @Input() subLabel: string | null = null;

  @Input() delta: number | null = null;        // for Arrival / Departure
  @Input() avgService: number | null = null;   // for Guest Request

  get deltaText(): string | null {
    if (this.delta == null) return null;
    const prefix = this.delta >= 0 ? '+' : '';
    return `${prefix}${this.delta.toFixed(1)}%`;
  }
}
