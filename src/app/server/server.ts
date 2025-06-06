import { Component, Input, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Search } from '../search/search';
import { ServerData } from '../ServerData';
import { expandOnHoverAnimation } from '../../animations';

@Component({
    selector: 'app-server',
    imports: [CommonModule, RouterModule],
    templateUrl: './server.html',
    styleUrl: './server.css',
    animations: [
        expandOnHoverAnimation
    ]
})
export class Server {
    @Input() serverData!: ServerData;
    @Input() searchComponent!: Search

    public hovered: boolean = false;

    @HostListener('mouseover')
    onMouseOver() {
        this.hovered = true;
    }

    @HostListener('mouseout')
    onMouseOut() {
        this.hovered = false;
    }
}
