import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Server } from '../server/server';
import { ServerData } from '../ServerData';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, Server],
  templateUrl: './search.html',
  styleUrl: './search.css'
})
export class Search implements OnInit {
    serverList: ServerData[] = [];
    filteredServerList: ServerData[] = [];

    readonly MAX_SERVER_DISPLAY_COUNT: number = 10;
    readonly SMALL_BUTTON_THRESHOLD: number = 4;

    ngOnInit(): void {
        this.countServers();
    }

    async countServers() {
        await this.getAllServerData().then(data => this.serverList = data);
        this.filterServers('')
    }

    async getAllServerData(): Promise<ServerData[]> {
        const url: string = 'http://localhost:3000/Servers';
        try {
            const response = await fetch(url);
            if (!response.ok)
                throw new Error(`HTTP error! status: ${response.status}`);
            return await response.json() ?? [];
        } catch (error) {
            console.error("Error fetching server data:", error);
            return [];
        }
    }

    filterServers(text: string) {
        if (!text) {
          this.filteredServerList = this.serverList.slice(0, this.MAX_SERVER_DISPLAY_COUNT);
          return;
        }

        const tempList: ServerData[] = this.serverList.filter(server =>
            server.serverName.toLowerCase().includes(text.toLowerCase())
        );

        this.filteredServerList = tempList.slice(0, this.MAX_SERVER_DISPLAY_COUNT);
    }
}