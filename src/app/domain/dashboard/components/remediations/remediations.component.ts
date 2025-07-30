import { NgTemplateOutlet } from '@angular/common';
import { Component, input } from '@angular/core';
import { REMEDIATIONS } from '@spikerz/shared/constants';

@Component({
  selector: 'app-remediations',
  imports: [NgTemplateOutlet],
  templateUrl: './remediations.component.html',
  styleUrl: './remediations.component.scss',
})
export class RemediationsComponent {
  remediations = input.required<typeof REMEDIATIONS>();
}
