import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Sorter, SortingPriority } from '../Sorter';
import { CommonModule } from '@angular/common';
import { UserData } from '../UserData';

@Component({
  selector: 'app-user',
  imports: [CommonModule],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
    @Input() user!: UserData;
    @Input() sorter!: Sorter;
    
    SortingMethod = SortingPriority;

    GetClass(sort: SortingPriority): string {
        if (sort === this.sorter.priority)
            return 'active_score'
        return 'inactive_score'
    }
}
