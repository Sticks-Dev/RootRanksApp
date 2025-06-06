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
    static serverList: ServerData[] = [];
    filteredServerList: ServerData[] = [];

    readonly MAX_SERVER_DISPLAY_COUNT: number = 10;
    readonly SMALL_BUTTON_THRESHOLD: number = 4;

    ngOnInit(): void {
        this.CountServers();
    }

    async CountServers() {
        await this.SetAllServerData();
        this.FilterServers('');
    }

    async SetAllServerData() {
        const url: string = 'https://raw.githubusercontent.com/Sticks-Dev/RootRanksApp/main/src/db.json';
        try {
            await fetch(url).then(async response => {
                const json = await response.json();

                Search.serverList = json['Servers'] as ServerData[];
            });
        } catch (error) {
            console.error("Error fetching server data:", error);
        }
    }

    FilterServers(text: string) {
        if (!text) {
            this.filteredServerList = Search.serverList.slice(0, this.MAX_SERVER_DISPLAY_COUNT);
            return;
        }
        const tempList: ServerData[] = Search.serverList.filter(server =>
            server.serverName.toLowerCase().includes(text.toLowerCase())
        );

        this.filteredServerList = tempList.slice(0, this.MAX_SERVER_DISPLAY_COUNT);
    }
}