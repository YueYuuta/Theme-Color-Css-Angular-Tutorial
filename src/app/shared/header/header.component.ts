import { Component, OnInit } from '@angular/core';
import { ThemeServiceService } from '../../services/theme-service.service';
import { NameColor, NameTheme } from '../../utils/enums';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public nameColors = [
    { name: NameColor.purple },
    {
      name: NameColor.green,
    },
    { name: NameColor.pink },
  ];

  public links = [
    { name: 'Inicio' },
    {
      name: 'Servicios',
    },
    { name: 'Nosotros' },
  ];
  public openAnimate = false;
  public themeDark: boolean = false;

  constructor(private readonly _themeService: ThemeServiceService) {}

  ngOnInit(): void {}
  open() {
    this.openAnimate = !this.openAnimate;
  }
  changeTheme() {
    this.themeDark
      ? this._themeService.setTheme(NameTheme.light)
      : this._themeService.setTheme(NameTheme.dark);
    this.themeDark = !this.themeDark;
  }

  changeColor(color: string) {
    this._themeService.setTheme(color);
  }
}
