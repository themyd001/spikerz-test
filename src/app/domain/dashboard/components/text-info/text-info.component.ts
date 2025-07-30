import { Component, input } from '@angular/core';
import { TEXT_INFORMATIONS } from '@shared/constants';

@Component({
  selector: 'app-text-info',
  imports: [],
  templateUrl: './text-info.component.html',
  styleUrl: './text-info.component.scss',
})
export class TextInfoComponent {
  textInformations = input.required<typeof TEXT_INFORMATIONS>();
}
