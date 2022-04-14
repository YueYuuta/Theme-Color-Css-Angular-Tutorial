import { Component, OnInit } from '@angular/core';
import { ThemeServiceService } from './services/theme-service.service';
import { NameColor, NameTheme } from './utils/enums';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'practica-css-angular';
  defaultTheme = NameTheme.light;
  defaultColor = NameColor.purple;

  constructor(private readonly _themeService: ThemeServiceService) {}
  ngOnInit(): void {
    this.setDefaultColor();
    this.setDefaultTheme();
  }
  setDefaultColor(): void {
    this._themeService.setTheme(this.defaultColor);
  }
  setDefaultTheme() {
    this._themeService.setTheme(this.defaultTheme);
  }
}
