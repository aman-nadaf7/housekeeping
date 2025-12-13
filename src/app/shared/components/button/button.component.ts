import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  template: `
    <button
      class="btn"
      [class.btn-primary]="variant === 'primary'"
      [class.btn-outline]="variant === 'outline'"
      (click)="clicked.emit($event)"
      type="button"
    >
      <ng-content></ng-content>
    </button>
  `,
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() variant: 'primary' | 'outline' = 'primary';
  @Output() clicked = new EventEmitter<Event>();
}
