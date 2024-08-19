import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-theme-changer',
  standalone: true,
  imports: [],
  templateUrl: './theme-changer.component.html',
  styleUrl: './theme-changer.component.css'
})
export class ThemeChangerComponent {
    constructor(private themeService: ThemeService) {}
  
    toggleTheme() {
      this.themeService.toggleTheme();
    }
  
    get isDarkThemeActive(): boolean {
      return this.themeService.isDarkThemeActive;
    }
  }