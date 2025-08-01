import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MENU_ITEMS } from '@shared/constants';

@Component({
  selector: 'app-sidebar',
  imports: [RouterModule],
  templateUrl: './sidebar.component.html',
  host: {
    style: 'position: relative',
  },
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  MENU_ITEMS = MENU_ITEMS;

  @Input() iconOnly!: boolean;
  @Output() iconOnlyChange = new EventEmitter<boolean>();
}
