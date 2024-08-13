import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class ThemeSwitcherComponent {
  themes = ['1', '2', '3'];
  selectedTheme = this.themes[1]; 

  onThemeChange(theme: string): void {
    document.body.className = '';
    document.body.classList.add(`theme-${theme}`);
  }
}
