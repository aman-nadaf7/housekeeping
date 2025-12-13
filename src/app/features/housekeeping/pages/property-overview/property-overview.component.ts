import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyService, PropertySummary } from '../../../../core/services/property.service';
import { HousekeepingService, Floor } from '../../../../core/services/housekeeping.service';
import { FloorSectionComponent } from '../../components/floor-section/floor-section.component';
import { KpiCardComponent } from '../../../../shared/components/kpi-card/kpi-card.component';
import { DonutChartComponent } from '../../../../shared/components/donut-chart/donut-chart.component';



@Component({
  selector: 'app-property-overview',
  standalone: true,
  imports: [CommonModule, FloorSectionComponent, KpiCardComponent, DonutChartComponent],
  templateUrl: './property-overview.component.html',
  styleUrls: ['./property-overview.component.scss']
})
export class PropertyOverviewComponent implements OnInit {
  summary?: PropertySummary;
  floors: Floor[] = [];

  constructor(
    private propertyService: PropertyService,
    private housekeepingService: HousekeepingService
  ) {}

  ngOnInit(): void {
    this.propertyService.getSummary().subscribe((s) => (this.summary = s));
    this.housekeepingService.getFloors().subscribe((f) => (this.floors = f));
  }
}
