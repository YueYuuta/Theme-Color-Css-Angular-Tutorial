import { Injectable } from '@angular/core';
import { Theme } from '../interfaces/ThemeInterface';
import { dark, light, green, pink, purple } from '../utils/themes';
import { NameColor, NameTheme } from '../utils/enums';
import {} from '../utils/themes/theme';
@Injectable({
  providedIn: 'root',
})
export class ThemeServiceService {
  private active!: Theme;
  private themeSearch: any = {
    [NameTheme.dark]: dark,
    [NameTheme.light]: light,
    [NameColor.green]: green,
    [NameColor.pink]: pink,
    [NameColor.purple]: purple,
  };

  constructor() {}

  setTheme(theme: string) {
    const sendTheme: Theme = this.themeSearch[theme];
    this.setActiveTheme(sendTheme);
  }

  setActiveTheme(theme: Theme): void {
    this.active = theme;

    Object.keys(this.active.properties).forEach((property) => {
      document.documentElement.style.setProperty(
        property,
        this.active.properties[property]
      );
    });
  }
}
