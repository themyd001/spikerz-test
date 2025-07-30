import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MENU_ITEMS } from '@shared/constants';

@Component({
  selector: 'app-sidebar',
  imports: [RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  MENU_ITEMS = MENU_ITEMS;
}
