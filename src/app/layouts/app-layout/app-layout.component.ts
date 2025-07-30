import { Component } from '@angular/core';
import { SidebarComponent } from '@shared/components';
import { RouterModule } from '@angular/router';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-app-layout',
  imports: [SidebarComponent, RouterModule, NgStyle],
  templateUrl: './app-layout.component.html',
  styleUrl: './app-layout.component.scss',
})
export class AppLayoutComponent {
  sidebarOpened = true;
}
