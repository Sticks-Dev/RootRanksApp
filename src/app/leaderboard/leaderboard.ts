import { Component, OnInit } from '@angular/core';
import { User } from '../user/user';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SortingPriority } from '../Sorter';
import { Sorter } from '../Sorter';
import { UserData } from '../UserData';
import { Search } from '../search/search';
import { Input } from '@angular/core';
import { Handler } from '../Sorter'

@Component({
  selector: 'app-leaderboard',
  imports: [CommonModule, User],
  templateUrl: './leaderboard.html',
  styleUrl: './leaderboard.css'
})
export class Leaderboard implements OnInit {
    @Input() sorter!: Sorter;

    server_id: number;
    user_data!: UserData[];
    currentPriority: SortingPriority = SortingPriority.Solo;

    constructor(router: Router) {
        let route: string | string[] = router.url
        route = route.split('/')
        this.server_id = Number(route[route.length-1])
    }

    ngOnInit() {
        this.GetUserData().then(user_data => {
            this.user_data = this.user_data = user_data;
            this.SortUsers(SortingPriority.Solo)
        });
        const handler: Handler = this.SortUsers.bind(this);
        this.sorter.AddHandler(handler)
    }

    SortUsers(priority: SortingPriority): void {
        this.user_data = Sorter.MergeSort(priority, this.user_data)
    }

    async GetUserData(): Promise<UserData[]> {
        const servers = Search.serverList;
        if (servers == null || servers.length === 0)
            return [];
        const server_data = servers.find(server => server.serverID === this.server_id)
        if (server_data == null)
            return [];
        return server_data.userData;
    }

    TrackByUsername(index: number, userData: UserData) {
        return userData['username']
    }
}
