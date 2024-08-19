import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly themeKey = 'isDarkTheme';
  private isDarkTheme = false;

  constructor() {
    if (this.isLocalStorageAvailable()) {
      const savedTheme = localStorage.getItem(this.themeKey);
      if (savedTheme === 'true') {
        this.isDarkTheme = true;
        document.body.classList.add('dark-theme');
      }
    }
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    if (this.isLocalStorageAvailable()) {
      localStorage.setItem(this.themeKey, this.isDarkTheme.toString());
    }
    if (this.isDarkTheme) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }

  get isDarkThemeActive(): boolean {
    return this.isDarkTheme;
  }

  private isLocalStorageAvailable(): boolean {
    try {
      const test = '__storage_test__';
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch (e) {
      return false;
    }
  }
}
