import { Component } from '@angular/core';
import { Categorizer } from "../categorizer/categorizer";
import { Leaderboard } from "../leaderboard/leaderboard";
import { CommonModule } from '@angular/common';
import { Sorter } from '../Sorter';

@Component({
  selector: 'app-content',
  imports: [CommonModule, Categorizer, Leaderboard],
  templateUrl: './content.html',
  styleUrl: './content.css'
})
export class Content {
    sorter: Sorter = new Sorter;
}
