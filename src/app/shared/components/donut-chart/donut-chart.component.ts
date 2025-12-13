import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-donut-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.scss']
})
export class DonutChartComponent {
  @Input() percent = 0;

  get dashArray(): string {
    const clamped = Math.max(0, Math.min(100, this.percent));
    const filled = (clamped / 100) * 100;
    const remaining = 100 - filled;
    return `${filled} ${remaining}`;
  }
}
