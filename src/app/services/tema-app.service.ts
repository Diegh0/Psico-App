import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemaAppService {

  constructor() { }
  darkTheme = false

  isDarkTheme(): boolean {
    return this.darkTheme;
  }

 toggleTheme(): void {
    this.darkTheme = !this.darkTheme;
  }
}
