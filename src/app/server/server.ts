import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Search } from '../search/search';
import { ServerData } from '../ServerData';

@Component({
  selector: 'app-server',
  imports: [CommonModule, RouterModule],
  templateUrl: './server.html',
  styleUrl: './server.css'
})
export class Server {
    @Input() serverData!: ServerData;
    @Input() searchComponent!: Search

    getButtonSizeClass(): string {
        if (this.searchComponent.filteredServerList.length == 1)
            return 'button_full'
        if (this.searchComponent.filteredServerList.length < this.searchComponent.SMALL_BUTTON_THRESHOLD)
            return 'button_large';
        return 'button_small';
    }
}
