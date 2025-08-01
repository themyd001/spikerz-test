import { Component } from '@angular/core';
import {
  ListInfoComponent,
  RemediationsComponent,
  TextInfoComponent,
  VulnerabilityDiagramComponent,
  VulnerabilityGraphComponent,
  VulnerabilityTableComponent,
} from './components';
import {
  ASSETS_WITH_RISK,
  LIST_INFORMATIONS,
  REMEDIATIONS,
  TEXT_INFORMATIONS,
} from '@shared/constants';

@Component({
  selector: 'app-dashboard',
  imports: [
    TextInfoComponent,
    ListInfoComponent,
    RemediationsComponent,
    VulnerabilityDiagramComponent,
    VulnerabilityGraphComponent,
    VulnerabilityTableComponent,
  ],
  host: {
    class: 'page-content',
  },
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  TEXT_INFORMATIONS = TEXT_INFORMATIONS;
  LIST_INFORMATIONS = LIST_INFORMATIONS;
  REMEDIATIONS = REMEDIATIONS;
  ASSETS_WITH_RISK = ASSETS_WITH_RISK;
}
