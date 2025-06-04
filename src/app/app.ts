import { Component } from '@angular/core';
import { Headbar } from './headbar/headbar';
import { Footer } from "./footer/footer";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Headbar, RouterOutlet, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'RootRanks';
}
