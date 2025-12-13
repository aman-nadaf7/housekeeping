import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { PropertyOverviewComponent } from './features/housekeeping/pages/property-overview/property-overview.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'housekeeping/property-overview', pathMatch: 'full' },
      { path: 'housekeeping/property-overview', component: PropertyOverviewComponent }
    ]
  }
];
