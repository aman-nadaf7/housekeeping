import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [FormsModule, MatDatepickerModule, MatNativeDateModule, MatInputModule],
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent {
  selectedDate: Date | null = null;
  selectedDateLabel = '25 October 2024'; // initial text on image

  onDateChange(date: Date | null): void {
    this.selectedDate = date;

    if (!date) {
      this.selectedDateLabel = '25 October 2024';
      return;
    }

    const options: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    };
    this.selectedDateLabel = date.toLocaleDateString('en-GB', options);
  }
}
