import { Component, input } from '@angular/core';
import { LIST_INFORMATIONS } from '@spikerz/shared/constants';

@Component({
  selector: 'app-list-info',
  imports: [],
  templateUrl: './list-info.component.html',
  styleUrl: './list-info.component.scss',
})
export class ListInfoComponent {
  listInformations = input.required<typeof LIST_INFORMATIONS>();
}
